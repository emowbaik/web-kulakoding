<template>
        <section class="w-full h-[140px] overflow-hidden">
            <div class="flex flex-col items-end">
                <div
                v-for="number in 3"
                :key="'pic -' + number"
                class="h-[140px] max-h-[140px] min-h-[140px]"
                :style="{ transform: `translateY(${-140 * (currentMaskot - 1)}px)` }"
                >
            <img :src="`../../src/assets/maskot/${number}.png`" @click="next" :alt="'Maskot' + number">
            </div>
            </div>
        </section>
</template>

<script>
    export default {
        name:'Maskot',
        data() {
            return {
                currentMaskot: 1,
            }
        },
        methods: {
            next() {
                if (this.currentMaskot === 3) {
                    this.currentMaskot = 1
                } else {
                    this.currentMaskot++
                }
            }
        },
    }
</script>