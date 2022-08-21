<template>
  <div class="flex h-20 w-full justify-center text-base-content">
    <nav class="navbar w-full">
      <div class="flex flex-1 md:gap-1 lg:gap-2">
        <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
          <div
            class="
              font-title
              inline-flex
              text-lg text-primary
              transition-all
              duration-200
              md:text-3xl
            "
          >
            <img :src="nav.logo" />
          </div>
        </a>
      </div>
      <div class="flex">
        <ul>
          <router-link
            v-for="(item, i) in nav.pages"
            :key="i"
            :to="item.path"
            :class="{ 'mr-4': i != nav.pages.length - 1 }"
          >
            {{ item.name }}
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const nav = {
  logo: "https://wishmaster.me/local/templates/wish_new/assets/img/logo-name.png",
  pages: [
    {
      name: "Каталог",
      path: "/catalog",
    },
    {
      name: "Корзина",
      path: "/card",
    },
    {
      name: "Избранное",
      path: "/favorites",
    },
  ],
};
</script>

<style lang="scss" scoped>
</style>