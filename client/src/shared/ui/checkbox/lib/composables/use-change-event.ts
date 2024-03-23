import { computed, getCurrentInstance, inject, nextTick, watch } from 'vue'
import type {CheckboxModel} from "#shared/ui/checkbox/lib/composables/use-checkbox-model";
import {checkboxGroupContextKey} from "#shared/ui/checkbox/constants";

// DEBT: Типизировать.
export const useCheckboxEvent = (
  props: any,
  {
    model,
  }: Pick<CheckboxModel, 'model'>
) => {
  const { emit } = getCurrentInstance()!

  function emitChangeEvent(
    checked: string | number | boolean,
    e: InputEvent | MouseEvent
  ) {
    emit('change', checked, e)
  }

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement

    emit('change', target.checked, e)
  }

  async function onClickRoot(e: MouseEvent) {
    await nextTick()

    emitChangeEvent(model.value, e)
  }



  return {
    handleChange,
    onClickRoot,
  }
}
