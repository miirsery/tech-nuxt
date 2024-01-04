<template>
  <svg class="ui-icon" :class="iconClass" width="1em" height="1em" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  name: string
  prefix?: string
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const iconClass = computed(() => {
  return [{ 'ui-icon--reversed': props.reverse }, `ui-icon--${props.name}`]
})
</script>

<style lang="scss" scoped>
.ui-icon {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  transition: transform 0.2s;

  &--reversed {
    transform: rotate(180deg);
  }
}
</style>
