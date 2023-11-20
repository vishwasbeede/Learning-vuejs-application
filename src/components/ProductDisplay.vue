<script setup>
import { defineProps } from "vue";

const props = defineProps(["namesList"]);
function handleClick1(inp) {
  const ElemName = props.namesList.findIndex(
    (item1) => item1.name.trimEnd() === inp.target.innerText
  );
  console.log(ElemName)
  return ElemName;
}
</script>

<style scoped>
li {
  list-style: none;
  font-size: larger;
  font-family: cursive;
  font-weight: bold;
  background-color: azure;
  margin-bottom: 1em;
}
@media (max-width: 600px) {
  ul {
    display: list-item;
    columns: 1;
  }
  li {
    font-size: small;
    flex-wrap: wrap;
  }
}
</style>
  
<template>
  <div class="categories">
    <h4>Categories</h4>
    <ul>
      <li
        v-for="item in props.namesList"
        v-bind:key="item.name"
        @click="(e) => $emit('handleClick', handleClick1(e))"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>


