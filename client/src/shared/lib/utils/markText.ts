type MarkTextOptionsType = {
  repString: string
  fullString: string
  tag?: 'strong' | 'span'
  options?: {
    class?: HTMLElement['className']
    style?: HTMLElement['style']
  }
}

export const markText = (params: MarkTextOptionsType) => {
  const {
    repString,
    fullString,
    tag = 'strong',
    options,
  } = params

  const regex = new RegExp(repString, 'gi')

  return fullString.replace(regex, (match) => `<${tag} class="${options?.class}">${match}</${tag}>`)
}
