<template>
  <div>
    <button @click="decreaseCounter()">
      <h1> - </h1>
    </button>
    <span>{{ counter }}</span>
    <button @click="increaseCounter()">
      <h1> + </h1>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default({
  setup() {
    const counter = ref(0);
    function increaseCounter() {
      counter.value++;
    }
    function decreaseCounter() {
      counter.value--;
    }
    return {
      counter,
      increaseCounter,
      decreaseCounter
    };
  },
});
</script>
