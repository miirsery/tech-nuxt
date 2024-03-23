import type {ProductCatalogTypes} from "#entities/product";
import {headerCatalogApi} from "#entities/catalog";

export const useCatalog = () => {
  const catalogData = useState<ProductCatalogTypes.All | undefined>('catalogData', () => undefined)

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
