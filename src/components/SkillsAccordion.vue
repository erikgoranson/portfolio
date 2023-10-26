<script setup lang="ts">
import skills from '@/json/skills.json';
import { onMounted } from "vue";
import {
  Collapse,
  initTE,
  Ripple,
} from "tw-elements";

onMounted(() => {
    initTE({ Collapse, Ripple });
});
</script>

<template>
  <div v-for="skill, name in skills">
    <div>
      <h2 class="mb-0" :id="skill.heading">
        <button class="group relative flex w-full items-center px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-collapse-collapsed
        :data-te-target="`#collapse${name}`"
        :aria-expanded="(name === 'frontend') ? true : false"
        :aria-controls="`collapse${name}`">
          {{skill.heading}}
          <span class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      <div
      :id="`collapse${name}`"
      :class="`!visible ${(name === 'frontend') ? '' : 'hidden'}`"
      data-te-collapse-item
      :aria-labelledby="`heading${name}`"
      data-te-parent="#accordion">
        <div class="px-2.5 py-4 ">
          {{skill.description}}
          <div id="icons" class="flex mt-5 flex-row flex-wrap justify-center">

            <!--skills-->
            <div v-for="data in skill.skills" class="iconContainer">
              <div :key="data.name" class="icon">
                <i :class="`${data.icon} colored text-5xl`"></i>
                <p>{{data.name}}</p>
            </div>
            </div>
            <!--skills-->

          </div>  
        </div>
      </div>
    </div>
  </div>    
</template>

<style scoped>

.iconContainer {
  @apply flex text-center items-center flex-wrap;
}

.icon {
  @apply mt-1.5 mr-2 text-center items-center pt-1 px-2 relative uppercase text-xs;
  flex: 0 0 5rem;
}

</style>