import type {CommonTypes} from "#shared/types";
import {readonly, ref} from "vue";

const breadcrumbsData = ref<CommonTypes.BreadcrumbsType>([])

const defineBreadcrumbs = (breadcrumbs: CommonTypes.BreadcrumbsType) => {
  breadcrumbsData.value = breadcrumbs
}

export const useBreadcrumbs = () => {
  return {
    breadcrumbs: readonly(breadcrumbsData),

    defineBreadcrumbs,
  }
}
