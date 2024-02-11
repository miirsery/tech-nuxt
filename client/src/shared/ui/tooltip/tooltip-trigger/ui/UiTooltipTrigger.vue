<template>
  <ui-popper-trigger v-on="$attrs">
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
