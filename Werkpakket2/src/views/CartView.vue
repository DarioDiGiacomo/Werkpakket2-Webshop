<script>
import { useProductStore } from '@/stores/productStore.js';
import { useCartStore } from '@/stores/cartStore.js';

export default {
    data() {
        return {
            shoppingCart: useCartStore(),
            products: useProductStore(),
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
        removeProduct(product) {
            this.shoppingCart.removeFromCart(product);
        },

        // Remove one quantity of a product from the cart
        removeQuantity(product) {
            this.shoppingCart.removeQuantity(product);
        },

        // Add one quantity of a product to the cart
        addQuantity(product) {
            this.shoppingCart.addQuantity(product);
        },

        goToCheckout() {
            this.$router.push("/checkout")
        }
    }
};
</script>

<template>
    <div class="shoppingcart">
        <h2>Shoppingcart</h2>
        <div v-if="shoppingCart.cartItems.length === 0" class="shoppingcart-empty">
            <p>IT LOOKS LIKE THIS CART IS <span>JINXD</span>.</p>
        </div>
        <div v-else>
            <div v-for="(product, index) in shoppingCart.cartItems" :key="index" class="shoppingcart-item">
                <div class="shoppingcart-item-details">
                    <img :src="'src/assets/' + product.product.image_blank" class="shoppingcart-item-details-img"
                        :alt="product.product.title">
                    <div class="shoppingcart-item-details-text">
                        <p class="shoppingcart-item-details-text-name">{{ product.product.title }}</p>
                        <p class="shoppingcart-item-details-text-price">€{{ product.product.price }} </p>
                    </div>
                </div>
                <button @click="removeQuantity(product)" class="shoppingcart-item-button">-</button>
                <input type="text" class="shoppingcart-item-input" disabled :value="product.quantity">
                <button @click="addQuantity(product)" class="shoppingcart-item-button">+</button>
                <button @click="removeProduct(product)" class="shoppingcart-item-remove">Remove</button>
            </div>
            <div class="shoppingcart-totalsection">
                <div class="shoppingcart-totalsection-total">
                    <h1 class="shoppingcart-totalsection-total-title">overview</h1>
                    <div class="shoppingcart-totalsection-total-prices">
                        <p class="shoppingcart-totalsection-total-prices-label">SubTotal:</p>
                        <p class="shoppingcart-totalsection-total-prices-amount">€ {{
                            shoppingCart.totalPriceWithoutBTW.toFixed(2) }}</p>
                    </div>
                    <div class="shoppingcart-totalsection-total-prices">
                        <p class="shoppingcart-totalsection-total-prices-label">Total:</p>
                        <p class="shoppingcart-totalsection-total-prices-amount">€ {{ shoppingCart.totalPrice.toFixed(2) }}
                        </p>
                    </div>
                </div>
                <div class="shoppingcart-totalsection-buttons">
                    <button class="shoppingcart-totalsection-buttons-button back ">Back To Store</button>
                    <button @click="goToCheckout" class="shoppingcart-totalsection-buttons-button purchase">Purchase</button>
                </div>
            </div>

        </div>
    </div>
</template>
  
  
<style>
</style>
