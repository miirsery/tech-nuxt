<template>
  <ui-breadcrumbs class="base-layout-breadcrumbs" v-if="isBreadcrumbsVisible">
    <ui-breadcrumbs-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.title" :to="breadcrumb.link">
      {{ breadcrumb.title }}
    </ui-breadcrumbs-item>
  </ui-breadcrumbs>
</template>

<script setup lang="ts">
import {UiBreadcrumbs, UiBreadcrumbsItem} from "#shared/ui";
import {ROUTE_NAMES} from "#shared/constants";
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";

const route = useRoute()

const { breadcrumbs } = useBreadcrumbs()

const BLACK_LIST: Array<typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES]> = ['index'];

const isBreadcrumbsVisible = computed(() => {
  return !BLACK_LIST.includes(route.name as typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES]);
})
</script>

<style lang="scss" scoped>
.base-layout-breadcrumbs {
  margin-top: 24px;
  margin-bottom: 40px;
}
</style>
