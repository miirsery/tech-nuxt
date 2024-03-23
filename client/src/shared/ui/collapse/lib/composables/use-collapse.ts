import {provide, ref, type SetupContext, watch} from "vue";
import {collapseContextKey} from "#shared/ui/collapse/constants";
import {ensureArray} from "#shared/lib/utils";
import type {CollapseActiveNameType} from "#shared/ui/collapse/types";

export const useCollapse = (
  props: any,
  emit: any
) => {
  const activeNames = ref(ensureArray(props.modelValue))

  const setActiveNames = (_activeNames: CollapseActiveNameType[]) => {
    activeNames.value = _activeNames

    const value = props.accordion ? activeNames.value[0] : activeNames.value

    emit('update:modelValue', value)
    emit('change', value)
  }

  const handleItemClick = (name: CollapseActiveNameType) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? '' : name])
    } else {
      const _activeNames = [...activeNames.value]
      const index = _activeNames.indexOf(name)

      if (index > -1) {
        _activeNames.splice(index, 1)
      } else {
        _activeNames.push(name)
      }
      setActiveNames(_activeNames)
    }
  }

  watch(
    () => props.modelValue,
    () => (activeNames.value = ensureArray(props.modelValue)),
    { deep: true }
  )

  provide(collapseContextKey, {
    activeNames,
    handleItemClick,
  })
  return {
    activeNames,
    setActiveNames,
  }
}
