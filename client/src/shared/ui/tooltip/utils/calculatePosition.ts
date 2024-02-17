import type {Ref} from "vue";

export const calculatePosition = (tooltipTriggerRef: Ref<HTMLDivElement | undefined>, contentRef: Ref<HTMLDivElement | undefined>, options: any) => {
  if (process.server || !tooltipTriggerRef?.value || !contentRef.value) return

  const triggerNode = tooltipTriggerRef.value
  const triggerNodeClientRect = triggerNode.getBoundingClientRect()

  const contentNode = contentRef.value

  contentNode.style.bottom = `-${triggerNodeClientRect.height + options.offset[1]}px`
  contentNode.style.left = `${triggerNodeClientRect.height + options.offset[0]}px`
  contentNode.style.zIndex = options.zIndex
}
