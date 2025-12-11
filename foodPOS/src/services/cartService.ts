import type { Product, CartItem } from "../core/types";

export let cart: CartItem[] = [];

export function addToCart(product: Product) {
  const item = cart.find(i => i.product.id === product.id);
  
  if (item) {
    item.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }
}

export function getTotal(): number {
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

export function clearCart() {
  cart = [];
}
