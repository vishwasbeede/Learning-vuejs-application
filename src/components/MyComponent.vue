<template>
  <div>Counter</div>
  <div class="counter-area">
      <button @click.prevent="increaseCounter()">+</button>
      <h1>
          <span>{{ counter }}</span>
      </h1>
    <button @click.prevent="decreaseCounter">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
};
</script>

<style scoped>
.counter-area{
    display: flex;
    flex-direction: row;
    align-self: center;
    align-content: center;
}
.counter-area > button{
    width: 100px;
    color: azure;
    background: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: x-large;

}
</style>