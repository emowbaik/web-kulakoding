<template>
  <div class="flex flex-col w-screen h-full lg:h-screen overflow-hidden">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <!-- <Hero class="flex-grow" /> -->
    <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:my-5 m-10 gap-5">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-3">
          <h2 class="text-4xl font-bold">Judul</h2>
          <p class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum aspernatur illo dolorum sequi
            asperiores? Libero accusantium adipisci unde quasi blanditiis placeat ut? Harum, nostrum, explicabo, soluta
            impedit sunt veniam doloribus perspiciatis quia porro dolore omnis vero sed modi iusto? Error exercitationem
            dolores iure esse porro alias distinctio voluptate laudantium.</p>
            <hr style="height:2px;border-width:0;" class="bg-slate-900 dark:bg-white">
          </div>
          <div>
            <router-link :to="{ name:'register' }" class="py-2 px-5 bg-[#3E9ACF] rounded-md">Get Started</router-link>
          </div>
      </div>
      <img src="@/assets/img/work-2.png" alt="bg_hero"
        class="w-[80%] lg:w-[50%] lg:h-[100%] bg-center bg-cover bg-no-repeat" />
    </div>
    <div class="mt-10">
      <img src="@/assets/img/Penyekatdark1.png" v-if="isDark === true" alt="Penyekat" class="relative w-full" />
      <img src="@/assets/img/Penyekat1.png" v-else alt="Penyekat" class="relative w-full" />
    </div>
  </div>
</template>

<script setup>
  import Navbar from "@/components/Navbar.vue";
  import NavSidebar from "@/components/NavSidebar.vue";
  import Hero from "@/components/Hero.vue";
  // import { onMounted } from "vue";
  import { useDark } from "@vueuse/core";

  const isDark = useDark(false);

</script>