<template>
  <slot />
</template>

<script setup lang="ts">

import {inject} from "vue";
import {POPPER_INJECTION_KEY} from "#shared/ui/popper/constants";
import {useForwardRef} from "#shared/lib/hooks";

const { role, triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!

useForwardRef(triggerRef)

defineOptions({
  name: 'UiPopperTrigger',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>

</style>
