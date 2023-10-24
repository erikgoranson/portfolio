<script setup lang="ts">
</script>

<template>
  <div class="test flex flex-col items-center mb-10 mt-60">
    <div class="hero-title">Erik Goranson</div>
    <div class="hero-byline">Full Stack Software Developer</div>
  </div>
  
  <hr>
  <div>
    TEXT GOES HERE
  </div>
</template>

<style scoped>
.test{
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
    @apply text-5xl lg:text-8xl text-[#73C991] font-mono;
}

.hero-byline {
    @apply text-3xl lg:text-4xl font-mono;
}
</style>