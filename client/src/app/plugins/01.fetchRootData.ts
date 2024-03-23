import {useCatalog} from "#entities/catalog";

export default defineNuxtPlugin(async () => {
  const { getCatalogData } = useCatalog()

  await getCatalogData()
})
