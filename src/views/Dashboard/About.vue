<template>
    <div class="w-full h-full overflow-hidden">
        <Navbar class="hidden lg:block" />
        <NavSidebar class="lg:hidden" />
        <div class="flex justify-between p-2">
            <router-link :to="{ name:'dashboard' }" class="flex items-center gap-1 font-semibold">
                <ArrowLeftIcon class="w-5" />
                Back
            </router-link>
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="/dashboard"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <HomeIcon class="text-gray-700 dark:text-gray-400 w-4 mr-1" />
                            Home
                        </a>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <ChevronRightIcon class="text-gray-700 dark:text-gray-400 w-[18px]" />
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">about</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
        <div class="flex flex-col">
            <h2 class="text-center font-bold text-3xl my-5">About Us</h2>
            <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:mr-10 lg:-my-5">
                <div class="flex lg:mx-10 items-center mx-auto">
                    <div
                    v-if="isDark == true"
                        class="bg-[url(@/assets/img/bg-hero-dark.png)] w-full h-[480px] lg:w-full -mt-20 lg:mt-2 bg-center bg-cover bg-no-repeat z-0">
                        <div class="flex flex-col text-center m-8">
                            <h2 class="text-lg mb-2 font-bold lg:text-2xl text-black dark:text-white z-10">Our Purpose</h2>
                            <p class="text-lg font-semibold lg:text-base text-black dark:text-white z-10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse consequatur quisquam
                                est porro enim nostrum nulla, laudantium pariatur officia excepturi repellendus nemo
                                minus ipsam iure? Soluta, vero inventore. Cum facilis vitae blanditiis harum architecto
                                alias delectus voluptatum ratione nihil itaque molestias velit rem laboriosam odio
                                corporis esse sint dicta deserunt modi tempora, corrupti consequuntur. Animi repellat
                                iusto laudantium cum magni? Alias vero quas ratione odit officiis cupiditate omnis atque
                                eum quos! Soluta qui, distinctio illo nobis, voluptate nemo ratione laborum voluptatem
                                veritatis dolores voluptates autem, tempora perferendis incidunt doloremque
                                necessitatibus odio eius deleniti tempore asperiores. Explicabo officia quis iure non a
                                alias aliquam dolor odit optio recusandae hic itaque libero soluta sequi esse similique
                                cupiditate error possimus deserunt id ipsam corporis, aut ullam. Doloremque, repellendus
                                doloribus quasi explicabo rerum sit sed quibusdam cum cupiditate laudantium repudiandae,
                                veritatis, officia animi ad aut veniam. Aut amet suscipit unde animi porro cum!
                            </p>
                        </div>
                    </div>
                    <div
                    v-else
                        class="bg-[url(@/assets/img/bg-hero.png)] w-full h-[480px] lg:w-full -mt-20 lg:mt-2 bg-center bg-cover bg-no-repeat z-0">
                        <div class="flex flex-col text-center m-8">
                            <h2 class="text-lg mb-2 font-bold lg:text-2xl text-black z-10">Our Purpose</h2>
                            <p class="text-lg font-semibold lg:text-base text-black z-10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse consequatur quisquam
                                est porro enim nostrum nulla, laudantium pariatur officia excepturi repellendus nemo
                                minus ipsam iure? Soluta, vero inventore. Cum facilis vitae blanditiis harum architecto
                                alias delectus voluptatum ratione nihil itaque molestias velit rem laboriosam odio
                                corporis esse sint dicta deserunt modi tempora, corrupti consequuntur. Animi repellat
                                iusto laudantium cum magni? Alias vero quas ratione odit officiis cupiditate omnis atque
                                eum quos! Soluta qui, distinctio illo nobis, voluptate nemo ratione laborum voluptatem
                                veritatis dolores voluptates autem, tempora perferendis incidunt doloremque
                                necessitatibus odio eius deleniti tempore asperiores. Explicabo officia quis iure non a
                                alias aliquam dolor odit optio recusandae hic itaque libero soluta sequi esse similique
                                cupiditate error possimus deserunt id ipsam corporis, aut ullam. Doloremque, repellendus
                                doloribus quasi explicabo rerum sit sed quibusdam cum cupiditate laudantium repudiandae,
                                veritatis, officia animi ad aut veniam. Aut amet suscipit unde animi porro cum!
                            </p>
                        </div>
                    </div>
                </div>
                <img src="@/assets/img/code-typing.png" alt="bg_hero"
                    class="w-[70%] h-auto lg:w-[50%] lg:h-[50%] -mt-20 lg:mt-2 mx-auto bg-center bg-cover bg-no-repeat" />
            </div>
        </div>

        <img v-if="isDark == true" src="@/assets/img/wave-about-dark.png" alt="Penyekat" class="w-full relative z-10" />
        <img v-else src="@/assets/img/wave-about.png" alt="Penyekat" class="w-full relative z-10" />
    </div>
</template>

<script setup>
    import {
        ArrowLeftIcon,
        HomeIcon,
        ChevronRightIcon,
    } from '@heroicons/vue/24/solid'
    import Navbar from "@/components/Navbar.vue";
    import NavSidebar from "@/components/NavSidebar.vue";
    import Hero from "@/components/Hero.vue";
    import { useDark, useToggle } from "@vueuse/core";

    const isDark = useDark(false);
</script>