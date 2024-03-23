<template>
  <div class="ui-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import {useCollapse} from "#shared/ui/collapse/lib/composables";

type Props = {
  accordion?: boolean
}

type Emits = {
  (e: 'change', activeNames: Array<string> | string): void
}

const props = withDefaults(defineProps<Props>(), {
  accordion: false,
})
const emits = defineEmits<Emits>()
const modelValue = defineModel('modelValue', {
  type: [Array<string>, String] as PropType<Array<string> | string>,
  default: () => [],
})

const { activeNames, setActiveNames } = useCollapse(props, emits)

defineExpose({
  activeNames,
  setActiveNames,
})

defineOptions({
  name: 'UiCollapse',
})
</script>

<style lang="scss" scoped>
.ui-collapse {
}
</style>
