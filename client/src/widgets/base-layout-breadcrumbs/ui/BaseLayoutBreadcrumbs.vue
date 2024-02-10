<template>
  <ui-breadcrumbs class="base-layout-breadcrumbs" v-if="isBreadcrumbsVisible">
    <ui-breadcrumbs-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.title" :to="breadcrumb.link">
      {{ breadcrumb.title }}
    </ui-breadcrumbs-item>
  </ui-breadcrumbs>
</template>

<script setup lang="ts">
import {UiBreadcrumbs, UiBreadcrumbsItem} from "#shared/ui";
import {ROUTE_NAMES, type RouteNamesAllValuesType, type RouteNamesValueType} from "#shared/constants";
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";

const route = useRoute()

const { breadcrumbs } = useBreadcrumbs()

const BLACK_LIST: RouteNamesAllValuesType = [ROUTE_NAMES.MAIN];

const isBreadcrumbsVisible = computed(() => !BLACK_LIST.includes(route.name as RouteNamesValueType))
</script>

<style lang="scss" scoped>
.base-layout-breadcrumbs {
  margin-top: 24px;
  margin-bottom: 40px;
}
</style>
