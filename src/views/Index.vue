<template>
    <div class="flex flex-col w-screen h-full lg:h-screen overflow-hidden">
        <Navbar class="hidden lg:block" />
        <NavSidebar class="lg:hidden" />
        <Hero class="flex-grow"/>
            <img src="@/assets/img/Penyekat1.png" alt="Penyekat" class="w-full" />
    </div>
</template>

<script setup>
    import Navbar from '@/components/Navbar.vue'
    import NavSidebar from '@/components/NavSidebar.vue'
    import Hero from '@/components/Hero.vue'
</script>