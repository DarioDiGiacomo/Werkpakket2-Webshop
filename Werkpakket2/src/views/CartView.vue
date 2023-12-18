<script>
import { useProductStore } from '@/stores/productStore.js';
import { useCartStore } from '@/stores/cartStore.js';

export default {
    data() {
        return {
            cartStore: useCartStore(),
            products: useProductStore(),
        };
    },

    methods: {
        removeItem(index) {
            this.cartStore.removeFromCart(index);
        },
    },
};
</script>

<template>
    <div class="shopping-cart">
        <h2>Winkelwagentje</h2>
        <div v-if="cartStore.cartItems.length === 0" class="empty-cart-message">
            <p>Je winkelwagentje is leeg.</p>
        </div>
        <div v-else>
            <div v-for="(product, index) in cartStore.cartItems" :key="index" class="cart-item">
                <div class="item-details">
                    <p class="item-name">{{ products.title}}</p>
                    <p class="item-price">€{{ product.product.price }}</p>
                </div>
                <button @click="removeItem(index)" class="remove-button">Verwijderen</button>
            </div>
            <div class="total-section">
                <p class="total-label">Totaal:</p>
                <p class="total-amount">€</p>
            </div>
        </div>
    </div>
</template>
  
  
<style scoped>
.shopping-cart {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
}

.empty-cart-message {
    font-size: 18px;
    text-align: center;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
}

.item-details {
    flex-grow: 1;
}

.item-name {
    margin: 0;
    font-size: 16px;
}

.item-price {
    margin: 0;
    color: #888;
}

.remove-button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
}

.total-section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
}

.total-label {
    margin: 0;
}

.total-amount {
    margin: 0;
    color: #28a745;
}
</style>
