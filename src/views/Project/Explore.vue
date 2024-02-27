<template>
  <div class="flex flex-col justify-between h-screen">
    <div class="">
      <Navbar></Navbar>
      <TopBar :toolbar="'Project'"></TopBar>
      <div class="flex flex-col">
        <div class="flex justify-between mx-7 mt-5">
          <h3 class="font-bold text-2xl text-center font-sans">
            Explore Project
          </h3>
          <label for="" class="relative">
            <MagnifyingGlassIcon class="absolute w-5 h-5 focus:hidden top-1/2 transform -translate-y-1/2 left-3">
            </MagnifyingGlassIcon>
            <input v-model="keyword" type="search" class="rounded-md h-8 pl-9" placeholder="" />
          </label>
        </div>
        <main class="grid grid-cols-3 justify-center place-items-center mt-12 gap-12">
          <div v-for="item in searchings"
            class="w-72 h-56 relative rounded-md group flex justify-center items-center bg-blue-400 transition ease-in-out delay-10o0 hover:-translate-y-1 hover:scale-110 duration-300">
            <img v-if="item.image && item.image.length > 0" :src="routes + '/' + item.image[0].image"
              class="absolute w-full h-full rounded-md p-2" />
            <div
              class="absolute flex justify-center items-center z-10 group-hover:z-30 opacity-0 group-hover:opacity-100 bg-[#6e6d6d8a] w-full h-full duration-300 transition-opacity">
              <RouterLink :to="{ name: 'detail.project', params: { id: item.id } }">
                <div class="flex flex-col gap-5 justify-center items-center">
                  <h3 class="text-white font-bold text-2xl break-words text-center mx-2">
                    {{ item.nama_project }}
                  </h3>
                </div>
              </RouterLink>
            </div>
          </div>
        </main>

        <div class="mt-5">
          <Paginate :from="page.project.from" :to="page.project.to" :total="page.project.total"
            :perPage="page.project.per_page" :totalPages="page.project.last_page"
            :currentPage="page.project.current_page" @pagechanged="page.getproject">
          </Paginate>
        </div>
      </div>
    </div>
    <div class="">
      <img src="@/assets/img/Wave-light.png" v-if="isDark === true" alt="Wave" class="relative z-0 w-full" />
      <img src="@/assets/img/Wave-dark.png" v-else alt="Wave" class="relative z-0 w-full" />
    </div>
  </div>
</template>

<script setup>
  import Navbar from "../../components/Navbar.vue";
  import Footer from "../../components/Footer.vue";
  import Paginate from "../../components/Paginate.vue";
  import usePages from "../../services/project/page";
  import TopBar from "../../components/TopBar.vue";
  import { onMounted, computed, ref } from "vue";
  import {
    ArrowLeftIcon,
    HomeIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
  } from "@heroicons/vue/24/solid";
  import useProject from "../../services/project";
  import { useDark } from "@vueuse/core";

  const isDark = useDark(false);
  const { IndexProject, project } = useProject();
  const page = usePages();
  const keyword = ref("");
  const routes = import.meta.env.VITE_API_URL;
  // const route = import.meta.env.VITE_API_URL;

  // console.log(routes);

  const searchings = computed(() => {
    if (keyword.value) {
      return project.value.filter((item) => {
        console.log(project.value);
        return keyword.value
          .toLowerCase()
          .split(" ")
          .every((items) => item.nama_project.toLowerCase().includes(items));
      });
    } else {
      return page.project.data;
    }
  });

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  onMounted(() => {
    scrollToTop();
    IndexProject();
    page.getproject(page.page);
  });
</script>