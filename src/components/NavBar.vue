<script setup lang="ts">
import { RouterLink } from 'vue-router'
const links = ['About', 'Experience', '[RESUME]'];
</script>

<template>
    <nav class="flex justify-between my-10">
    <RouterLink to="/"><img class="logo" src='@/assets/eg-logo.png' width="40"></RouterLink>
      <div>
        <RouterLink class="navlink" to="/">Home</RouterLink>
        <RouterLink v-for="link in links" class="navlink" :to="link">{{ link }}</RouterLink>
      </div>
    </nav>
</template>

<style scoped>
a, a:hover {
  @apply text-[#D7BA7D] font-mono  mr-10 text-lg;
}

.navlink {
    @apply transition duration-150 border-b-8 border-transparent hover:border-green-500;
}
</style>