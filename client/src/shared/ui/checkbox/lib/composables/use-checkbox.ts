
// DEBT: Добавить типизацию
import type {ComponentInternalInstance} from "vue";
import {useCheckboxModel} from "#shared/ui/checkbox/lib/composables/use-checkbox-model";
import {useCheckboxStatus} from "#shared/ui/checkbox/lib/composables/use-checkbox-status";
import {useCheckboxEvent} from "#shared/ui/checkbox/lib/composables/use-change-event";
import {isArray} from "@vue/shared";

export const useCheckbox = (
  props: any,
  slots: ComponentInternalInstance['slots']
) => {
  const { model, isGroup } = useCheckboxModel(props)

  const {
    isFocused,
    isChecked,
    actualValue,
  } = useCheckboxStatus(props, slots, { model })

  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
  })

  const setStoreValue = () => {
    function addToStore() {
      if (isArray(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value)
      } else {
        model.value = props.trueValue || props.trueLabel || true
      }
    }
    props.checked && addToStore()
  }

  setStoreValue()

  return {
    isChecked,
    isFocused,
    model,
    actualValue,
    handleChange,
    onClickRoot,
  }
}
