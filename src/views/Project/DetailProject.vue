<template>
  {{ router.params.id }}
</template>

<script setup>
import { useRoute } from "vue-router";

const router = useRoute();
</script>
