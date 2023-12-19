<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import json from './products.json'

export default {
    data() {
        return {
            data: json
        };
    },
    components: {
    HeaderComponent,
    FooterComponent,
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
