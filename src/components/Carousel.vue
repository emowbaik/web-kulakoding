<template>
    <swiper :spaceBetween="0" :centeredSlides="true" :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }" :pagination="{
        clickable: true,
      }" :modules="modules" class="w-full h-64 object-cover">
        <swiper-slide v-for="item in data" :key="item.id">
            <img :src="baseUrl + '/' + item.image" alt="Project" loading="lazy" />
        </swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import "@/assets/slide.css";
    import { Pagination, Navigation, Autoplay } from "swiper/modules";
    import { computed } from "vue";

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        props: {
            data: Array, // Terima data melalui props
        },
        setup(props) {
            const baseUrl = import.meta.env.VITE_API_URL;
            console.log(baseUrl);
            const modules = [Autoplay, Pagination, Navigation];

            return {
                baseUrl,
                modules,
                data: computed(() => props.data), // Gunakan data dari props
            };
        },
    };
</script>