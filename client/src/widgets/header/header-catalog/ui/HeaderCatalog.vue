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
          <header-category-card v-for="category in activeSubcategory.children" :category="category" :key="category.uuid" />
        </div>
      </div>

      <div v-else class="header-catalog__subcategories">
        No content
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {type HeaderCatalogTypes, useHeaderCatalog} from "#entities/header-catalog";
import {UiButton, UiIcon} from "#shared/ui";
import {computed, ref} from "vue";
import HeaderCategoryCard from "#widgets/header/header-category-card/ui/HeaderCategoryCard.vue";

const { catalogData } = useHeaderCatalog()

const activeCategory = ref<HeaderCatalogTypes.One | undefined>(catalogData.value?.[0])
const activeSubcategory = ref<HeaderCatalogTypes.One>()

const emptySubcategory = computed(() => !activeCategory.value || (activeCategory.value && !activeCategory.value.subCategories?.length))

const isCategoryActive = (categoryUuid: string) => {
  return activeCategory.value?.uuid === categoryUuid
}

const onSubcategoryEnter = (category?: HeaderCatalogTypes.One) => {
  if (activeSubcategory.value) {
    activeSubcategory.value = undefined
  }
  activeSubcategory.value = category
}

const onCategoryEnter = (category: HeaderCatalogTypes.One) => {
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
