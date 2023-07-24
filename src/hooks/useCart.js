import create from 'zustand';
import { produce } from 'immer';

const useCartStore = create(set => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],

  addToCart: (item) => set(state => produce(state, draftState => {
    draftState.cart.push(item);
    localStorage.setItem('cart', JSON.stringify(draftState.cart));
  })),

  removeFromCart: (itemId) => set(state => produce(state, draftState => {
    draftState.cart = draftState.cart.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(draftState.cart));
  })),

  clearCart: () => set(state => produce(state, draftState => {
    draftState.cart = [];
    localStorage.removeItem('cart');
  })),

  getCartItemCount: () => useCartStore.getState().cart.length,
}));

export { useCartStore };

export function useCart() {
  return useCartStore((state) => state);
}



