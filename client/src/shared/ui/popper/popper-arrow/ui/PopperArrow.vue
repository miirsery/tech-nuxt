<template>
  <span
    ref="arrowRef"
    class="popper-arrow"
    data-popper-arrow
  />
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, watch } from 'vue'
import {POPPER_CONTENT_INJECTION_KEY} from "#shared/ui/popper/constants";

type Props = {
  offset: [number, number]
}

const props = withDefaults(defineProps<Props>(), {
  offset: () => [0, 5]
})

const r = inject(
  POPPER_CONTENT_INJECTION_KEY,
  undefined
)!

// const { arrowOffset, arrowRef, arrowStyle } = inject(
//   POPPER_CONTENT_INJECTION_KEY,
//   undefined
// )!

// watch(
//   () => props.offset,
//   (val) => {
//     arrowOffset.value = val
//   }
// )
// onBeforeUnmount(() => {
//   arrowRef.value = undefined
// })

defineOptions({
  name: 'UiPopperArrow',
  inheritAttrs: false,
})

// defineExpose({
//   /**
//    * @description Arrow element
//    */
//   arrowRef,
// })
</script>
