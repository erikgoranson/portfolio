<script setup lang="ts">
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Hero from '@/components/Hero.vue';
import ProjectsComponent from '@/components/Projects.vue'
import projectsData from '@/json/projects.json';

</script>

<template>
  <Hero/>
  <hr class="my-10">
  <About/>
  <hr class="my-10">
  <ProjectsComponent :projects="projectsData"/>
  <hr class="my-10">
  <Contact/>
</template>
