<script setup lang="ts">
const props = defineProps({
  projects: {
    type: Object,
    required: true,
  }
})
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
                        <button class="bg-[#c96638] hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-blue-500 rounded mr-4 capitalize">
                            {{ name }}
                        </button>
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>
