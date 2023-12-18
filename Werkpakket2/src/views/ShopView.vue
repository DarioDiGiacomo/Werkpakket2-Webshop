<script>
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import { useProductStore } from '@/stores/productStore.js';

export default {
  data() {
    return {
      products: useProductStore(),
      page: 1,
      pageSize: 8,
      filteredProducts: [],
      selectedFilter: "All",
      searchQuery: "",
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.pageSize);
    },

    displayedPages() {
      const startIndex = this.pageSize * (this.page - 1);
      const endIndex = startIndex + this.pageSize;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
  },

  methods: {
    setPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.page = pageNumber;
      }
    },

    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },

    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },

    setFilter(filter) {
      this.selectedFilter = filter;
      this.filterProducts();
    },

    deleteFilter() {
      this.searchQuery = ""
      this.selectedFilter = "All"
      this.filterProducts()
    },

    filterProducts() {
      let filteredList = this.products.productList;

      // Filter by category
      if (this.selectedFilter !== "All") {
        filteredList = filteredList.filter(
          (product) => product.category === this.selectedFilter
        );
      }

      // Filter by search query
      if (this.searchQuery.trim() !== "") {
        const query = this.searchQuery.toLowerCase();
        filteredList = filteredList.filter((product) =>
          product.title.toLowerCase().includes(query)
        );
      }

      this.filteredProducts = filteredList;
      this.page = 1;
    },
  },


  created() {
    this.filterProducts();
  },


  components: {
    ProductCardComponent,
  },
};
</script>

<template>
  <div class="main-shop-shop" id="main-shop">
    <div class="searchbar">
      <input type="text" v-model="searchQuery" placeholder="Try searching it?" @input="filterProducts">
      <button @click="deleteFilter">Erase</button>
    </div>
    <div class="filter">
      <button class="filter-button" :class="{ 'active': selectedFilter === 'All' }" @click="setFilter('All')">All</button>
      <button class="filter-button" :class="{ 'active': selectedFilter === 'T-shirts' }"
        @click="setFilter('T-shirts')">T-shirts</button>
      <button class="filter-button" :class="{ 'active': selectedFilter === 'Hoodies' }"
        @click="setFilter('Hoodies')">Hoodies</button>
      <button class="filter-button" :class="{ 'active': selectedFilter === 'Socks' }"
        @click="setFilter('Socks')">Socks</button>
    </div>

    <div class="main-shop-cards">
      <div v-for="product in displayedPages" :key="product.id">
        <ProductCardComponent :product="product" />
      </div>
    </div>

    <div class="pagination" v-if="totalPages > 1">
      <p @click="prevPage"><i class="fa-solid fa-chevron-left"></i></p>
      <p v-for="pageNumber in totalPages" :key="pageNumber" @click="setPage(pageNumber)"
        :class="{ 'active': page === pageNumber }">
        {{ pageNumber }}
      </p>
      <p @click="nextPage"><i class="fa-solid fa-chevron-right"></i></p>
    </div>
  </div>
</template>

<style lang="scss"></style>
