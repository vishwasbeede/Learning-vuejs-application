<template>
    <h1>{{ props.title }}</h1>
    <div class="MainCont">
      <div class="paragraphView">
        <p>{{ props.msg }}</p>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["title", "msg"]);
</script>

<style scoped>
.paragraphView {
  display: flex;
  width: 50%;
  text-align: left;
  border-radius: 10%;
  font-size: larger;
}
.MainCont {
  display: flex;
  justify-content: center;
}
h1{
    text-align: left;
    padding-left: 25%;
}
</style>
