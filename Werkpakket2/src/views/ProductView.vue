<script>
import { useProductStore } from '@/stores/productStore.js';
import { useCartStore } from '@/stores/cartStore.js';
import { useAuthStore } from '@/stores/authStore.js';

export default {
  data() {
    return {
      products: useProductStore(),
      shoppingCart: useCartStore(),
      authStore: useAuthStore(),
      assetUrl: "http://localhost:5173/src/assets/",
      quantity: 1,
      isOutOfStock: false,
      showNotification: false,
      showError: false,
      notificationMessage: "",
      errorMessage: "You JINXD this quantity",
      selectedSize: "select size",
      sizeError: false,
      
    };
  },

  computed: {
    product() {
      const productId = this.$route.params.id;
      // return this.products.productList.find((product) => product.id === parseInt(productId));
      return this.products.getProductById(productId)
    },
  },

  methods: {
    addToCart() {
      if (this.authStore.loggedIn) {
        if (this.quantity > 0 && this.quantity <= this.product.quantity && this.selectedSize !== "select size") {

          console.log('button pressed')

          const cartItem = {
            id: `${this.product.id}-${this.selectedSize}`,
            product: this.product,
            quantity: this.quantity,
            sizes: this.selectedSize,
            
          }

          console.log('added')

          this.shoppingCart.addToCart(cartItem)

          let productQuantity = this.product.quantity -= this.quantity;
          // Controleer of het product nu uitverkocht is
          this.isOutOfStock = productQuantity === 0;

          console.log(productQuantity)

          // Toon de melding
          this.showError = false;
          this.showNotification = true;
          this.notificationMessage = `You added ${this.quantity} ${this.quantity === 1 ? this.product.title : `${this.product.title}s`} to your cart.`;

          // Verberg de melding na een paar seconden
          setTimeout(() => {
            this.showNotification = false;
          }, 5000);

          this.sizeError = false;
        } else {
          this.showNotification = false;
          this.showError = true

          this.sizeError = this.selectedSize === "select size";


          setTimeout(() => {
            this.showError = false;
          }, 5000);
        }
      } else {
        this.$router.push("/login")
      }
    },
  },
};
</script>

<template lang="">
  <div class="detail">
        <div class="detail-img">
            <img :src="assetUrl + product.image_square" class="detail-img-sqaure" :alt="product.title">                        
            <img :src="assetUrl + product.image_long" class="detail-img-long" :alt="product.title">                        
        </div>
        <div class="detail-text">
            <h1 class="detail-text-name"> {{product.title}}</h1>
            <p class="detail-text-price"> €{{product.price}}</p>
            <select v-model="selectedSize" class="detail-text-size">
                <option value="select size">Select Size</option>
                <option v-for="size in product.sizes" :key="size">{{size}}</option>
            </select>
            <div class="detail-text-color">
                <div class="detail-text-color-black"></div>
                <div class="detail-text-color-white"></div>
                <div class="detail-text-color-cream"></div>
                <div class="detail-text-color-brown"></div>
            </div>
            <input type="number" v-model="quantity" :max="product.quantity" class="detail-text-quantity">
            <button @click="addToCart" :disabled="product.quantity === 0 || quantity <= 0" class="detail-text-button">{{ isOutOfStock ? 'Out of Stock' : 'Add to Cart' }}</button>
                <h2 class="detail-text-info">Product details</h2>
            <p class="detail-text-infotext"><span>GENDER:</span> {{product.gender}}</p>
            <p class="detail-text-infotext"><span>FABRIC:</span> {{product.fabric}}</p>
            <p class="detail-text-infotext"><span>WEIGHT:</span> {{product.weight}}</p>
            <p class="detail-text-infotext"><span>AVAILABLE SIZES:</span> {{product.available_sizes}}</p>
            <p class="detail-text-infotext"><span>LAUNDRY TEMPERATURE:</span> {{product.laundry_temperature}}</p>
        </div>

        <div v-if="showNotification" class="notification">
        <p>{{ notificationMessage }}</p>
        </div>

        <div v-if="showError" class="notification false">
        <p>{{ errorMessage }}</p>
        </div>
  </div>
</template>

<style lang="scss"></style>
