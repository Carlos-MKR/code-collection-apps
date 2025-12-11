import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function renderProductList(container: HTMLElement) {
  container.innerHTML = "";
  container.className =
  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4";



  products.forEach((product) => {
    container.appendChild(ProductCard(product));
  });
}
