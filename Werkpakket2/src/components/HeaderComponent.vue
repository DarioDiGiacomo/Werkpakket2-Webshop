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
                <a href="#" class="icon"><i class="fa-solid fa-magnifying-glass fa-xl"></i></a>
            </div>
            <div class="searchbar-section">
                <a href="/home" class="logo"><img src="@/assets/Jinxd logo.svg" alt="Jinxd logo"></a>
            </div>
            <div class="searchbar-section">
                <a href="/login" class="icon"><i class="fa-solid fa-user fa-xl"></i></a>
                <a href="/cart" class="icon"><i class="fa-solid fa-bag-shopping fa-xl"></i></a>
            </div>
        </div>
        <nav class="nav">
            <ul class="nav-list">
                <div v-for="navItem in navItems" class="nav-list-item">
                <li><router-link :to="navItem.path">{{ navItem.name }}</router-link></li>
                </div>
                <!-- <a href="index.html" >
                    <li>home</li>
                </a>
                <a href="shop.html">
                    <li>shop</li>
                </a>
                <a href="#">
                    <li>contact</li>
                </a> -->
            </ul>
        </nav>
    </header>
</template>

<style lang="">
    
</style>