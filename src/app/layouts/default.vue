<template>
	<div class="default-layout">
    <ui-header @open-auth="authFormVisible = true" />

    <base-layout-breadcrumbs />

		<slot />

    <auth-form v-model="authFormVisible" />
	</div>
</template>
<script setup lang="ts">
import {UiHeader} from "#widgets/header";
import {AuthForm} from "#widgets/guest";
import {ref} from "vue";
import {UiBreadcrumbs, UiBreadcrumbsItem} from "#shared/ui";
import {ROUTE_NAMES} from "#shared/constants";
import {BaseLayoutBreadcrumbs} from "#widgets/breadcrumbs/base-layout-breadcrumbs";

const authFormVisible = ref(false)
</script>
