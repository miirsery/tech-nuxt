import useFetchWrap from "#shared/api/useFetchWrap";
import { type HeaderCatalogTypes } from "#entities/header-catalog";

const getAll = async () => {
  return await useFetchWrap<HeaderCatalogTypes.Response, HeaderCatalogTypes.All>({
    url: '/api/fake/header-catalog',
    fetchOptions: {
      method: 'get'
    },
  })
}

export const headerCatalogApi = {
  getAll,
}
