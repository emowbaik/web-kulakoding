<template>
    <div class="w-screen h-screen overflow-hidden">
        <Navbar class="hidden lg:block" />
        <NavSidebar class="lg:hidden" />
        <Hero />
            <img src="@/assets/img/Penyekat1.png" alt="Penyekat" class="w-full lg:relative absolute bottom-0 -z-10" />
    </div>
</template>

<script setup>
    import Navbar from '@/components/Navbar.vue'
    import NavSidebar from '@/components/NavSidebar.vue'
    import Hero from '@/components/Hero.vue'
</script>