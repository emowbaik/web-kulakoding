<template>
  <div class="flex flex-col w-screen overflow-x-hidden">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <TopBar :toolbar="'User'"></TopBar>
    <div class="flex-grow">
      <div class="flex flex-col justify-center items-center lg:my-5 my-20">
        <div class="flex flex-col items-center my-5">
          <div class="p-0.5 rounded-full">
            <img
              :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`"
              alt="profile"
              class="rounded-full w-20 items-center justify-center"
            />
          </div>
          <h2 class="text-2xl mt-5 font-bold">{{ user.username }}</h2>
          <button
            class="py-2 px-4 mt-4 rounded-lg bg-blue-500 text-md text-black"
          >
            Edit profile >
          </button>
        </div>
        <div class="flex flex-col gap-3">
          <div class="relative flex gap-2">
            <span>
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <EnvelopeIcon class="w-5" />
              </div>
              <input
                disabled
                type="text"
                id="input-group-1"
                class="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reset email"
                :value="user.email"
              />
            </span>
            <div
              class="flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-200 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2"
            >
              <PencilSquareIcon class="w-5" />
            </div>
          </div>
          <div class="relative flex gap-2">
            <span>
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <LockClosedIcon class="w-5" />
              </div>
              <input
                disabled
                type="password"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reset password"
              />
            </span>
            <div
              class="flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-200 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2"
            >
              <PencilSquareIcon class="w-5" />
            </div>
          </div>
          <div class="flex gap-2">
            <span class="lg:block">
              <router-link
                :to="{ name: 'upload' }"
                class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2"
              >
                <DocumentPlusIcon class="w-5" />
                Upload Project
              </router-link>
            </span>
            <button
              class="inline-flex lg:mx-0 mx-auto items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2"
            >
              <ArrowRightStartOnRectangleIcon class="w-5" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-7 flex flex-col justify-center items-center">
      <h3 class="text-center font-bold text-3xl dark:text-white">My Project</h3>

      <div class="flex flex-col" v-if="project.data?.length > 0">
        <main
          class="grid grid-cols-3 justify-center place-items-center mt-12 gap-12"
        >
          <div
            v-for="item in project.data"
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
              <RouterLink :to="{ name: 'detail', params: { id: item.id } }">
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
            :from="project.from"
            :to="project.to"
            :total="project.total"
            :perPage="project.per_page"
            :totalPages="project.last_page"
            :currentPage="project.current_page"
            @pagechanged="getproject"
          >
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
  </div>
</template>

<script setup>
import {
  EnvelopeIcon,
  LockClosedIcon,
  DocumentPlusIcon,
  ArrowRightStartOnRectangleIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
  HomeIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/solid";
import useAuth from "../../services/auth";
import Navbar from "@/components/Navbar.vue";
import NavSidebar from "@/components/NavSidebar.vue";
import Hero from "@/components/Hero.vue";
import useUser from "../../services/user/index";
import Paginate from "../../components/Paginate.vue";
import TopBar from "../../components/TopBar.vue";

import { onMounted } from "vue";

const { user, LoggedIn } = useAuth();
const { IndexProject, project } = useUser();

onMounted(() => {
  LoggedIn();
  IndexProject();

  setTimeout(() => {
    console.log();
  }, 1200);
});
</script>
