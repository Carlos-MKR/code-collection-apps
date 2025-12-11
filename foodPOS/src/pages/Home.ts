import { renderProductList } from "../components/ProductList";
import { renderCart } from "../components/Cart";

export function renderHome() {
  const app = document.querySelector("#app") as HTMLElement;

  app.innerHTML = `
    <header class="bg-indigo-600 text-white p-5 text-3xl font-bold shadow-lg">
      🍽️ Punto de Venta
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-100">
      <div id="product-list"></div>
      <div id="cart" class="bg-white rounded-xl shadow-xl p-6 flex flex-col"></div>
    </div>
  `;
    
  renderProductList(document.getElementById("product-list")!);
  renderCart();
}
