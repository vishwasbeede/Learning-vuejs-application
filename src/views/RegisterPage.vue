
<template>
  <div>
    <h4>This is HTML PAGE for Registration</h4>
    <p>Please provide below inputs for registration</p>
    <ol class="listMain" v-bind:key="items" v-for="items in InputNames">
      <li
        tabindex="1"
        class="listData"
        @click="
          (e) => {
            SelectInput = e.target?.innerText;
          }
        "
      >
        {{ items }}
      </li>
    </ol>
    <div v-if="SelectInput">
      <h1>Enter details for {{ SelectInput }}</h1>
      <input v-model="InputValue" />
      <button @click="AcceptData">SET</button>
    </div>
    <h4>Show</h4>
    <button @click="() => (displayData = !displayData)">
      <p v-if="displayData">HIDE</p>
      <p v-else>SHOW</p>
    </button>
    <p v-if="displayData">
      {{ UserData }}
    </p>
  </div>
</template>
  
  <script setup>
import { ref, reactive } from "vue";

const SelectInput = ref("");
let InputValue = ref("");
let UserData = reactive({});
const displayData = ref(false);
const InputNames = [
  "UserName",
  "EmailId",
  "PhoneNo",
  "primaryAdd",
  "Street",
  "City",
  "PIN",
  "Password",
  "ConfirmPassword",
];

function AcceptData() {
  let valName = SelectInput.value;
  let varData = {};
  varData[valName] = InputValue.value;
  UserData = Object.assign(UserData, varData);
  InputValue.value = "";
  console.log("varData", varData);
  console.log("UserData", UserData);
}
console.log(SelectInput);
</script>
  
  <style scoped>
.listData {
  list-style-type: none;
  padding: 1em;
  margin: 0.5em;
  background-color: darkgrey;
  border-radius: 2em;
}
.listMain {
  display: inline-flex;
  flex-wrap: nowrap;
}
</style>
  