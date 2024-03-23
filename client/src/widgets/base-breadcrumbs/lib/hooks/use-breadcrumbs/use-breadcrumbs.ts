import type {CommonTypes} from "#shared/types";
import {readonly, ref} from "vue";

export const useBreadcrumbs = () => {
  const breadcrumbsData = useState<CommonTypes.BreadcrumbsType>('breadcrumbsData', () => [])

  const defineBreadcrumbs = (breadcrumbs: CommonTypes.BreadcrumbsType) => {
    breadcrumbsData.value = breadcrumbs
  }

  return {
    breadcrumbs: readonly(breadcrumbsData),

    defineBreadcrumbs,
  }
}
