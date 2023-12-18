import { defineStore } from "pinia";
import { useProductStore } from "@/stores/productStore.js";

export const useCartStore = defineStore('Cart', {


  // Staat van de winkelwagen
  state: () => ({
    cartItems: [],
    productStore: useProductStore()
  }),
  actions: {
    addToCart(cartItem) {
      // const existingItem = this.cartItems.find(item => item.product.id === cartItem.product.id)
      // console.log(this.cartItems.find(item => item.product.id === cartItem.product.id))
      // console.log(existingItem)
      // if (existingItem) {
      // existingItem.quantity += cartItem.quantity
      // }
      // else {
      this.cartItems.push(cartItem);
      console.log(this.cartItems)

      // }
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    calculateTotal() {
      // Implement your total calculation logic here
    },
  },

  getter: {
    getCartItems: () => this.cartItems,
  }
});