<template>
  <div class="ui-dialog-content" ref="uiDialogRef" :class="uiDialogClasses" tabindex="-1" :style="uiDialogStyles">
    <header ref="uiDialogHeaderRef" class="ui-dialog-content__header">
      <slot v-if="slots.header" name="header">
        <span>
          Я хедер
        </span>
      </slot>
    </header>

    <div class="ui-dialog-content__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";

type Slots = {
  header?: () => HTMLElement
}

const slots = defineSlots<Slots>()

const uiDialogRef = ref<HTMLDivElement | null>(null)

const uiDialogClasses = computed(() => {
  return [
    'ui-dialog-content',
  ]
})

const uiDialogStyles = computed(() => {
  return {
    margin: '0'
  }
})
</script>
