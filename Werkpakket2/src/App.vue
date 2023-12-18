<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import json from './products.json'
import { RouterView } from 'vue-router'

export default {
    data() {
        return {
            data: json
        };
    },
    components: {
    HeaderComponent,
    FooterComponent,
    RouterView
}
}
</script>

<template>
  
    <HeaderComponent/>
   
    <Router-view></Router-view>

    <FooterComponent/>
</template>

<style scoped>
</style>
