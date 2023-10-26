<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
    <footer class="text-center inset-x-0 bottom-0 w-full text-sm">
        <div>
            Copyright © {{ year }} Erik Goranson
        </div>
    </footer>
</template>