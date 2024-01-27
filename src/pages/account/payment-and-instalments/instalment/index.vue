<template>
  <div class="instalment">
    <ui-table :data="[{ item: 1 }]" />
  </div>
</template>

<script setup lang="ts">
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";
import {UiTable} from "#shared/ui";

const { defineBreadcrumbs } = useBreadcrumbs()

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
    title: 'Payment & Instalments',
    link: '/account/payment-and-instalments',
  },
  {
    title: 'Instalment'
  }
])
</script>

<style lang="scss" scoped>

</style>
