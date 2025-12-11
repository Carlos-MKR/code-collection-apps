import type { Product } from "../core/types";
import { addToCart, cart } from "../services/cartService";
import { renderCart } from "./Cart";
import { formatPrice } from "../utils/formatPrice";


export function ProductCard(product: Product): HTMLElement {
  const div = document.createElement("div");

  div.className =
    "bg-white rounded-xl shadow hover:shadow-xl transition p-4 w-full flex flex-col md:block text-center";

  const quantity = cart.find((i) => i.product.id === product.id)?.quantity || 0;

  div.innerHTML = `
    <div class="flex items-center gap-4 md:block">

      <img 
        src="${product.image}" 
        class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-lg mx-auto"
      />

      <div class="flex-1 md:mt-3">
        <h3 class="text-lg md:text-xl font-bold text-black">${product.name}</h3>
        <p class="text-gray-600 text-3xl">${formatPrice(product.price)}</p>
      </div>

      <div class="flex flex-col items-center gap-1">

        <!-- BOTÓN -->
        <button 
          class="
            bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 md:w-full
            text-xl md:text-base
          "
        >
          <span class="block md:hidden text-2xl font-bold">+</span>
          <span class="hidden md:block ">Agregar</span>
        </button>

        <!-- CONTADOR -->
        <span class="text-sm text-gray-400 mt-1">
          Agregados: <span class="font-bold text-gray-700 product-qty" data-id="${product.id}">${quantity}</span>
        </span>

      </div>
    </div>
  `;

  const btn = div.querySelector("button")!;
  const qtyText = div.querySelector(".product-qty") as HTMLElement;

  btn.addEventListener("click", () => {
    addToCart(product);
    renderCart();

    const newQty =
      cart.find((i) => i.product.id === product.id)?.quantity || 0;

    qtyText.textContent = String(newQty);
  });

  return div;
}

/* Esta función se ejecuta cuando Finalizar Venta → pone todos los contadores en 0 */
export function updateAllProductQuantities() {
  document.querySelectorAll(".product-qty").forEach((el) => {
    el.textContent = "0";
  });
}
