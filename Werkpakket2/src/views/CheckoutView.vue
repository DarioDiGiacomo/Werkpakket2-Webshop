<script>
import { useCartStore } from '@/stores/cartStore.js';
import { useAuthStore } from '@/stores/authStore.js';



export default {
  data() {
    return {
      shoppingCart: useCartStore(),
      authStore: useAuthStore(),
      userData: {
        name: '',
        street: '',
        number: '',
        city: '',
      },
      isBillingAddressEditable: false,
    }
  },

  methods: {
    toggleBillingAddressEditability() {
      this.isBillingAddressEditable = !this.isBillingAddressEditable;
    },

    goToConfirmation() {
            this.$router.push("/confirmation")
        }
  },
  

  computed: {
    billingAddressClasses() {
      return {
        'dimmed': !this.isBillingAddressEditable,
      };
    },
  },

  created() {
    // Populate form fields with user data when the component is created
    if (this.authStore.loggedIn) {
      this.userData.name = this.authStore.account.name || '';
      this.userData.street = this.authStore.account.street || '';
      this.userData.number = this.authStore.account.number || '';
      this.userData.city = this.authStore.account.city || '';
      this.userData.adress = this.authStore.account.street + ' ' + this.authStore.account.number + ', ' + this.authStore.account.city.toUpperCase() || '';
      this.userData.email = this.authStore.account.email || '';
      this.userData.country = this.authStore.account.country || '';
      this.userData.phone = this.authStore.account.phone || '';
    }
  },
};
</script>
<template>
  <div class="checkout">
    <h2>Checkout</h2>
    <div class="checkout-container">
      <div class="checkout-container-summary">
        <h3>Order Summary</h3>
        <div v-for="(product, index) in shoppingCart.cartItems" :key="index" class="shoppingcart-item">
          <div class="shoppingcart-item-details">
            <img :src="'src/assets/' + product.product.image_blank" class="shoppingcart-item-details-img"
              :alt="product.product.title">
            <div class="shoppingcart-item-details-text">
              <p class="shoppingcart-item-details-text-name">{{ product.product.title }} - <span>{{ product.quantity
              }}<span>X</span></span></p>
              <p class="shoppingcart-item-details-text-price">€{{ product.product.price }} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="shippingform">
        <h3>Shipping Information</h3>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="userData.name" required>

          <label for="address">Address:</label>
          <input type="text" id="address" v-model="userData.adress" required>

          <label for="billingAddress" :class="billingAddressClasses">Billing address:</label>
          <input type="text" id="billingAddress" :class="billingAddressClasses" :readonly="!isBillingAddressEditable">

          <div class="shippingform-billing">
            <input type="checkbox" id="editBillingAddress" @change="toggleBillingAddressEditability">
            <label for="editBillingAddress">Use Billing Address</label>
          </div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="userData.email" required>

          <label for="country">Country:</label>
          <input type="text" id="country" v-model="userData.country" required>

          <label for="phone">Phone:</label>
          <input type="tel" id="phone" v-model="userData.phone" required>

          <div class="shippingform-totalsection">
            <div class="shippingform-totalsection-total">
              <div class="shippingform-totalsection-total-prices">
                <p class="shippingform-totalsection-total-prices-label">Total:</p>
                <p class="shippingform-totalsection-total-prices-amount">€ {{ shoppingCart.totalPrice.toFixed(2) }}</p>
              </div>
            </div>
            <div class="shippingform-totalsection-button">
              <button @click="goToConfirmation">Place Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  
<style lang="scss"></style>
  