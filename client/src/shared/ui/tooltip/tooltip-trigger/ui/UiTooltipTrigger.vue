<template>
  <ui-popper-trigger>
    <slot />
  </ui-popper-trigger>
</template>

<script setup lang="ts">
import {UiPopperTrigger} from "#shared/ui";

defineOptions({
  name: 'UiTooltipTrigger',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>

</style>
