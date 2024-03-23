<template>
  <div class="header-catalog">
    <div class="header-catalog__categories">
      <div class="header-catalog__categories-main">
        <div
          v-for="category in catalogData"
          :key="category.uuid"
          :class="['header-catalog__category', { active: isCategoryActive(category.uuid) }]"
          @mouseenter="onCategoryEnter(category)"
        >
          <ui-icon :name="category.iconName" />

          <span class="text-body-lg">
            {{ category.title }}
          </span>
        </div>
      </div>

      <div v-if="!emptySubcategory" class="header-catalog__subcategories">
        <div v-if="activeCategory">
          <div
            v-for="category in activeCategory.subCategories"
            :key="category.uuid"
            :class="['header-catalog__category', { active: activeSubcategory?.uuid === category.uuid }]"
            @mouseenter="onSubcategoryEnter(category)"
          >
            <ui-icon :name="category.iconName" />

            <span class="text-body-lg">
            {{ category.title }}
          </span>
          </div>

          <ui-button fill-style="text">
            View all
          </ui-button>
        </div>

        <div v-if="!!activeSubcategory" class="header-catalog__subcategory-previews">
          <product-preview-card v-for="category in activeSubcategory.children" :category="category" :key="category.uuid" />
        </div>
      </div>

      <div v-else class="header-catalog__subcategories">
        No content
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// DEBT: Перенести tooltip в открытие через hover под products.
import {useCatalog} from "../../../../entities/catalog";
import {UiButton, UiIcon} from "#shared/ui";
import {computed, ref} from "vue";
import {type ProductCatalogTypes, ProductPreviewCard} from "#entities/product";

const { catalogData } = useCatalog()

const activeCategory = ref<ProductCatalogTypes.One | undefined>(catalogData.value?.[0])
const activeSubcategory = ref<ProductCatalogTypes.One>()

const emptySubcategory = computed(() => !activeCategory.value || (activeCategory.value && !activeCategory.value.subCategories?.length))

const isCategoryActive = (categoryUuid: string) => {
  return activeCategory.value?.uuid === categoryUuid
}

const onSubcategoryEnter = (category?: ProductCatalogTypes.One) => {
  if (activeSubcategory.value) {
    activeSubcategory.value = undefined
  }
  activeSubcategory.value = category
}

const onCategoryEnter = (category: ProductCatalogTypes.One) => {
  activeCategory.value = category
  activeSubcategory.value = undefined
}
</script>

<style lang="scss" scoped>
.header-catalog {
  height: 406px;

  $root: &;

  &__categories {
   display: flex;
    height: 100%;
  }

  &__categories-main {
    width: 289px;
    min-width: 289px;
    border-right: 1px solid var(--color-grey-9e);
    margin-right: 16px;
  }

  &__subcategories {
    white-space: nowrap;
    display: flex;
  }

  &__category {
    display: flex;
    align-items: center;
    cursor: pointer;

    .ui-icon {
      margin-right: 20px;
      font-size: var(--font-size--icon-md);
    }

    span {
      transition: color var(--animation-time) linear;
    }

    &:hover,
    &.active {
      span {
        color: var(--color-primary);
      }
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__subcategory-previews {
    display: flex;
    gap: 16px;
    margin-left: 48px;
    align-items: center;
  }
}
</style>
