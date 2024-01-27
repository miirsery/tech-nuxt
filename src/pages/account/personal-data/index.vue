<template>
  <div class="personal-data">
    <h5>Identification</h5>

    <p class="body-md color-grey-71 mt-6">Verify your identity</p>

    <account-identification-form />
  </div>
</template>

<script setup lang="ts">
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";
import {definePageMeta, useSeoMeta} from "#imports";
import {ref} from "vue";
import AccountIdentificationForm from "pages/account/personal-data/ui/AccountIdentificationForm.vue";

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
