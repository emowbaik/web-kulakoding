<template>
    <div class="w-full h-full overflow-hidden">
        <Navbar class="hidden lg:block" />
        <NavSidebar class="lg:hidden" />
        <div class="flex justify-between p-2">
            <router-link :to="{ name: 'dashboard' }" class="flex items-center gap-1 font-semibold">
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
            <div class="flex flex-col items-start lg:flex-row lg:justify-between lg:-my-5">
                <div class="flex lg:m-10 items-center mx-auto">
                    <div v-if="isDark == true"
                        class="rounded-lg bg-no-repeat lg:m-0 m-5 bg-right-top bg-[#FFBC43] bg-opacity-25 bg-[url(@/assets/img/aset-hero1-dark.png)]">
                        <div class="bg-no-repeat bg-center lg:bg-cover bg-[url(@/assets/img/aset-hero2-dark.png)]">
                            <div class="bg-no-repeat bg-left-bottom bg-[url(@/assets/img/aset-hero3-dark.png)]">
                                <div class="relative w-[100%] lg:w-[748px] min-h-[400px] overflow-hidden">
                                    <h2 class="text-center mt-5 font-bold text-2xl text-black dark:text-white">Our
                                        Purpose</h2>
                                    <p class="text-lg m-5 text-center font-normal lg:text-2xl text-black dark:text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quas
                                        reprehenderit sit dolorem maiores. Quasi enim dolore, aliquid at error numquam
                                        ut ipsum, ratione fugiat atque hic nihil exercitationem eaque mollitia esse
                                        velit itaque quibusdam provident eligendi maxime dolor. Provident aliquam itaque
                                        exercitationem alias architecto illum vitae, ipsum corporis laborum odit ratione
                                        quos? Obcaecati nostrum odit voluptatem illo perferendis esse dolores totam
                                        voluptate, maiores quod soluta sed magni dolore odio unde repudiandae quae,
                                        recusandae nemo corrupti. Explicabo libero nemo quas neque repellendus sunt
                                        voluptatum, deleniti earum! Ad ut fugit libero repellendus provident doloribus
                                        tenetur voluptatum recusandae soluta architecto ratione numquam dolorum, eveniet
                                        eum minus? Distinctio adipisci explicabo eligendi quidem! Dolores culpa,
                                        praesentium ab placeat consequatur error iste facere quas, libero quisquam
                                        deserunt! Suscipit laboriosam non perspiciatis fuga explicabo illum saepe
                                        voluptates. Illum, quod. Aliquid quo ex, quisquam necessitatibus vitae pariatur
                                        tenetur soluta modi sapiente fugit mollitia eligendi blanditiis officia unde
                                        consequuntur. Vitae rem consequuntur magnam modi rerum error accusantium
                                        possimus dolorum eos adipisci sequi necessitatibus minus unde dolores, animi
                                        similique quod eligendi quis magni porro facere. Soluta nostrum reiciendis
                                        itaque hic saepe ipsa nam, quod ullam laboriosam quae impedit nulla magnam
                                        corporis laborum ratione neque illo illum adipisci. Debitis, ducimus!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else
                        class="rounded-lg bg-no-repeat lg:m-0 m-5 bg-right-top bg-[#FFBC43] bg-opacity-25 bg-[url(@/assets/img/aset-hero1.png)]">
                        <div class="bg-no-repeat bg-center lg:bg-cover bg-[url(@/assets/img/aset-hero3.png)]">
                            <div class="bg-no-repeat bg-left-bottom bg-[url(@/assets/img/aset-hero2.png)]">
                                <div class="relative w-[100%] lg:w-[748px] min-h-[400px] overflow-hidden">
                                    <h2 class="text-center mt-5 font-bold text-4xl text-black dark:text-white">Our
                                        Purpose</h2>
                                    <p class="text-lg m-5 text-center font-medium lg:text-2xl text-black dark:text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae illo possimus dicta sequi deleniti! Rem vel ducimus debitis dolorum officiis earum, maxime quasi accusantium eaque veniam non omnis possimus tempore, repudiandae ea, excepturi nemo ex praesentium repellat numquam inventore est facilis quibusdam. Cupiditate, sapiente! Deserunt autem aut perferendis illo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="@/assets/img/code-typing.png" alt="bg_hero"
                    class="w-[80%] lg:w-[50%] lg:h-[100%] bg-center bg-cover bg-no-repeat" />
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