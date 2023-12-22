import { defineStore } from "pinia";
import productJSON from '@/products.json'

export const useCartStore = defineStore('Cart', {


  // Staat van de winkelwagen
  state: () => ({
    cartItems: [],


  }),
  actions: {
    addToCart(cartItem) { 
      const existingItemIndex = this.cartItems.findIndex(item => item.product.id === cartItem.product.id);
      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity += cartItem.quantity;

      } else {
        this.cartItems.push(cartItem);
      }
    },
    removeFromCart(product) {
      this.cartItems = this.cartItems.filter(item => item.product.id !== product.product.id);
    },

    removeQuantity(product) {
      const existingItemIndex = this.cartItems.findIndex(item => item.product.id === product.product.id);
      if (existingItemIndex !== -1) {
        if (this.cartItems[existingItemIndex].quantity > 1) {
          this.cartItems[existingItemIndex].quantity--;

        } else {
          this.removeFromCart(product);
        }
      }
    },

    addQuantity(product) {
      const existingItemIndex = this.cartItems.findIndex(item => item.product.id === product.product.id);
      if (existingItemIndex !== -1) {
        const stockQuantity = product.product.quantity;
        if (this.cartItems[existingItemIndex].quantity <= stockQuantity) {
          this.cartItems[existingItemIndex].quantity++;
        }
      }
    },
  },

  getters: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },

    // Getter to calculate the total price including VAT
    totalPriceWithoutBTW() {
      return this.cartItems.reduce((total, item) => {
        const productPriceWithVAT = item.product.price / (1 + item.product.btw / 100);
        return total + productPriceWithVAT * item.quantity;
      }, 0);
    },
  }
});