<script setup lang="ts">
</script>

<template>

    <div id="contact" class="flex flex-col text-center items-center mb-20">
        <h1 class="text-3xl mb-5">HELLO THERE</h1>
        <p>Feel free to connect with me</p>
        <div class="text-center mt-3 flex flex-row items-center">
            <a href="https://www.linkedin.com/in/erik-goranson/" rel="noopener" target="_blank" >
                <i class="devicon-linkedin-plain mr-4"></i>
            </a>

            <a href="../assets/erikgoranson_resume.pdf" rel="noopener" target="_blank" >
                <button class="hover:bg-[#73C991] py-3 px-2 border-4 border-double rounded border-[#73C991] rounded mr-4">
                    RESUME
                </button>
            </a>

            <a href="https://github.com/erikgoranson" rel="noopener" target="_blank" >
                <i class="devicon-github-original"></i>
            </a>
        </div>
    </div>

</template>



<style scoped>

.devicon-linkedin-plain { 
    @apply text-5xl
}

.devicon-github-original { 
    @apply text-5xl
}

.resume {
    @apply border-4 border-double rounded py-3 px-2 border-[#73C991] font-semibold;
}

/* overwrite colors here */

</style>