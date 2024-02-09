import type {InstalmentTypes} from "#entities/instalment/types";
import useFetchWrap from "#shared/api/useFetchWrap";

const getAll = async () => {
  return await useFetchWrap<InstalmentTypes.All>({
    url: '/api/fake/instalment',
    fetchOptions: {
      method: 'get'
    }
  })
}

export const instalmentApi = {
  getAll,
}
