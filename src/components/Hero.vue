<template>
  <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:my-5">
    <div class="flex lg:m-10 items-center mx-auto">
      <div v-if="isDark == true"
        class="rounded-lg bg-no-repeat lg:m-0 m-5 bg-right-top bg-[#FFBC43] bg-opacity-25 bg-[url(@/assets/img/aset-hero1-dark.png)]">
        <div class="bg-no-repeat bg-center bg-cover bg-[url(@/assets/img/aset-hero2-dark.png)]">
          <div class="bg-no-repeat bg-left-bottom bg-[url(@/assets/img/aset-hero3-dark.png)]">
            <div class="relative flex items-center w-[100%] lg:w-[748px] min-h-[400px] overflow-hidden">
              <p class="text-lg m-5 text-center font-bold lg:text-2xl text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else
        class="rounded-lg bg-no-repeat lg:m-0 m-5 bg-right-top bg-[#FFBC43] bg-opacity-25 bg-[url(@/assets/img/aset-hero1.png)]">
        <div class="bg-no-repeat bg-center bg-cover bg-[url(@/assets/img/aset-hero3.png)]">
          <div class="bg-no-repeat bg-left-bottom bg-[url(@/assets/img/aset-hero2.png)]">
            <div class="relative flex items-center w-[100%] lg:w-[748px] min-h-[400px] overflow-hidden">
              <p class="text-lg m-5 text-center font-bold lg:text-2xl text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/img/work-2.png" alt="bg_hero"
      class="w-[80%] lg:w-[50%] lg:h-[100%] bg-center bg-cover bg-no-repeat" />
  </div>
</template>
<script setup>
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark(false);
</script>