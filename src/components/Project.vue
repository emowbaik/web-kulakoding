<template>
  <section class="-mb-20">
    <div id="project" class="m-5 relative z-10 lg:m-20">
      <h2 class="text-center font-bold text-xl lg:text-4xl mb-5 lg:mb-10">
        Project
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in project"
          :key="item.id"
          class="mx-auto mb-5 transition ease-in-out delay-10o0 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <router-link :to="{ name: 'detail', params: { id: item.id } }">
            <div class="bg-primary dark:bg-[#277894] rounded-md shadow">
              <img
                v-for="image in item.image"
                :src="routes + '/' + image.image"
                class="w-full h-48 lg:h-64 object-contain rounded-md"
              />
            </div>
            <p class="text-center m-2 text-base font-medium">
              {{ item.nama_project }}
            </p>
          </router-link>
        </div>
      </div>
      <span class="flex justify-center">
        <button
          class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-900 border border-gray-400 hover:border-gray-900 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2"
        >
          Show More
          <ArrowDownIcon class="w-5" />
        </button>
      </span>
    </div>
  </section>
</template>

<script setup>
import useProject from "../services/project";
import { ArrowDownIcon } from "@heroicons/vue/24/solid";
import { onMounted } from "vue";

const { project, Index } = useProject();
const routes = import.meta.env.VITE_API_URL;
console.log(routes);

onMounted(async () => {
  await Index();
});
</script>