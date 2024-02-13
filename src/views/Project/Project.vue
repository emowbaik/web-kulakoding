<template>
  <div class="flex flex-col justify-between h-screen">
    <div class="">
      <Navbar></Navbar>
      <div class="flex justify-between p-2 mx-6">
        <router-link
          :to="{ name: 'dashboard' }"
          class="flex items-center gap-1 font-semibold"
        >
          <ArrowLeftIcon class="w-5" />
          Back
        </router-link>
        <nav class="flex" aria-label="Breadcrumb">
          <ol
            class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
          >
            <li class="inline-flex items-center">
              <a
                href="/dashboard"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <HomeIcon class="text-gray-700 dark:text-gray-400 w-4 mr-1" />
                Home
              </a>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <ChevronRightIcon
                  class="text-gray-700 dark:text-gray-400 w-[18px]"
                />
                <span
                  class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
                  >about</span
                >
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div class="flex flex-col">
        <div class="flex justify-between mx-6 mt-5">
          <h3 class="font-bold text-2xl font-sans">Explore Project</h3>
          <label for="" class="relative">
            <MagnifyingGlassIcon
              class="absolute w-5 h-5 focus:hidden top-1/2 transform -translate-y-1/2 left-3"
            ></MagnifyingGlassIcon>
            <input
              v-model="keyword"
              type="search"
              class="rounded-md h-8 pl-9"
              placeholder=""
            />
          </label>
        </div>
        <main
          class="grid grid-cols-3 justify-center place-items-center mt-12 gap-12"
        >
          <div
            v-for="item in searchings"
            class="w-72 h-56 relative rounded-md group flex justify-center items-center bg-blue-400"
          >
            <img
              class="absolute w-full h-full"
              v-for="gambar in item.image"
              :src="route + '/' + gambar.image"
              alt=""
            />
            <div
              class="absolute flex justify-center items-center z-10 group-hover:z-30 opacity-0 group-hover:opacity-100 bg-[#6e6d6d8a] w-full h-full duration-300 transition-opacity"
            >
              <RouterLink
                :to="{ name: 'detail.project', params: { id: item.id } }"
              >
                <div class="flex flex-col gap-5 justify-center items-center">
                  <h3 class="text-white font-bold text-3xl">
                    {{ item.nama_project }}
                  </h3>
                </div>
              </RouterLink>
            </div>
          </div>
        </main>

        <div class="mt-5">
          <Paginate
            :from="page.project.from"
            :to="page.project.to"
            :total="page.project.total"
            :perPage="page.project.per_page"
            :totalPages="page.project.last_page"
            :currentPage="page.project.current_page"
            @pagechanged="page.getproject"
          >
          </Paginate>
        </div>
      </div>
    </div>
    <div class="">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import Paginate from "../../components/Paginate.vue";
import { usePages } from "../../services/project/page";
import { onMounted, computed, ref } from "vue";
import {
  ArrowLeftIcon,
  HomeIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/solid";
import useProject from "../../services/project";

const { IndexProject, project } = useProject();
const page = usePages();
const keyword = ref("");

const route = import.meta.env.VITE_API_URL;

console.log(route);

const searchings = computed(() => {
  if (keyword.value) {
    return project.value.filter((item) => {
      return keyword.value
        .toLowerCase()
        .split(" ")
        .every((items) => item.nama_project.toLowerCase().includes(items));
    });
  } else {
    return page.project.data;
  }
});

onMounted(() => {
  IndexProject();
  page.getproject(page.page);
});
</script>
