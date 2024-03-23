
// DEBT: Типизировать.
import type {ComponentInternalInstance} from "vue";
import type {CheckboxModel} from "#shared/ui/checkbox/lib/composables/use-checkbox-model";
import {checkboxGroupContextKey} from "#shared/ui/checkbox/constants";
import {isBoolean, isPropAbsent} from "#shared/lib/utils";
import {isArray, isObject} from "@vue/shared";

export const useCheckboxStatus = (
  props: any,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isFocused = ref(false)

  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value
    }

    return props.label
  })
  const isChecked = computed<boolean>(() => {
    const value = model.value

    if (isBoolean(value)) {
      return value
    } else if (isArray(value)) {
      return value.map(toRaw).includes(actualValue.value)
    } else {
      return !!value
    }
  })

  return {
    isChecked,
    isFocused,
    actualValue,
  }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>
