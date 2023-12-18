<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue';
// import productList from '@/products.json'
import { useProductStore } from '@/stores/productStore.js';



export default {
    data() {
        return {
            productStore: useProductStore()
        };
    },

    computed: {
        Quantitycheck() {
            return this.productStore.Quantitycheck
        }
    },

    components: {
        ProductCardComponent
    },
}
</script>

<template lang="">
    <div class="main-shop" id="main-shop">
        <div class="main-shop-text">
            <a href="#main-shop" class="main-shop-text">
                <h1>Latest Drop</h1>
            </a>
        </div>
        <div class="main-shop-cards">
            <div v-for="(product, id) in Quantitycheck" :key="id">
                <ProductCardComponent :product="product" />
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>