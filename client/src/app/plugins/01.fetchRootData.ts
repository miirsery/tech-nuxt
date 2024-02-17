import {defineNuxtPlugin} from "#imports";
import {useHeaderCatalog} from "#entities/header-catalog";

export default defineNuxtPlugin(async () => {
  const { getCatalogData } = useHeaderCatalog()

  await getCatalogData()
})
