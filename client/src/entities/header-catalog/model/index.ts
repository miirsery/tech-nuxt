import {readonly, ref} from "vue";
import {headerCatalogApi, type HeaderCatalogTypes} from "#entities/header-catalog";

const catalogData = ref<HeaderCatalogTypes.All>()

export const useHeaderCatalog = () => {
  const setCatalogData = async (data: HeaderCatalogTypes.All) => {
    catalogData.value = data
  }

  const getCatalogData = async () => {
    const { data } = await headerCatalogApi.getAll()

    if (data.value) {
      await setCatalogData(data.value.data)
    }
  }

  return {
    getCatalogData,

    catalogData: readonly(catalogData),
  }
}
