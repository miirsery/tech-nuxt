<template>
	<div class="default-layout">
    <ui-header @open-auth="authFormVisible = true" />

		<slot />

    <auth-form v-model="authFormVisible" />
	</div>
</template>
<script setup lang="ts">
import UiHeader from "#widgets/header/ui/UiHeader.vue";
import {AuthForm} from "#widgets/guest";
import {ref} from "vue";

const authFormVisible = ref(false)
</script>
