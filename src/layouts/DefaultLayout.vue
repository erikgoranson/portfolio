<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/Footer.vue';
</script>

<template >
  <div class="flex flex-col items-center">
    <div class="container-lg max-w-[1000px]  mx-5" >
      <NavBar/>
      <RouterView/>
    </div>
    <TheFooter/>
  </div>
</template>

<style scoped>
</style>
