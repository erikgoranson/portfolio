<script setup lang="ts">
import SkillsAccordion from "./SkillsAccordion.vue";
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 mt-10">
    <div class="mr-5 my-10"><p>I have been working as a developer professionally since 2018, though I have tinkered with web dev stuff as far back as the <span class="MySpace">MySpace</span> era of the Internet. When I am not parked in front of my PC, I also enjoy various other interests:</p>
      <br>
      <div class="ml-10">
        <ul class="list-disc list-inside">
          <li>Cooking <span class="aside">(I make a pretty good spaghetti sauce)</span></li>
          <li>Gaming <span class="aside">(PC, console, plastic lightsaber duels with my kids)</span></li>
          <li>Music <span class="aside">(Playing and listening)</span></li>
        </ul>
      </div>
      <br>
      I like to work on personal projects, both for fun and to maintain my skills with various things I might not get to exercise at work. Check out some recent ones in the next section. 
    </div>

    <div>
      <SkillsAccordion/>
    </div>
  </div>
  
</template>


<style scoped>
.MySpace {
  @apply font-semibold;
  background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;
}

.aside {
  @apply text-xs;
}
</style>