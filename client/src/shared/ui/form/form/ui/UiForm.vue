<template>
  <form class="ui-form">
    <slot />
  </form>
</template>

<script lang="ts" setup>
type Props = {
  model?: Record<string, unknown>
}

defineOptions({
  name: 'UiForm',
})
</script>

<style lang="scss" scoped>
.ui-form {
  :deep(.ui-form-item) {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}
</style>
