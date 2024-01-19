<template>
  <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:mr-10 lg:-my-5">
    <div class="flex lg:mx-10 items-center mx-auto">
      <div v-if="isDark == true"
        class="bg-[url(@/assets/img/bg-hero-dark.png)] w-full h-[485px] lg:w-full -mt-20 lg:mt-2 flex items-center bg-center bg-contain bg-no-repeat z-0">
        <p class="text-lg mx-5 text-center font-bold lg:text-2xl text-black dark:text-white z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iste.
        </p>
      </div>
      <div v-else
        class="bg-[url(@/assets/img/bg-hero.png)] w-full h-[485px] lg:w-full -mt-20 lg:mt-2 flex items-center bg-center bg-contain bg-no-repeat z-0">
        <p class="text-lg mx-5 text-center font-bold lg:text-2xl text-black z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iste.
        </p>
      </div>
    </div>
    <img src="@/assets/img/work-2.png" alt="bg_hero"
      class="w-full lg:w-[50%] lg:h-[50%] -mt-20 lg:mt-2 mx-auto bg-center bg-cover bg-no-repeat" />
  </div>
</template>
<script setup>
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark(false);
</script>