<template>
  <client-only>
    <slot />
  </client-only>
</template>

<script setup lang="ts">/**
 * @description: Базовый компонент, который используется в tooltip, popover, dropdown.
 */
import {provide, ref} from "vue";
import {type ElPopperInjectionContext, POPPER_INJECTION_KEY} from "#shared/ui/popper/constants";

type Props = {
  offset?: [number, number]
  showArrow?: boolean
  placement?:
    'left-start'
    | 'left'
    | 'left-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
  appendTo?: HTMLElement | string
  teleported?: true
}

const triggerRef = ref<HTMLElement>()

const props = withDefaults(defineProps<Props>(), {
  offset: () => [0, 0],
  showArrow: false,
  placement: 'bottom'
})

provide(POPPER_INJECTION_KEY, {
  triggerRef,
} as ElPopperInjectionContext)

defineOptions({
  name: 'UiPopper',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>

</style>
