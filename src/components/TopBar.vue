<template>
  <div class="flex justify-between p-2 md:mx-6 mt-2">
    <button @touchstart="goBack" @click="goBack" class="flex items-center gap-1 font-semibold">
      <ArrowLeftIcon class="w-5" />
      Back
    </button>
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <router-link :to="{ name: 'dashboard' }"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <HomeIcon class="text-gray-700 dark:text-gray-400 w-4 mr-1" />
            Home
          </router-link>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <ChevronRightIcon class="text-gray-700 dark:text-gray-400 w-[18px]" />
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{ toolbar }}</span>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import {
  ChevronRightIcon,
  ArrowLeftIcon,
  HomeIcon,
} from "@heroicons/vue/24/outline";
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps(["toolbar"]);

const goBack = () => {
  router.go(-1);
};
</script>