<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <transition
      @before-enter="onBeforeEnter"
    >
      <ui-popper-content
        ref="contentRef"
        v-if="shouldRender"
        v-show="shouldShow"
        v-bind="$attrs"
        @mouseenter="onContentEnter"
        @mouseleave="onContentLeave"
      >
        <template v-if="!destroyed">
          <slot />
        </template>
      </ui-popper-content>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import {UiPopperContent} from "#shared/ui";
import {computed, inject, onBeforeUnmount, ref, unref} from "vue";
import {TOOLTIP_INJECTION_KEY} from "#shared/ui/tooltip/constants";

type Props = {
  teleported?: boolean
  appendTo?: HTMLElement | string
  zIndex?: number
  disabled?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  teleported: true,
  appendTo: '',
  disabled: false,
  persistent: false,
})

const {
  controlled,
  id,
  open,
  trigger,
  onClose,
  onOpen,
  onShow,
  onHide,
  onBeforeShow,
  onBeforeHide,
} = inject(TOOLTIP_INJECTION_KEY, undefined)!

const contentRef = ref<any>(null)
const destroyed = ref(false)

const persistentRef = computed(() => {
  // For testing, we would always want the content to be rendered
  // to the DOM, so we need to return true here.
  if (process.env.NODE_ENV === 'test') {
    return true
  }
  return props.persistent
})

const shouldRender = computed(() => {
  return unref(persistentRef) ? true : unref(open)
})

const shouldShow = computed(() => {
  return props.disabled ? false : unref(open)
})


onBeforeUnmount(() => {
  destroyed.value = true
})

const onContentEnter = () => {
  onOpen()
}

const onContentLeave = () => {
  onClose()
}

const onBeforeEnter = () => {
  contentRef.value?.updatePopper?.()
  // onBeforeShow?.()
}


defineOptions({
  name: 'UiTooltipContent',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>

</style>
