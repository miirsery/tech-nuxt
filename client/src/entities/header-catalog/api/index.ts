import useFetchWrap from "#shared/api/useFetchWrap";
import type {HeaderCatalogTypes} from "#entities/header-catalog";

const getAll = async () => {
  return await useFetchWrap<HeaderCatalogTypes.All>({
    url: '/api/fake/header-catalog',
    fetchOptions: {
      method: 'get'
    }
  })
}

export const headerCatalogApi = {
  getAll,
}
