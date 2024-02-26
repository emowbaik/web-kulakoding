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
        </div>
        <form @submit.prevent="save" class="flex flex-col gap-3">
          <div class="relative flex gap-2">
            <span>
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <EnvelopeIcon class="w-5" />
              </div>
              <input
                v-model="form.email"
                type="text"
                id="input-group-1"
                class="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reset email"
              />
            </span>
          </div>
          <div class="relative flex gap-2">
            <span>
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <AcademicCapIcon class="w-5" />
              </div>
              <input
                v-model="form.kelas"
                type="text"
                id="input-group-1"
                class="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reset Kelas"
              />
            </span>
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
          </div>
          <div class="flex justify-center items-center">
            <span class="lg:block">
              <button
                class="inline-flex w-full items-center gap-1 font-semibold rounded-md bg-transparent focus:bg-slate-300 border border-gray-300 hover:border-gray-400 dark:bg-transparent dark:focus:bg-slate-900 dark:border-gray-600 hover:dark:border-gray-400 shadow p-2"
              >
                <DocumentCheckIcon class="w-5" />
                Save
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  EnvelopeIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ArrowRightStartOnRectangleIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
  HomeIcon,
  ChevronRightIcon,
  AcademicCapIcon,
} from "@heroicons/vue/24/solid";
import useAuth from "../../services/auth";
import Navbar from "@/components/Navbar.vue";
import NavSidebar from "@/components/NavSidebar.vue";
import Hero from "@/components/Hero.vue";
import useUser from "../../services/user/index";
import TopBar from "../../components/TopBar.vue";

import { onMounted, reactive, watch } from "vue";

const { updateProfile } = useUser();
const { user, LoggedIn } = useAuth();

onMounted(() => {
  LoggedIn();

  setTimeout(() => {
    console.log();
  }, 1200);
});

const form = reactive({
  username: "",
  kelas: "",
  email: "",
});

watch(user, (item) => {
  form.username = item.username;
  form.kelas = item.kelas;
  form.email = item.email;
});

async function save() {
  await updateProfile(form);
}
</script>
