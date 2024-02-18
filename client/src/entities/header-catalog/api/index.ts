import useFetchWrap from "#shared/api/useFetchWrap";
import { type ProductCatalogTypes } from "#entities/header-catalog";

const getAll = async () => {
  return await useFetchWrap<ProductCatalogTypes.All>({
    url: '/api/fake/header-catalog',
    fetchOptions: {
      method: 'get'
    },
  })
}

export const headerCatalogApi = {
  getAll,
}
