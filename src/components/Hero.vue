<script setup lang="ts">
</script>

<template>

  <div id="hero" class="slide flex flex-col mb-10 mt-64">
    <div class="hero-title flex flex-col lg:flex-row">
      Erik Goranson
    </div>
    <div class="hero-byline ml-1">
      Full Stack Software Developer
    </div>
  </div>
  
  <div class="flex flex-col items-start my-20 text-lg font-mono">
    <p class="mb-5">
      I am a software developer from Greeley, Colorado. I have worked with numerous programming languages and technologies to write solutions, both backend and frontend. I love using code to help solve problems.
    </p>
  </div>
</template>

<style scoped>

.slide{
  opacity: 0;
    -webkit-animation: slide-in 1s 0.2s forwards;
    -moz-animation: slide-in 1s 0.2s forwards;
    -o-animation: slide-in 1s 0.2s forwards;
    animation: slide-in 1s 0.2s forwards;
}

@-o-keyframes slide-in {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@-moz-keyframes slide-in {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.hero-title {
    @apply text-7xl lg:text-8xl text-[#73C991];

}

.hero-byline {
    @apply text-3xl lg:text-4xl;
}

</style>