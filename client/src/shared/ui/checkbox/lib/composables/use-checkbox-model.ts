import {checkboxGroupContextKey} from "#shared/ui/checkbox/constants";
import {isUndefined} from "#shared/lib/utils";
import {isArray} from "@vue/shared";

// DEBT: Типизировать
export const useCheckboxModel = (props: any) => {
  const selfModel = ref<unknown>(false)

  const { emit } = getCurrentInstance()!

  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)

  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value
    },
    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        checkboxGroup?.changeEvent?.(val)
      } else {
        emit('update:modelValue', val)

        selfModel.value = val
      }
    }
  })

  return {
    model,
    isGroup,
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
