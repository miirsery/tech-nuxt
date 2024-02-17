<template>
  <ui-popper ref="popperRef">
<!--    <ui-tooltip-trigger-->
<!--      :trigger="props.trigger"-->
<!--      @mouseenter="onMouseEnter"-->
<!--      @mouseleav="onMouseLeave"-->
<!--    >-->
<!--      <slot v-if="$slots.default" />-->
<!--    </ui-tooltip-trigger>-->
    <div
      ref="tooltipTriggerRef"
      class="ui-tooltip-trigger"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @click="handleContentOpen"
      v-on-click-outside="handleOutsideClick"
    >
      <slot v-if="$slots.default" />
    </div>


<!--    <ui-tooltip-content-->
<!--      :append-to="props.appendTo"-->
<!--      :z-index="props.zIndex"-->
<!--    >-->
<!--      <slot name="content" />-->
<!--    </ui-tooltip-content>-->

    <div
      v-if="isContentVisible"
      class="ui-tooltip-content"
      ref="contentRef"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <slot name="content" />
    </div>

    <ui-popper-arrow />
  </ui-popper>
</template>

<script setup lang="ts">
import {UiPopper, UiTooltipContent, UiTooltipTrigger, UiPopperArrow} from "#shared/ui";
import {nextTick, provide, readonly, ref, toRef} from "vue";
import {TOOLTIP_INJECTION_KEY} from "#shared/ui/tooltip/constants";
import {useDelayedToggle, useId} from "#shared/lib/hooks";
import {calculatePosition} from "#shared/ui/tooltip/utils/calculatePosition";
import { vOnClickOutside } from '@vueuse/components'

type Props = {
  trigger?: 'hover' | 'click'
  appendTo?: HTMLElement | string
  zIndex?: number
  offset?: [number, number]
}

type Emits = {
  (e: 'onHover', value: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  trigger: 'hover',
  zIndex: 1000,
  offset: () => [0, 0],
})

const emits = defineEmits<Emits>()

const tooltipTriggerRef = ref<HTMLDivElement>()
const contentRef = ref<HTMLDivElement>()

const timerId = ref<number>()

const isShow = ref(false)
const isHide = ref(true)
const isContentVisible = ref(false)

const id = useId()

// @ts-ignore
const { onOpen, onClose } = useDelayedToggle({
  // @ts-ignore
  showAfter: toRef(props, 'showAfter'), // @ts-ignore
  hideAfter: toRef(props, 'hideAfter'),
  // @ts-ignore
  autoClose: toRef(props, 'autoClose'),
  // @ts-ignore
  open: isShow.value,
  // @ts-ignore
  close: isHide.value,
})

const popperRef = ref()
const isOpen = ref(false)

const handleContentOpen = () => {
  isContentVisible.value = true

  nextTick(() => {
    calculatePosition(tooltipTriggerRef, contentRef, {
      zIndex: props.zIndex,
      offset: props.offset,
    })
  })
}

const handleOutsideClick = (event: MouseEvent) => {
  if (props.trigger === 'hover') return

  const target = event.target as HTMLElement;

  if (!tooltipTriggerRef.value?.contains(target) || !contentRef.value?.contains(target)) {
    isContentVisible.value = false;
  }
}

const onMouseEnter = () => {
  window.clearTimeout(timerId.value)

  if (props.trigger !== 'hover') return

  isContentVisible.value = true

  emits('onHover', isContentVisible.value)

  nextTick(() => {
    calculatePosition(tooltipTriggerRef, contentRef, {
      zIndex: props.zIndex,
      offset: props.offset,
    })
  })
}

const onMouseLeave = () => {
  if (props.trigger !== 'hover') return

   timerId.value = window.setTimeout(() => {
    isContentVisible.value = false

    emits('onHover', isContentVisible.value)
  }, 500)
}

// @ts-ignore
provide(TOOLTIP_INJECTION_KEY, {
  id,
  open: readonly(isOpen),
  trigger: toRef(props, 'trigger'),
  onOpen: (event?: Event) => {
    onOpen(event)
  },
  onClose: (event?: Event) => {
    onClose(event)
  },
})

defineOptions({
  name: 'UiTooltip',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>
.ui-tooltip-content {
  position: absolute;
  background-color: var(--color-white);
  border-radius: 4px;
  padding: 12px;
  width: auto;
}
</style>
