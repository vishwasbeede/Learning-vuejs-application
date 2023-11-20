<template>
  <div class="about">
    <BoxView :title="PageTitle" :msg="ParaData" />
    
  </div>
</template>
<script setup>
  import BoxView from '../components/BoxDisplay.vue'
  const ParaData = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet suscipit dicta laboriosam amet fugit explicabo at dolores cumque unde adipisci, recusandae, ipsa labore numquam sapiente voluptates accusamus fugiat molestiae obcaecati Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet suscipit dicta laboriosam amet fugit explicabo at dolores cumque unde adipisci, recusandae, ipsa labore numquam sapiente voluptates accusamus fugiat molestiae obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet suscipit dicta laboriosam amet fugit explicabo at dolores cumque unde adipisci, recusandae, ipsa labore numquam sapiente voluptates accusamus fugiat molestiae obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet suscipit dicta laboriosam amet fugit explicabo at dolores cumque unde adipisci, recusandae, ipsa labore numquam sapiente voluptates accusamus fugiat molestiae obcaecati?"
  const PageTitle = "About"
</script>
