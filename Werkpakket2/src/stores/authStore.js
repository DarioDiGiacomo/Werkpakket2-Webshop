// auth.js
import { defineStore } from 'pinia';
import userJSON from '@/user.json';
import { useCartStore } from '@/stores/cartStore.js';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: userJSON,
    loggedIn: false,
    account: "",
    cartStore: useCartStore()
  }),
  actions: {
   login(email, password) {
      const matchingAccount = this.account = this.users.find((account) => account.email === email && account.password === password);
      if (matchingAccount) {
        this.loggedIn = true;
      } else {
        alert('User do not exist!')
      }
    },

    logout() {
      this.loggedIn = false;
      this.cartStore.cartItems.splice(0, this.cartStore.cartItems.length)
    },

    goToMain() {
      this.$router.push("/")
      this.cartStore.cartItems.splice(0, this.cartStore.cartItems.length)
    }
    // ... andere acties
  },
});