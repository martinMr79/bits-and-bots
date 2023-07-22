import create from 'zustand';
import { produce } from 'immer';

const useCartStore = create(produce((set) => ({
  cart: [],

  addToCart: (item) => {
    set((state) => {
      state.cart.push(item);
    });
  },

  removeFromCart: (itemId) => {
    set((state) => {
      state.cart = state.cart.filter((item) => item.id !== itemId);
    });
  },

  clearCart: () => {
    set((state) => {
      state.cart = [];
    });
  },

  getCartItemCount: () => {
    return useCartStore.getState().cart.length;
  },
})));

export { useCartStore }; // Export the store object

export function useCart() {
  return useCartStore((state) => state); // Use the store with Zustand's hook API
}



