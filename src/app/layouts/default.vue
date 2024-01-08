<template>
	<div class="default-layout">
    <ui-header />

		<slot />
	</div>
</template>
<script setup lang="ts">
import UiHeader from "#widgets/header/ui/UiHeader.vue";
</script>
