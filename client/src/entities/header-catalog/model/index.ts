import {readonly, ref} from "vue";
import {headerCatalogApi, type HeaderCatalogTypes} from "#entities/header-catalog";

const catalogData = ref<HeaderCatalogTypes.All>()

export const useHeaderCatalog = () => {
  const getCatalogData = async () => {
    const { data } = await headerCatalogApi.getAll()

    if (data.value) {
      catalogData.value = data.value.data
    }
  }

  return {
    getCatalogData,

    catalogData,
  }
}
