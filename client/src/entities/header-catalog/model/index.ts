import {readonly, ref} from "vue";
import {headerCatalogApi, type ProductCatalogTypes} from "#entities/header-catalog";

const catalogData = ref<ProductCatalogTypes.All>()

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
