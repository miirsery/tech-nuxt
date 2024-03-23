<template>
  <div class="ui-checkbox-group" role="group">
    <!--     DEBT: Реализовать  -->
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {checkboxGroupContextKey} from "#shared/ui/checkbox/constants";

type Emits = {
  (e: 'update:modelValue', value: CheckboxValueType[]): void
  (e: 'change', value: CheckboxValueType[]): void
}

export type CheckboxValueType = string | number | boolean

export type CheckboxGroupValueType = {
  modelValue: CheckboxValueType[]
}

const props = defineProps<CheckboxGroupValueType>()
const emits = defineEmits<Emits>()

const modelValue = computed<CheckboxValueType[]>({
  get() {
    return props.modelValue
  },
  set(val: CheckboxValueType[]) {
    changeEvent(val)
  },
})

const changeEvent = async (value: CheckboxValueType[]) => {
  emits('update:modelValue', value)

  await nextTick()

  emits('change', value)
}

provide(checkboxGroupContextKey, {
  modelValue,
  changeEvent,
})

defineOptions({
  name: 'UiCheckboxGroup',
})
</script>

<style lang="scss" scoped>
.ui-checkbox-group {
  display: flex;
  flex-direction: column;

  :deep(.ui-checkbox) {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}
</style>
