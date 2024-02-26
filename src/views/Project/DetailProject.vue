<template>
  <div class="w-full h-full overflow-hidden">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <!-- Start BreadCrumb -->
    <TopBar :toolbar="'detail'" />
    <!-- End BreadCrumb -->

    <div class="flex flex-col lg:flex-row justify-between">
      <div class="text-center mx-auto lg:w-1/2">
        <div class="m-5">
          <Carousel :data="project.image" class="mb-5"></Carousel>
        </div>
        <p
          v-show="showAbout"
          class="hidden lg:block text-base font-medium text-center mx-5 max-w-[800px]"
        >
          {{ project.deskripsi }}
        </p>
        <div v-show="showTools" class="hidden lg:block gap-5 mx-5">
          <div class="flex flex-col mx-auto">
            Tools yang digunakan:
            <p v-for="(item, index) in tools" class="text-left text-sm">
              {{ index + 1 }}.
              {{ item.tools }}
            </p>
          </div>
        </div>
      </div>
      <!-- Start Profile -->
      <div class="hidden lg:block text-center mt-20">
        <div
          class="flex flex-col gap-5 bg-slate-300 dark:bg-[#D9D9D9] shadow rounded-md mx-5 py-10"
        >
          <img
            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${project.user?.username}`"
            alt="foto_project"
            class="w-[70%] h-auto lg:w-[50%] lg:h-[50%] rounded-full mx-auto bg-center bg-cover bg-no-repeat p-2"
          />
          <p class="font-bold text-lg dark:text-black">
            {{ project.user?.username }}<br />XII PPLG B
          </p>
        </div>
        <div class="flex flex-col justify-center lg:flex-row lg:gap-5 my-10">
          <button
            @click="toggleContent('about')"
            :class="{
              'bg-transparent dark:bg-transparent': showTools,
              'bg-slate-300 dark:bg-slate-900': !showTools,
            }"
            class="py-2 px-5 rounded-full font-normal shadow border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 mb-4 lg:mb-0"
          >
            About
          </button>
          <button
            @click="toggleContent('tools')"
            :class="{
              'bg-transparent dark:bg-transparent': showAbout,
              'bg-slate-300 dark:bg-slate-900': !showAbout,
            }"
            class="py-2 px-5 rounded-full font-normal shadow border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400"
          >
            Tools
          </button>
        </div>
      </div>
      <div class="lg:hidden text-center">
        <span class="flex mx-5 gap-5 items-center">
          <div class="bg-slate-300 dark:bg-[#D9D9D9] shadow rounded-lg">
            <img
              :src="`https://api.dicebear.com/7.x/initials/svg?seed=${project.user?.username}`"
              alt="foto_project"
              class="w-32 bg-center bg-cover bg-no-repeat p-2 rounded-full"
            />
          </div>
          <p class="font-bold text-lg dark:text-white">
            {{ project.user?.username }}<br />XII PPLG B
          </p>
        </span>
        <div class="flex justify-center my-10 gap-5">
          <button
            @click="toggleContent('about')"
            :class="{
              'bg-transparent dark:bg-transparent': showTools,
              'bg-slate-300 dark:bg-slate-900': !showTools,
            }"
            class="py-2 px-10 rounded-full font-normal shadow border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400"
          >
            About
          </button>
          <button
            @click="toggleContent('tools')"
            :class="{
              'bg-transparent dark:bg-transparent': showAbout,
              'bg-slate-300 dark:bg-slate-900': !showAbout,
            }"
            class="py-2 px-10 rounded-full font-normal shadow border border-gray-300 hover:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400"
          >
            Tools
          </button>
        </div>
      </div>
      <!-- End Profile -->
      <p
        v-show="showAbout"
        class="lg:hidden text-base font-medium text-center mx-5 break-words max-w-[800px]"
      >
        {{ project.deskripsi }}
      </p>
      <div v-show="showTools" class="lg:hidden flex gap-5 mx-5 lg:mx-40">
        <div class="flex flex-col mx-5">
          <p v-for="item in tools" class="text-left text-sm">
            {{ item.tools }}
          </p>
        </div>
      </div>
    </div>
    <Komentar :user="user" :project="router.params.id"></Komentar>
    <Footer class="mt-20" />
  </div>
</template>
<script setup>
import useAuth from "../../services/auth";
import { useRoute } from "vue-router";
import useProject from "../../services/project";
import { ref, onMounted } from "vue";
import {
  ArrowLeftIcon,
  HomeIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/solid";
import Navbar from "@/components/Navbar.vue";
import Komentar from "@/components/Komentar.vue";
import NavSidebar from "@/components/NavSidebar.vue";
import Footer from "@/components/Footer.vue";
import Carousel from "@/components/Carousel.vue";
import TopBar from "@/components/TopBar.vue";

const showAbout = ref(true);
const showTools = ref(false);

const toggleContent = (content) => {
  if (content === "about") {
    showAbout.value = true;
    showTools.value = false;
  } else if (content === "tools") {
    showAbout.value = false;
    showTools.value = true;
  }
};

const { user, LoggedIn } = useAuth();
const { SingleProject, project, tools } = useProject();

const router = useRoute();
const baseUrl = import.meta.env.VITE_API_URL;

onMounted(() => {
  scrollToTop();
  SingleProject(router.params.id);
  LoggedIn();

  setTimeout(() => {
    console.log(tools.value);
  }, 1200);
});

function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>