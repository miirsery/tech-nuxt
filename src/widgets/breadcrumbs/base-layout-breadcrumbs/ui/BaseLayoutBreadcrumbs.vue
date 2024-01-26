<template>
  <ui-breadcrumbs v-if="isBreadcrumbsVisible">
    <ui-breadcrumbs-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.title" :to="breadcrumb.link">
      {{ breadcrumb.title }}
    </ui-breadcrumbs-item>
  </ui-breadcrumbs>
</template>

<script setup lang="ts">
import {UiBreadcrumbs, UiBreadcrumbsItem} from "#shared/ui";
import {useBreadcrumbs} from "#widgets/breadcrumbs/base-layout-breadcrumbs";
import {ROUTE_NAMES} from "#shared/constants";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const { breadcrumbs } = useBreadcrumbs()

const BLACK_LIST: Array<typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES]> = ['index'];

const isBreadcrumbsVisible = computed(() => {
  return !BLACK_LIST.includes(route.name as typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES]);
})
</script>
