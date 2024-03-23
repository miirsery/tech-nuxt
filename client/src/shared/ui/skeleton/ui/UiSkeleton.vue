<template>
  <div class="skeleton">
    <slot v-if="$slots.default" />

    <div v-else v-bind="$attrs">
      <ui-skeleton-item />
    </div>
  </div>
</template>

<script setup lang="ts">
import {UiSkeletonItem} from "#shared/ui";

defineOptions({
  name: 'UiSkeleton',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>

</style>
