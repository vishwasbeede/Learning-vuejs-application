<!-- <script setup>
import CategoriesComp from './components/CategoriesComp.vue';
</script> -->

<template>
  <div class="HeaderScreen">
    <div class="store-name">
      <h1>Smart Store</h1>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/logout">Sign Out</router-link> |
      <router-link to="/cart">My Cart</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/about">About</router-link> |
      <SearchBar/>
    </nav>
  </div>
  <!-- <CategoriesComp></CategoriesComp> -->
  <!-- <MyComponentOptionsAPI1></MyComponentOptionsAPI1> -->
  <!-- <MyComponent></MyComponent> -->
  <router-view />
</template>

<style scoped>
.HeaderScreen{
  background-color: burlywood;
  background-position-y: center;
  background-position: -350px;
  background-image: url('./assets/Img-bg.png');
  margin-top: 1px;
}
.store-name > h1 {
  text-align: end;
  margin-right: 5em;
  font-size: 3em;
  text-transform: uppercase;
}
nav {
  padding-block: 25px;
  background-color: burlywood;
  display: list-item;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: column-reverse;
}

nav > a {
  font-family: fantasy;
  font-size: x-large;
  text-decoration: none;
  padding-inline: 30px;
  text-anchor: coral;
  color: rgb(68, 31, 85);
  cursor: text;
}
@media (max-width: 620px) {
  nav > a {
    
    font-family: fantasy;
    font-size: medium;
    display: flex;
    text-decoration: none;
    padding-inline: 30px;
    background-color: beige;
    color: rgb(68, 31, 85);
    cursor: text;
  }
}
</style>
