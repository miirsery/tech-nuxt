import type {Ref} from "vue";

// FIXME: Добавить плавное появление.
export const darkening = (isHovering = false, headerRef?: Ref<HTMLDivElement | undefined>) => {
  if (process.server || !headerRef?.value) return

  const headerClientRect = headerRef.value?.getBoundingClientRect()

  const darkBackgroundNode = document.createElement('div')

  darkBackgroundNode.setAttribute('id', 'dark-background')
  darkBackgroundNode.style.position = 'fixed'
  darkBackgroundNode.style.left = '0px'
  darkBackgroundNode.style.right = '0px'
  darkBackgroundNode.style.bottom = '0px'
  darkBackgroundNode.style.top = `${headerClientRect.height}px`
  darkBackgroundNode.style.position = 'absolute'
  darkBackgroundNode.style.backgroundColor = 'var(--color-dark-60)'

  const darkBackgroundNodeInDom = document.getElementById('dark-background')

  if (isHovering) {
    if (!darkBackgroundNodeInDom) {
      document.body.appendChild(darkBackgroundNode)
    }
  } else (
    darkBackgroundNodeInDom?.remove()
  )
}
