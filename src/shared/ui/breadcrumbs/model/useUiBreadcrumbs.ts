import {type Component, ref, shallowRef} from "vue";
import {NuxtLink} from "#components";

type UiBreadcrumbsPropsType = {
  separator?: string | Component
  tag?: 'button' | typeof NuxtLink
}

const context = shallowRef<UiBreadcrumbsPropsType>({
  tag: NuxtLink,
})

export const useUiBreadcrumbs = () => {
  const buildProps = (props: UiBreadcrumbsPropsType) =>  {
    context.value = props
  }

  return {
    context,
    buildProps,
  }
}
