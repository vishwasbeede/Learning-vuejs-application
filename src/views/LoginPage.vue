<template>
  <div title="LOGIN PAGE">
    <h4>This is HTML PAGE for login</h4>
    <h5>Please provide the details as below</h5>

    <label for="UserName">USER NAME: </label>
    <input required id="UserName" v-model="userNameData" />

    <label for="Password">PASSWORD: </label>
    <input required id="Password" v-model="password" />

    <button type="button" @click="GetData()">LOGIN</button>

    <textarea v-model="ResStore"> </textarea>
    <input
      type="text"
      name="city"
      style="background-color: aqua"
      list="cityname"
    />
    <datalist id="cityname">
      <option value="Boston"></option>
      <option value="Cambridge"></option>
    </datalist>
    <span class="reload">&#x21bb;</span>
    <form>
      <input
        type="submit"
        formaction="firsttarget.php"
        value="Submit to first"
      />
      <input
        type="submit"
        formaction="secondtarget.php"
        value="Submit to second"
      />
    </form>
    <div title="FORM 2">
      <form action="" method="get">
        Name: <input type="text" name="name" /><br />
        Pwd: <input type="password" name="password" /><br />
        <div class="yourCustomDiv" />
        <input type="submit" style="display: none" />
      </form>
    </div>
    <div>
      <label>
        <input type="radio" name="mode" value="create" />
        <i>create table</i>
      </label>
    </div>
    <div style="width: 150px; overflow: auto">
      <canvas width="200" style="border: 1px solid #ff0000"></canvas>
    </div>
    <!-- <iframe
      src="https://docs.google.com/viewer?url=http://www.africau.edu/images/default/sample.pdf&embedded=true"
      style="position: absolute; width: 100%; height: 100%; border: none"
    ></iframe> -->
  </div>
  <div v-bind:class="activeVar">
    <form>
      <br />
      <input list="fruits" name="fruit" />
      <datalist id="fruits">
        <option value="apple"></option>
        <option value="orange"></option>
        <option value="grape"></option>
        <option value="banana"></option>
        <option value="pear"></option>
      </datalist>
      <input type="submit" @click.prevent="ChangeCss()" />
    </form>
  </div>
  <!-- <div>
    <video
      src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_640_3MG.mp4"
      controls
    ></video>

    <button id="1x">1x</button>
    <button id="15x">1.5x</button>
    <button id="2x">2x</button>
  </div> -->
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const userNameData = ref("");
const password = ref("");
const ResStore = ref("");
const activeVar = ref("active");
async function GetData() {
  await axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      ResStore.value = JSON.stringify(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
const ChangeCss = () => {
  if (activeVar.value == "Change") {
    activeVar.value = "activeVar";
  } else {
    activeVar.value = "Change";
  }
};
</script>
<style scoped>
.active {
  background-color: cornflowerblue;
  font-style: italic;
  height: 30em;
}
.Change {
  background-color: azure;
}
</style>
