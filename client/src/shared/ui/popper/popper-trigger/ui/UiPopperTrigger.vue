<template>
  <div class="trigger" v-on="$attrs"
       @mouseenter="onMouseEnter"
       @mouseleav="onMouseLeave"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">

import {inject} from "vue";
import {POPPER_INJECTION_KEY} from "#shared/ui/popper/constants";
import {useForwardRef} from "#shared/lib/hooks";
import {UiTooltipTrigger} from "#shared/ui";

const { role, triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!

useForwardRef(triggerRef)

const onMouseEnter = () => {
  console.log('enter')
}

const onMouseLeave = () => {
  console.log('leave')
}

defineOptions({
  name: 'UiPopperTrigger',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>

</style>
