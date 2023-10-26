<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="flex justify-between my-10 w-full">
    <RouterLink to="/"><img class="logo items-start" src='@/assets/eg-logo.png' width="40"></RouterLink>
      <div>
        
        <a class="nav-link" href="#projects">Projects</a>
        <a class="nav-link" href="#contact">Contact</a>
        <a class="resume-link" href="/src/assets/erikgoranson_resume.pdf" rel="noopener" target="_blank" >Resume</a>
      </div>
    </nav>
</template>

<style scoped>
a, a:hover {
  @apply text-[#D7BA7D] text-lg;
}

.nav-link {
    @apply transition duration-150 border-b-8 border-transparent hover:border-green-500 ml-3 lg:ml-10;
}

.resume-link {

  @apply ml-3 lg:ml-10 text-[#73C991];
}
</style>