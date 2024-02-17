<template>
  <!-- DEBT: Слишком резко появляется диалог. Исправить  -->
  <teleport
    :to="appendTo"
    :disabled="appendTo !== 'body' ? false : !appendToBody"
    >
    <div :class="props.class">
      <transition>
        <div
          v-if="modelValue"
          :style="{ zIndex: props.zIndex }"
          class="ui-dialog__overlay"
          @click="handleClose"
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
  </teleport>
</template>

<script lang="ts" setup>
// DEBT: Разнообразить список анимаций.
import DialogContent from "#shared/ui/dialog/dialog-content/ui/DialogContent.vue";

type Props = {
  appendTo?: string | HTMLElement
  appendToBody?: boolean
  zIndex?: number
  title?: string
  showClose?: boolean
  class?: string
  fullScreen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  zIndex: 100,
  appendTo: 'body',
  appendToBody: false,
  showClose: false,
  fullScreen: false,
})

const modelValue = defineModel('modelValue', {
  type: Boolean,
  required: true
})

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

.v-enter-active,
.v-leave-active {
  transition: opacity var(--animation-time) linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
