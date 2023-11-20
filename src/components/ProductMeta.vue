<template>
<div>
    <h3> {{ props.category }}</h3>
    <div>
        <ol>
            <li v-for="item in props.products" v-bind:key="item">{{item}}</li>
        </ol>
    </div>

</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(['category','products'])
</script>
