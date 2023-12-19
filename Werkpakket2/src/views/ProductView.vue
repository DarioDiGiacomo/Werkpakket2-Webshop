<script>
import { useProductStore } from '@/stores/productStore.js';
import { useCartStore } from '@/stores/cartStore.js';

export default {
  data() {
    return {
      products: useProductStore(),
      shoppingCart: useCartStore(),
      assetUrl: "http://localhost:5173/src/assets/",
      quantity: 1,
      isOutOfStock: false,
      showNotification: false,
      notificationMessage: "",
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
      if (this.quantity > 0 && this.quantity <= this.product.quantity) {
        // Update the stock dynamically
        this.product.quantity -= this.quantity;

        // Gebruik de winkelwagenstore om het product aan de winkelwagen toe te voegen
        // const cartStore = useCartStore();
        // cartStore.addToCart({
        //   productId: this.product.id,
        //   quantity: this.quantity,
        // });
        console.log('button pressed')

        const cartItem = {
          product: this.product, 
          quantity: this.quantity,
        }

        console.log('added')



        this.shoppingCart.addToCart(cartItem)

        
        // Controleer of het product nu uitverkocht is
        this.isOutOfStock = this.product.quantity === 0;

        // Toon de melding
        this.showNotification = true;
        this.notificationMessage = `You added ${this.quantity} ${this.quantity === 1 ? this.product.title : `${this.product.title}s`} to your cart.`;

        // Verberg de melding na een paar seconden
        setTimeout(() => {
          this.showNotification = false;
        }, 5000);
      } else {
        alert('Invalid quantity');
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
            <select class="detail-text-size">
                <option value="select size">Select Size</option>
                <option v-for="size in product.sizes" :key="size">{{size}}</option>
            </select>
            <div class="detail-text-color">
                <div class="detail-text-color-black"></div>
                <div class="detail-text-color-white"></div>
                <div class="detail-text-color-cream"></div>
            </div>
            <input type="number" v-model="quantity" :max="product.quantity" class="detail-text-quantity">
            <button @click="addToCart" :disabled="product.quantity === 0 || quantity <= 0" class="detail-text-button">{{ isOutOfStock ? 'Out of Stock' : 'Add to Cart' }}</button>
                <h2 class="detail-text-info">Product details</h2>
            <p class="detail-text-infotext"><span>GENDER:</span> Unisex</p>
            <p class="detail-text-infotext"><span>FABRIC:</span> 100% Ringspun Cotton *Light Oxford 93% Cotton, 7% Viscose</p>
            <p class="detail-text-infotext"><span>WEIGHT:</span> White: 175 g/m² Colours: 180 g/m²</p>
            <p class="detail-text-infotext"><span>AVAILABLE SIZES:</span> XS - S - M - L - XL - 2XL</p>
            <p class="detail-text-infotext"><span>LAUNDRY TEMPERATURE:</span> Laundry wash at or below 40°C</p>
            <p class="detail-text-infotext"><span>LABELING:</span> Standard</p>
        </div>

        <div v-if="showNotification" class="notification">
        <p>{{ notificationMessage }}</p>
        </div>
  </div>
</template>

<style lang="scss">

</style>
