<script>
export default {
    props: {
        product: Object

    },

    methods: {

        goToLink() {
            this.$router.push({name:'producttype', params:{id: this.product.id}})
        }
    },

}
</script>

<template lang="">
 <div class="card">
                <a @click='goToLink' class="details">
                    <!-- <router-link :to="{name: 'producttype', params: {id: product.id}}" > -->
                    <div class="card-overlay">
                        <img :src="'src/assets/' + product.image_square" :alt="product.title">  
                        <div class="card-overlay-text">
                            <h1 class="card-overlay-text-heading"> {{ product.title }} </h1>
                            <p class="card-overlay-text-paragraph"> €{{ product.price }} <span>Excl. BTW</span></p>
                        </div>
                    </div>
                <!-- </router-link> -->
                </a>
            </div>
</template>

<style lang="">
    
</style>