<template>
  <div ref="contentRef">
    <ui-focus-trap>
      <slot />
    </ui-focus-trap>
  </div>
</template>

<script setup lang="ts">
import {provide, ref} from "vue";
import {UiFocusTrap} from "#shared/ui";
import {POPPER_CONTENT_INJECTION_KEY} from "#shared/ui/popper/constants";

const contentRef = ref()

const arrowOffset = ref<number>()

provide(POPPER_CONTENT_INJECTION_KEY, {
  arrowOffset,
  arrowRef: undefined,
  arrowStyle: undefined
})

defineOptions({
  name: 'UiPopperContent',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>

</style>
