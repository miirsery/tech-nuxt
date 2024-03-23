<template>
  <div class="catalog-page">
    <div class="container">
      <nuxt-link :to="{ name: ROUTE_NAMES.CATEGORY, params: { slug: 'mobile-phones' } }">Mobile</nuxt-link>
      <nuxt-link :to="{ name: ROUTE_NAMES.CATEGORY, params: { slug: 'laptops-and-computers' } }">Laptop</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ROUTE_NAMES} from "#shared/constants";
import {useBreadcrumbs} from "#widgets/base-breadcrumbs";

const { defineBreadcrumbs } = useBreadcrumbs()

defineBreadcrumbs([
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Catalog',
  },
])
</script>

<style lang="scss" scoped>

</style>
