import { defineStore } from "pinia";
import productJSON from '@/products.json'

export const useProductStore = defineStore('products', {
    //state
    state: () => ({
        productList: productJSON,
    }),
    //getter
    getters: {
        Quantitycheck() {
            const sortedProducts = [...this.productList].sort((a, b) => b.quantity - a.quantity);
            return sortedProducts.slice(0, 3);
        },

        getProductById: (state) => (productId) => {
            return state.productList.find((product) => product.id == productId) || null
        }
    
    }
    //actions
})