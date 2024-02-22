<template>
  <Navbar></Navbar>
  <h3>{{ router.params.slug }}</h3>
</template>

<script setup>
import Navbar from "../../components/navbar.vue";
import { useRoute } from "vue-router";

const router = useRoute();
</script>
