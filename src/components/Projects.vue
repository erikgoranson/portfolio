<script setup="ts">

const projects = [{"title":"Vue Pokédex","description":"A pokedex made with Vue, TypeScript, Tailwind, and Pinia. This was made to help my kids with their various pokemon questions as they played thorugh the recent releases. The intent was to make all the info from the core RPG games easily accessible in a single page","image":"https://raw.githubusercontent.com/erikgoranson/pokedex-vue/master/screenshot_v1.PNG","links":{"github":"https://github.com/erikgoranson/pokedex-vue","preview":"https://erikgoranson-pokedex-vue.vercel.app/"}},{"title":"Firefly Chinese Web Scraper","description":"A Python app for scraping translations of the Chinese phrases which appeared in Firefly and Serenity from an old fansite,. The intent was to use this data to seed an API for the Chinese that appears on the show","image":"https://github.com/erikgoranson/firefly-chinese-web-scraper/raw/main/screenshot.png","links":{"github":"https://github.com/erikgoranson/firefly-chinese-web-scraper"}},{"title":"Portfolio","description":"You are here. My portfolio website built with VueJs, Typescript, and Tailwind. It was also an opportunity to design a logo for a site and to   ","image":"IMAGE","links":{"github":"https://github.com/erikgoranson/portfolio","preview":"GITHUB PAGES"}},{"title":"Prize Game","description":"This is a C# console app based on an interview question I received. The test was to write an algoritm for the user's player that allowed them to collect the highest score of any of the four players. This project was an attempt to rebuild the console application used in that test from memory","image":"https://user-images.githubusercontent.com/54157038/205478600-09fc26b0-a816-40db-9a7e-8b30c9913bac.PNG","links":{"github":"https://github.com/erikgoranson/PrizeGame"}},{"title":"Firefly Translations API","description":"An API built using Flask, SQLAlchemy, and Marshmallow to allow easy access to the Chinese (and English translations) that appear in the series Firefly. A work in progress for some close friends who share the appreciation for the added flavor these bits lent to the show","image":"IMAGE","links":{"github":"https://github.com/erikgoranson/firefly-translation-api"}}]

</script>

<template>
<div id="projects">
    <h1 class="text-3xl mb-10 text-center ">PROJECTS</h1>
<div v-for="project in projects" class="flex flex-col rounded-lg shadow-lg bg-neutral-900 md:max-h-96 md:flex-row mb-14 w-full">
  <img class="h-64 md:w-2/3 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg w-full" :src="project.image"/>
  <div class="flex flex-col justify-center p-6 md:w-2/3">
    <h5 class="mb-4 text-xl font-medium">
      {{ project.title }}
    </h5>
    <p class="mb-6 text-base">
        {{ project.description }}
    </p>
    <p class="text-xs">
      <a v-for="(link, name) in project.links" :href="link" rel="noopener" target="_blank" >
      <button class="bg-[#c96638] hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-blue-500 rounded mr-4 capitalize">{{ name }}</button>
      </a>
    </p>
  </div>
</div>
</div>

</template>
