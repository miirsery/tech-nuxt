<template>
  <div class="ui-table-column">
    {{ props.field }}

    <slot name="body" :data="props.data" />
  </div>
</template>

<script setup lang="ts" generic="T = unknown">
type Props = {
  field?: string
  label?: string
  width?: string
  data?: T
}

type Slots = {
  default?: () => HTMLElement
  body?: ({ data }: { data: T }) => HTMLElement
}

const props = defineProps<Props>()
const slots = defineSlots<Slots>()
</script>

<style lang="scss" scoped>

</style>
