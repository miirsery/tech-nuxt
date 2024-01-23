<template>
  <div class="products-page">
    <h1>Products</h1>
  </div>
</template>

<script lang="ts" setup>
import {useBreadcrumbs} from "#widgets/breadcrumbs/base-layout-breadcrumbs";
import {useSeoMeta} from "#imports";

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
