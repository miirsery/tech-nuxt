<template>
  <div class="header-catalog">
    <div class="header-catalog__categories">
      <div class="header-catalog__categories-main">
        <div
          v-for="category in catalogData"
          :key="category.uuid"
          class="header-catalog__category"
          @mouseenter="onCategoryEnter(category)"
        >
          <ui-icon :name="category.iconName" />

          <span class="text-body-lg">
            {{ category.title }}
          </span>
        </div>
      </div>

      <div v-if="!emptySubcategory" class="header-catalog__subcategories">
        <div v-for="category in activeCategory.subCategories" :key="category.uuid" class="header-catalog__category">
          <ui-icon :name="category.iconName" />

          <span class="text-body-lg">
            {{ category.title }}
          </span>
        </div>
      </div>

      <div v-else>
        No content
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {type HeaderCatalogTypes, useHeaderCatalog} from "#entities/header-catalog";
import {UiIcon} from "#shared/ui";
import {computed, ref} from "vue";

const { catalogData } = useHeaderCatalog()

const activeCategory = ref<HeaderCatalogTypes.One | undefined>(catalogData.value?.[0] ?? {})

const emptySubcategory = computed(() => !activeCategory.value || (activeCategory.value && !activeCategory.value.subCategories?.length))

const onCategoryEnter = (category: HeaderCatalogTypes.One) => {
  console.log(category)
  activeCategory.value = category

  console.log(activeCategory.value)
}
</script>

<style lang="scss" scoped>
.header-catalog {
  height: 406px;

  &__categories {
   display: flex;
  }

  &__categories-main {
    width: 289px;
    border-right: 1px solid var(--color-grey-9e);
  }

  &__category {
    display: flex;
    align-items: center;
  }
}
</style>
