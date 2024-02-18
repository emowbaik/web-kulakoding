<template>
  <section class="flex flex-col items-center lg:flex-row lg:justify-between mx-10 gap-10"> <img
      src="@/assets/img/work-2.png" alt="bg_hero"
      class="w-[80%] lg:w-[50%] lg:h-[100%] bg-center bg-cover bg-no-repeat" />
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-3">
        <h2 class="text-4xl font-bold text-center lg:text-left">Kula Koding</h2>
        <p class="font-medium text-center lg:text-left">Selamat datang di Kula Koding! Kami menjadi mitra Anda dalam
          perjalanan
          teknologi informasi yang terus berkembang. Dengan dedikasi pada inovasi, kami membawa Anda ke dunia solusi IT
          yang adaptif, memungkinkan transformasi dan pertumbuhan perusahaan Anda di era digital.</p>
        <hr style="height:2px;border-width:0;" class="bg-slate-900 dark:bg-white">
      </div>
      <div v-show="current.path !== '/dashboard'" class="flex justify-center lg:justify-start">
        <router-link :to="{ name: 'register' }"
          class="py-2 px-5 bg-kuning dark:bg-white rounded-md text-white dark:text-slate-900 shadow">Get
          Started</router-link>
      </div>
    </div>
  </section>
</template>
<script setup>
  import { useDark, useToggle } from "@vueuse/core";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const current = router.currentRoute;
  const isDark = useDark(false);
</script>