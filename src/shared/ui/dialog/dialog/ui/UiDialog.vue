<template>
  <client-only>
      <transition
        name="dialog-fade"
      >
        <div
          v-show="modelValue"
          class="ui-dialog__overlay"
        >
          <div
            role="dialog"
            aria-modal="true"
          >
            <dialog-content>
              <slot />
            </dialog-content>
          </div>
        </div>
      </transition>
  </client-only>
</template>

<script lang="ts" setup>
// DEBT: Типизировать
import DialogContent from "#shared/ui/dialog/dialog-content/ui/DialogContent.vue";

type Props = {
  appendTo?: any
  appendToBody?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  appendToBody: false,
})

const modelValue = defineModel<boolean>()

defineOptions({
  name: 'UiDialog',
  inheritAttrs: false,
})
</script>
