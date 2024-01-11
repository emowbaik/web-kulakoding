<template>
    <div class="w-full h-screen overflow-hidden">
        <Navbar />
        <Hero />
            <img src="@/assets/img/Penyekat1.png" alt="Penyekat" class="w-full relative z-10" />
    </div>
</template>

<script setup>
    import Navbar from '@/components/Navbar.vue'
    import Hero from '@/components/Hero.vue'
</script>