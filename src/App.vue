<template>
  <RouterView></RouterView>
</template>
<script setup></script>
<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-slate-100 text-slate-900 dark:bg-[#212538] dark:text-white
}
</style>