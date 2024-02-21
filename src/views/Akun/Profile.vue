<script setup>
import {
  EnvelopeIcon,
  LockClosedIcon,
  DocumentPlusIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/solid";
import useAuth from "../../services/auth";
import Navbar from "@/components/Navbar.vue";
import TopBar from "@/components/TopBar.vue";
import NavSidebar from "@/components/NavSidebar.vue";
import Hero from "@/components/Hero.vue";
import { onMounted } from "vue";

const { user, LoggedIn, Logout } = useAuth();

onMounted(() => {
  LoggedIn();
});
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <TopBar :toolbar="'user'" />
    <form @submit.prevent="save">
      <div class="flex-grow">
        <div class="flex flex-col justify-center items-center lg:my-5 my-20">
          <div class="flex flex-col items-center my-5">
            <div class="relative p-0.5 rounded-full">
              <img
                :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`"
                alt="profile"
                class="rounded-full w-20 items-center justify-center"
              />
            </div>
            <div class="flex">
              <h2 class="text-2xl text-center font-bold break-words">
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
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none"
                >
                  <EnvelopeIcon class="w-5" />
                </div>
                <input
                  disabled
                  type="text"
                  id="input-group-1"
                  class="bg-transparent text-gray-900 text-sm lg:w-[295px] ps-8 p-2.5 border-transparent border-b-black border-2 h-9 dark:border-transparent dark:border-b-gray-400 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                  placeholder="Email"
                  :value="user.email"
                />
              </span>
            </div>
            <div class="relative flex gap-2">
              <span>
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none"
                >
                  <WrenchScrewdriverIcon class="w-5" />
                </div>
                <input
                  disabled
                  type="text"
                  id="input-group-1"
                  class="bg-transparent text-gray-900 text-sm lg:w-[295px] ps-8 p-2.5 border-transparent border-b-black border-2 h-9 dark:border-transparent dark:border-b-gray-400 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                  placeholder="Role"
                  :value="user.role"
                />
              </span>
            </div>
            <div class="flex mx-auto gap-2">
              <span class="hidden lg:block">
                <router-link
                  :to="{ name: 'upload' }"
                  class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-900 border border-gray-400 hover:border-gray-900 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2"
                >
                  <DocumentPlusIcon class="w-5" />
                  Upload Project
                </router-link>
              </span>
              <span>
                <router-link
                  :to="{ name: 'user.edit' }"
                  class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-900 border border-gray-400 hover:border-gray-900 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2"
                >
                  <PencilSquareIcon class="w-5" />
                  Edit Profile
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
    <img src="@/assets/img/wave-profile.png" alt="Penyekat" class="w-full" />
  </div>
</template>
