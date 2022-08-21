<template>
  <div class="flex h-14 w-full items-center justify-center border-t-2 border-sky-500">
    <ul>
      <router-link
        tag="li"
        v-for="(item, i) in products"
        :key="i"
        :to="`/category${item.path}`"
        :class="{ 'mr-16': i !== products.length - 1 }"
      >
        {{ item.name }}
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    path: "/phones",
    name: "Телефоны",
  },
  {
    path: "/notebook",
    name: "Ноутбуки",
  },
  {
    path: "/tv",
    name: "Телевизоры",
  },
  {
    path: "/conlose",
    name: "Консоли",
  },
];
</script>

<style lang="scss" scoped>
</style>