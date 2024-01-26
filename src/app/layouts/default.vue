<template>
	<div class="default-layout">
    <ui-header @open-auth="authFormVisible = true" />

    <div class="container">
      <base-layout-breadcrumbs />

      <slot />
    </div>

    <auth-form v-model="authFormVisible" />
	</div>
</template>
<script setup lang="ts">
import {UiHeader} from "#widgets/header";
import {AuthForm} from "#widgets/guest";
import {ref} from "vue";
import {BaseLayoutBreadcrumbs} from "#widgets/base-layout-breadcrumbs";

const authFormVisible = ref(false)
</script>
