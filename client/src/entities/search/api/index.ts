import useFetchWrap from "#shared/api/useFetchWrap";

const searchProducts = async (query: string) => {
  return await useFetchWrap({
    url: 'https://jsonplaceholder.typicode.com/todos/',
    fetchOptions: {
      method: 'get',
      query: {
        query,
      }
    }
  })
}

export const searchApi = {
  searchProducts,
}
