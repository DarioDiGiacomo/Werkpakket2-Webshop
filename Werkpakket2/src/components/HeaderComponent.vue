<script>
export default {
    data() {
        return {
            navItems: [
                {
                    path: "/",
                    name: "Home"
                },
                {
                    path: "/shop",
                    name: "Shop"
                },
                {
                    path: "/contact",
                    name: "Contact"
                },
            ]
        }
    },
}
</script>

<template lang="">
  <header class="header">
        <div class="searchbar">
            <div class="searchbar-section">
                <router-link to="/home" class="icon"><i class="fa-solid fa-magnifying-glass fa-xl"></i></router-link>
            </div>
            <div class="searchbar-section">
                <router-link to="/home" class="logo"><img src="@/assets/Jinxd logo.svg" alt="Jinxd logo"></router-link>
            </div>
            <div class="searchbar-section">
                <router-link to="/login" class="icon"><i class="fa-solid fa-user fa-xl"></i></router-link>
                <router-link to="/cart" class="icon"><i class="fa-solid fa-bag-shopping fa-xl"></i></router-link>
            </div>
        </div>
        <nav class="nav">
            <ul class="nav-list">
                <div v-for="navItem in navItems" class="nav-list-item">
                <li><router-link :to="navItem.path">{{ navItem.name }}</router-link></li>
                </div>
            </ul>
        </nav>
    </header>
</template>

<style lang="">
    
</style>