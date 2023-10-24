<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
</script>

<template >
  <div class="flex flex-col items-center">
    <div class="container-lg max-w-5xl " >
      <NavBar/>
      <header></header>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
