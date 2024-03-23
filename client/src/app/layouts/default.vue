<template>
	<div class="default-layout">
    <ui-header @open-auth="authFormVisible = true" />

    <div v-if="isBreadcrumbsVisible" class="container">
      <base-breadcrumbs />
    </div>

    <div class="default-layout__content">
      <slot />
    </div>


    <auth-form v-model="authFormVisible" />
	</div>
</template>
<script setup lang="ts">
import {UiHeader} from "#widgets/header";
import {AuthForm} from "#widgets/guest";
import {ref} from "vue";
import {BaseBreadcrumbs, useBreadcrumbs} from "#widgets/base-breadcrumbs";
import {ROUTE_NAMES, type RouteNamesAllValuesType, type RouteNamesValueType} from "#shared/constants";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const { breadcrumbs } = useBreadcrumbs()

const BLACK_LIST: RouteNamesAllValuesType = [ROUTE_NAMES.MAIN];

const authFormVisible = ref(false)

const isBreadcrumbsVisible = computed(() => !BLACK_LIST.includes(route.name as RouteNamesValueType))
</script>
