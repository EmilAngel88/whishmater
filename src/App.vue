<template>
  <div class="font-chinese antialiased">
    <Navbar />
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import Navbar from "./components/layout/Navbar/index.vue";
</script>
