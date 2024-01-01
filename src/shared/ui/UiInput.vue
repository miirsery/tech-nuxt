<template>
	<input class="ui-input" v-model="modelValue" />
</template>

<script lang="ts" setup>
const modelValue = defineModel()
</script>

<style lang="scss" scoped>
.ui-input {
	z-index: z('modal');
}
</style>
