<template>
  <div class="ui-table__wrapper">
    <table :class="['ui-table', props.class]">
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
// DEBT: Переделать таблицу.
import type { HTMLAttributes } from 'vue'

type Props = {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.ui-table {
  :deep(thead) {
    th {
      padding-left: 8px;
      padding-right: 8px;
      text-align: left;
    }
  }

  :deep(tbody) {
    td {
      padding: 8px;
      width: fit-content;
      vertical-align: middle;
    }
  }
}
</style>
