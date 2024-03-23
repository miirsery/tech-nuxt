<template>
  <div class="catalog-navigation">
    <nav>
      <ul class="catalog-navigation__menu">
        <li v-for="category in catalogData" :key="category.uuid">
          <nuxt-link class="catalog-navigation__link" :to="{ name: ROUTE_NAMES.CATEGORY, params: { slug: category.slug } }">
            <ui-icon :name="category.iconName" />

            <p>
              {{ category.shortTitle ?? category.title }}
            </p>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {useCatalog} from "#entities/catalog";
import {ROUTE_NAMES} from "#shared/constants";
import {UiIcon} from "#shared/ui";

const { catalogData } = useCatalog()
</script>

<style lang="scss" scoped>
.catalog-navigation {
  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }

  &__link {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 8px;

    &.router-link-active {
      @include activeRouteColor();

      &::before {
        border: none;
        background-color: var(--color-primary);
        height: 3px;
      }
    }

    .ui-icon {
      margin-bottom: 16px;
      font-size: 46px;
    }
  }
}
</style>
