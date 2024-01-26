<template>
  <div class="payment and instalments">
    Payment & Instalments
  </div>
</template>

<script setup lang="ts">
import {definePageMeta, useSeoMeta} from "#imports";
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";

const { defineBreadcrumbs } = useBreadcrumbs()

// DEBT: Сделать генерацию хлебных крошек где-то в одном местею
defineBreadcrumbs([
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Account',
    link: '/account',
  },
  {
    title: ' Payment & Instalments',
  }
])

useSeoMeta({
  title: ' Payment & Instalments'
})

definePageMeta({
  title: 'Payment & Instalments',
  iconName: 'dollar-circle'
})
</script>

<style lang="scss" scoped>
</style>
