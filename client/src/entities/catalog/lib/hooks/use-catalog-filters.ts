import {readonly, ref} from "vue";

export const useCatalogFilters = () => {
  const filters = useState('filters', () => [])

  const setFilter = () => {
    // ...
    console.log('filters')
  }

  const removeFilter = () => {
    // ...
  }

  return {
    filters: readonly(filters)
  }
}
