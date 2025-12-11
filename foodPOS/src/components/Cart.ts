import { cart, getTotal, clearCart } from "../services/cartService";
import { updateAllProductQuantities } from "./ProductCard";
import { formatPrice } from "../utils/formatPrice";


export function renderCart() {
  const cartContainer = document.getElementById("cart");
  if (!cartContainer) return;

  const total = getTotal();

  const itemsHTML = cart
    .map(
      (item) => `
      <div class="flex justify-between text-gray-900">
        <span>${item.product.name} <span class="font-semibold ml-2">x${item.quantity}</span></span>
        <span class="font-semibold">${formatPrice(item.product.price * item.quantity)}</span>
      </div>
    `
    )
    .join("");

  cartContainer.innerHTML = `
    <h2 class="text-2xl font-bold mb-4 text-gray-900 text-center">🛒 Carrito</h2>

    <div class="overflow-y-auto space-y-3 border rounded-lg p-4 bg-gray-50 text-gray-900 max-h-72">
      ${itemsHTML || "<p class='text-gray-500 text-center'>No hay productos.</p>"}
    </div>

    <div class="mt-6 text-xl font-bold flex justify-between text-gray-900">
      <span>Total:</span>
      <span>${formatPrice(total)}</span>
    </div>

    <div class="mt-6 text-gray-900">
      <label class="font-semibold">Pago del cliente:</label>
      <input 
        id="pago-input"
        type="number" 
        class="w-full p-3 rounded-lg border mt-2 text-gray-900"
        placeholder="Cantidad pagada..."
      />

      <div class="text-xl font-bold mt-4 flex justify-between">
        <span>Cambio:</span>
        <span id="cambio-text">$0</span>
      </div>
    </div>

    <button 
      id="finalizar-btn" 
      class="mt-6 bg-green-600 text-white py-3 w-full rounded-lg text-xl hover:bg-green-700 shadow"
    >
      Finalizar Venta
    </button>
  `;

  const pagoInput = document.getElementById("pago-input") as HTMLInputElement;
  const cambioText = document.getElementById("cambio-text")!;

  pagoInput?.addEventListener("input", () => {
    const pago = Number(pagoInput.value);
    const cambio = pago - total;

    cambioText.textContent = cambio >= 0 ? formatPrice(cambio) : "---";
  });

  document.getElementById("finalizar-btn")?.addEventListener("click", () => {
    clearCart();
    renderCart();
    updateAllProductQuantities(); // Limpia contadores en ProductCard
  });
}
