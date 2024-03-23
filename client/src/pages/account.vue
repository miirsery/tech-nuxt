<template>
  <nuxt-layout name="account">
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
import {ROUTE_NAMES} from "#shared/constants";

definePageMeta({
  redirect: { name: ROUTE_NAMES.ACCOUNT_PERSONAL_DATA }
})
</script>
