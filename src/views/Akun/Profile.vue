<script setup>
import {
  EnvelopeIcon,
  LockClosedIcon,
  DocumentPlusIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/solid";
import useAuth from "../../services/auth";
// import useUser from "../../services/user/index";
import usePages from "../../services/project/page";
import Navbar from "@/components/Navbar.vue";
import TopBar from "@/components/TopBar.vue";
import NavSidebar from "@/components/NavSidebar.vue";
import Paginate from "@/components/Paginate.vue";
import Hero from "@/components/Hero.vue";
import { onMounted } from "vue";

const { user, LoggedIn, Logout } = useAuth();
// const { IndexProject, project } = useUser();
// const { getproject, project } = usePages();
const page = usePages();
const routes = import.meta.env.VITE_API_URL;

onMounted(() => {
  LoggedIn();
  // IndexProject();
  page.getproject(page.page);

  setTimeout(() => {
    // console.log(page.project);
    // page.getproject(page.page);
  }, 1000);
});
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <TopBar :toolbar="'user'" />
    <div class="flex-grow">
      <div class="flex flex-col justify-center items-center lg:my-5 my-20">
        <div class="flex flex-col items-center my-5">
          <div class="relative p-0.5 rounded-full">
            <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`" alt="profile"
              class="rounded-full w-20 items-center justify-center" />
          </div>
          <div class="flex">
            <h2 class="text-2xl text-center font-bold">
              {{ user.username }}
            </h2>
            <!-- <p class="text-sm text-center font-medium">
                My role is {{ user.role }}
              </p> -->
          </div>
        </div>
        <div class="flex flex-col justify-center mx-auto gap-3">
          <div class="relative flex gap-2">
            <span>
              <div class="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                <EnvelopeIcon class="w-5" />
              </div>
              <input disabled type="text" id="input-group-1"
                class="bg-transparent text-gray-900 text-sm lg:w-[295px] ps-8 p-2.5 border-transparent border-b-black border-2 h-9 dark:border-transparent dark:border-b-gray-400 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                placeholder="Email" :value="user.email" />
            </span>
          </div>
          <div class="relative flex gap-2">
            <span>
              <div class="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                <WrenchScrewdriverIcon class="w-5" />
              </div>
              <input disabled type="text" id="input-group-1"
                class="bg-transparent text-gray-900 text-sm lg:w-[295px] ps-8 p-2.5 border-transparent border-b-black border-2 h-9 dark:border-transparent dark:border-b-gray-400 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                placeholder="Role" :value="user.role" />
            </span>
          </div>
          <div class="relative flex gap-2">
            <span>
              <div class="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                <AcademicCapIcon class="w-5" />
              </div>
              <input disabled type="text" id="input-group-1"
                class="bg-transparent text-gray-900 text-sm lg:w-[295px] ps-8 p-2.5 border-transparent border-b-black border-2 h-9 dark:border-transparent dark:border-b-gray-400 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                placeholder="Kelas" :value="user.kelas" />
            </span>
          </div>
          <div class="flex mx-auto gap-2">
            <span class="hidden lg:block">
              <router-link :to="{ name: 'upload' }"
                class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-900 border border-gray-400 hover:border-gray-900 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2">
                <DocumentPlusIcon class="w-5" />
                Upload Project
              </router-link>
            </span>
            <span>
              <router-link :to="{ name: 'user.edit' }"
                class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-900 border border-gray-400 hover:border-gray-900 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2">
                <PencilSquareIcon class="w-5" />
                Edit Profile
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 flex flex-col justify-center items-center">
      <h3 class="text-center font-bold text-3xl dark:text-white">My Project</h3>

      <div class="flex flex-col" v-if="page.project.data?.length > 0">
        <main class="grid grid-cols-1 md:grid-cols-3 justify-center place-items-center mt-12 mx-5 gap-12 md:mx-7">
          <div v-for="item in page.project.data"
            class="w-72 h-56 relative rounded-md group flex justify-center items-center bg-blue-400 transition ease-in-out delay-10o0 hover:-translate-y-1 hover:scale-110 duration-300">
            <img v-if="item.image && item.image.length > 0" :src="routes + '/' + item.image[0].image"
              class="absolute w-full h-full rounded-md" />
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

        <div class="my-5">
          <Paginate :from="page.project.from" :to="page.project.to" :total="page.project.total"
            :perPage="page.project.per_page" :totalPages="page.project.last_page" :currentPage="page.project.current_page"
            @pagechanged="page.getproject">
          </Paginate>
        </div>
      </div>
      <div class="flex flex-col mt-5" v-else>
        <div class="flex justify-center items-center">
          <h3 class="text-gray-400 text-2xl font-semibold">
            You have not uploaded any Project.
          </h3>
        </div>
      </div>
    </div>
    <!-- <img src="@/assets/img/wave-profile.png" alt="Penyekat" class="w-full" /> -->
  </div>
</template>