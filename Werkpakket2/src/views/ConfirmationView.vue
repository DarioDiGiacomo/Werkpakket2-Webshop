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

        goToMain() {
            this.$router.push("/"),
            this.shoppingCart.cartItems.splice(0, this.shoppingCart.cartItems.length)
        }
    },
};
</script>
<template>
    <div class="confirmation">
        <h2>Congrats Mate!</h2>
        <h3>We've received your order successfully!</h3>
        <div class="confirmation-container">
            <div class="confirmation-container-summary">
                <div v-for="(product, index) in shoppingCart.cartItems" :key="index" class="confirmation-item">
                    <div class="confirmation-item-details">
                        <img :src="'src/assets/' + product.product.image_blank" class="confirmation-item-details-img"
                            :alt="product.product.title">
                        <div class="confirmation-item-details-text">
                            <p class="confirmation-item-details-text-name">{{ product.product.title }} - <span>{{
                                product.quantity
                            }}<span>X</span></span></p>
                            <p class="confirmation-item-details-text-price">€{{ product.product.price }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="goToMain">Back To Main</button>
    </div>
</template>
  
  
<style></style>
  