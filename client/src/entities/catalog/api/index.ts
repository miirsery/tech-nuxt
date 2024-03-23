import useFetchWrap from "#shared/api/use-fetch-wrap";
import type {ProductCatalogTypes} from "#entities/product";

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
