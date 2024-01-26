<template>
  <div class="products-page">
    <h1>Products</h1>
  </div>
</template>

<script lang="ts" setup>
import {useSeoMeta} from "#imports";
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";

const { defineBreadcrumbs } = useBreadcrumbs()

defineBreadcrumbs([
  {
    title: 'Главная',
    link: '/'
  },
  {
    title: 'Продукты',
  }
])

useSeoMeta({
  title: 'Все продукты',
})
</script>
