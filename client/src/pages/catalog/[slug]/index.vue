<template>
  <div class="category-page">
    <div class="container">
      <catalog-navigation />

      <div class="category-page__filter-chips">
        <ui-chip v-for="filter in filters" :key="filter.uuid" closable>
          {{ filter.title }}
        </ui-chip>
      </div>

      <div class="category-page__content">
        <filters-menu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatalogNavigation from "pages/catalog/[slug]/ui/CatalogNavigation.vue";
import FiltersMenu from "pages/catalog/[slug]/ui/FiltersMenu.vue";
import {useBreadcrumbs} from "#widgets/base-breadcrumbs";
import {UiChip} from "#shared/ui";
import {ref} from "vue";
import {useSeoMeta} from "unhead";

const filters = ref([
  {
    title: 'Silver',
    uuid: 'qwert-1234-qwetr',
  }
])
const title = ref<string>('Laptops')
const description = ref<string>('')

const { defineBreadcrumbs } = useBreadcrumbs()

defineBreadcrumbs([
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Catalog',
    link: '/catalog',
  },
  {
    title: 'Laptop',
  }
])

useSeoMeta({
  title,
  description,
})
</script>

<style lang="scss" scoped>
.category-page {
  &__filter-chips {
    margin-top: 40px;
  }

  &__content {
    margin-top: 40px;
    display: flex;
  }
}
</style>
