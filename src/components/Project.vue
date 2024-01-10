<template>
    <div class="-mb-20">
        <div id="project" class="m-5 relative z-10 lg:m-20">
            <h2 class="text-center font-bold text-xl lg:text-4xl mb-5 lg:mb-10">
                Project
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="project in projects" :key="project.id" class="mx-auto mb-5">
                    <div class="bg-[#0096D1] rounded-md shadow">
                        <img :src="project.image" class="w-full h-48 lg:h-64 object-contain rounded-md"
                            :alt="project.name" />
                    </div>
                    <p class="text-center m-2 text-base font-medium">
                        {{ project.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const projects = [
        { id: 1, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 2, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 3, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 4, name: "lorem", image: "../../src/assets/img/work-2.png" },
        { id: 5, name: "lorem", image: "../../src/assets/img/work-2.png" },
    ];
</script>