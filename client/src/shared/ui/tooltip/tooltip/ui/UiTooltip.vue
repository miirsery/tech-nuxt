<template>
  <ui-popper ref="popperRef">
    <ui-tooltip-trigger
      :trigger="props.trigger"
    >
      <slot v-if="$slots.default" />
    </ui-tooltip-trigger>

    <ui-tooltip-content>
      <slot name="content" />
    </ui-tooltip-content>

    <ui-popper-arrow />
  </ui-popper>
</template>

<script setup lang="ts">
import {UiPopper, UiTooltipContent, UiTooltipTrigger, UiPopperArrow} from "#shared/ui";
import {ref} from "vue";

type Props = {
  trigger?: 'hover' | 'click'
}

const props = withDefaults(defineProps<Props>(), {
  trigger: 'hover',
})

const popperRef = ref()

defineOptions({
  name: 'UiTooltip',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>

</style>
