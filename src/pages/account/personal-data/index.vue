<template>
  <div class="personal-data">
    <h5>Identification</h5>
  </div>
</template>

<script setup lang="ts">
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";
import {definePageMeta, useSeoMeta} from "#imports";
import {ref} from "vue";

const title = ref('Personal Data')

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
    title: 'Personal Data',
  }
])

useSeoMeta({
  title: 'Personal Data'
})

definePageMeta({
  title: 'Personal Data',
  iconName: 'user-edit',
})
</script>

<style lang="scss" scoped>

</style>
