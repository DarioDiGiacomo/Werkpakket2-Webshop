import { defineStore } from "pinia";
// import { useProductStore } from "@/stores/productStore.js";

export const useCartStore = defineStore('Cart', {


  // Staat van de winkelwagen
  state: () => ({
    cartItems: [],
    // productStore: useProductStore()
  }),
  actions: {
    addToCart(cartItem) {


      const existingItemIndex = this.cartItems.findIndex(item => item.product.id === cartItem.product.id);

      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity += cartItem.quantity;
        console.log(existingItemIndex + ' 1')
        console.log(this.cartItems.length + ' 3')
        console.log(this.cartItems[existingItemIndex].quantity + ' CartItem')

      } else {

        this.cartItems.push(cartItem);
        console.log(existingItemIndex + ' 2')
        console.log(this.cartItems.length + ' 3.1')


      }
    }
  },

  getter: {
    getCartItems: () => this.cartItems,
  }
});