<template>
  <div ref="uiDialogRef" :class="uiDialogClasses" tabindex="-1">
    <header v-if="isHeaderVisible" ref="uiDialogHeaderRef" class="ui-dialog-content__header">
      <slot v-if="slots.header" name="header" />

      <template v-else>
        <h5 v-if="props.title" class="ui-dialog-content__header-title">
          {{ props.title }}
        </h5>

        <button
          v-if="props.showClose"
          class="ui-dialog-content__header-close"
          type="button"
          @click="emits('close')"
        >
          <ui-icon name="close-circle" />
        </button>
      </template>
    </header>

    <div class="ui-dialog-content__body">
      <slot />
    </div>

    <footer v-if="slots.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import {UiIcon} from "#shared/ui";

type Props = {
  title?: string
  showClose?: boolean
  class?: string
}

type Emits = {
  (event: 'close'): void
}

type Slots = {
  header?: () => HTMLElement
  footer?: () => HTMLElement
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const slots = defineSlots<Slots>()

const uiDialogRef = ref<HTMLDivElement | null>(null)

const isHeaderVisible = computed(() => {
  return props?.title || slots.footer || props.showClose
})
const uiDialogClasses = computed(() => {
  return [
    'ui-dialog-content',
    { 'with-header': isHeaderVisible.value },
    props.class
  ]
})
</script>

<style lang="scss" scoped>
.ui-dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3px 6px #00000029;
  background-color: var(--color-white);
  overflow-y: auto;
  border-radius: 8px;
  position: relative;

  $root: &;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-44);
    width: 100%;
  }

  &__header-close {
    width: var(--font-size--icon-md);
    height: var(--font-size--icon-md);

    svg {
      font-size: var(--font-size--icon-md);
    }
  }

  &__body {
    width: 100%;
  }

  &.with-header {
    padding: 24px;
  }
}
</style>
