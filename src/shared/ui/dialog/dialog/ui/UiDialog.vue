<template>
    <!-- DEBT: Слишком резко появляется диалог. Исправить  -->
  <div :class="props.class">
    <transition
      name="fade"
      appear
    >
      <div
        v-if="modelValue"
        class="ui-dialog__overlay"
        @click="handleClose"
        :style="{ zIndex: props.zIndex }"
      >
        <div
          role="dialog"
          aria-modal="true"
        >
          <dialog-content
            :title="props.title"
            :show-close="props.showClose"
            @click.stop
            @close="handleClose"
          >
            <slot />
          </dialog-content>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
// DEBT: Типизировать
import DialogContent from "#shared/ui/dialog/dialog-content/ui/DialogContent.vue";

type Props = {
  appendTo?: any
  appendToBody?: boolean
  zIndex?: number
  title?: string
  showClose?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  appendToBody: false,
  zIndex: 100,
  showClose: false,
})

const modelValue = defineModel<boolean>()

const handleClose = () => {
  modelValue.value = false
}

defineOptions({
  name: 'UiDialog',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>
.ui-dialog {
  &__overlay {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    background-color: var(--color-dark-60);
    inset: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--animation-time) linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
