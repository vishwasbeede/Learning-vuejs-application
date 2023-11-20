<template>
  <input type="search" placeholder="Search" v-model="SearchInputChange" />
  <button>Search</button>

</template>

<script setup>
import { ref } from "vue";
const SearchInputChange = ref("");
</script>

<style scoped>
input {
  height: 2em;
  width: 20em;
  font-size: larger;
}
</style>
