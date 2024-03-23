import {computed, inject, ref} from "vue";
import {collapseContextKey} from "#shared/ui/collapse/constants";
import {useIdInjection} from "#shared/lib/hooks/use-id/useId";

export const useCollapseItem = (props: any) => {
  const collapse = inject(collapseContextKey)

  const focusing = ref(false)
  const isClick = ref(false)
  const idInjection = useIdInjection()

  const id = computed(() => idInjection.current++)
  const name = computed(() => {
    return (
      props.name ?? `'ui-collapse-item'-id-${idInjection.prefix}-${id.value}`
    )
  })
  const isActive = computed(() =>
    collapse?.activeNames.value.includes(name.value)
  )

  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true
      } else {
        isClick.value = false
      }
    }, 50)
  }

  const handleHeaderClick = () => {
    if (props.disabled) return

    collapse?.handleItemClick(name.value)

    focusing.value = false
    isClick.value = true
  }

  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
  }
}
