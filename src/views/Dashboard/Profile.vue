<template>
    <div class="w-screen h-screen overflow-hidden">
        <Navbar />
        <div class="flex flex-col justify-center items-center min-h-screen">
            <div class="p-0.5 rounded-full">
                <img src="@/assets/img/Profile.png" alt="profile" class="rounded-full w-10 items-center justify-center">
            </div>
            <h2>LowTierGod</h2>
            <div class="flex flex-col gap-3">
                <div class="relative rounded-md">
                    <span class="bg-gray-300 p-[7px] rounded-s-md"><i class="bi bi-envelope-at-fill"></i></span>
                    <input
                    type="password"
                    class=" w-80 py-1.5 px-2 border-2 border-slate-900 focus:outline-[#0096D1]"
                    placeholder="Kata Sandi"
                  />
                </div>
                <div class="relative">
                    <input
                    type="email"
                    class="border-2 w-80 border-slate-900 rounded-md py-1.5 px-2 focus:outline-[#0096D1]"
                    placeholder="Email"
                  />
                </div>
            </div>

        </div>
            <!-- <img src="@/assets/img/Penyekat1.png" alt="Penyekat" class="w-full relative z-10" /> -->
    </div>
</template>

<script setup>
    import Navbar from '@/components/Navbar.vue'
    import Hero from '@/components/Hero.vue'
</script>