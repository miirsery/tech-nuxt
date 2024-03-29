<template>
  <header ref="headerRef" class="ui-header">
    <!--  DEBT: Добавить прилипающий header  -->
    <div class="container">
      <div class="ui-header__inner">
        <client-only>
          <template #fallback>
            <ui-skeleton :style="{ width: '56px', height: '63px' }" />
          </template>

          <ui-tooltip @on-hover="onHover" :offset="[0, 383]">
            <nuxt-link class="ui-header__logo" :to="{ name: ROUTE_NAMES.MAIN }">
              <ui-icon name="logo" />
            </nuxt-link>

            <template #content>
              <header-catalog />
            </template>
          </ui-tooltip>
        </client-only>
        <nav>
          <ul class="ui-header__links">
            <li class="ui-header__link">
              <nuxt-link :to="{ name: ROUTE_NAMES.MAIN }">
                Home
              </nuxt-link>
            </li>
            <li class="ui-header__link">
              <nuxt-link :to="{ name: ROUTE_NAMES.PRODUCTS }">
                Products
              </nuxt-link>
            </li>
  <!--  DEBT: Ссылки скрыты из-за того, что данных страниц нет | START-->
  <!--          <li class="ui-header__link">-->
  <!--            <nuxt-link :to="{ name: ROUTE_NAMES.BLOG }">-->
  <!--              Blog-->
  <!--            </nuxt-link>-->
  <!--          </li>-->
  <!--          <li class="ui-header__link">-->
  <!--            <nuxt-link :to="{ name: ROUTE_NAMES.FAQ }">-->
  <!--              FAQ-->
  <!--            </nuxt-link>-->
  <!--          </li>-->
  <!--          <li class="ui-header__link">-->
  <!--            <nuxt-link :to="{ name: ROUTE_NAMES.CONTACT_US }">-->
  <!--              Contact Us-->
  <!--            </nuxt-link>-->
  <!--          </li>-->
  <!--  DEBT: Ссылки скрыты из-за того, что данных страниц нет | END-->
          </ul>
        </nav>

        <nav class="ui-header__buttons">
          <button type="button" @click="isSearchDialogVisible = true">
            <ui-icon name="search-normal" />
          </button>

          <!-- DEBT: Добавить вызов компонента корзины -->
          <button type="button">
            <ui-icon name="bag" />
          </button>

          <button v-if="isAuthorized" type="button" @click="emits('open-auth')">
            <ui-icon name="profile" />
          </button>


          <ui-tooltip v-else @on-hover="onHover" :offset="[-313, 299]">
            <ui-icon name="profile" />

            <template #content>
              <header-profile />
            </template>
          </ui-tooltip>
        </nav>
      </div>
    </div>

    <header-search v-model:visible="isSearchDialogVisible" />
  </header>
</template>
<script setup lang="ts">
import {UiDialog, UiIcon, UiSkeleton, UiTooltip} from "#shared/ui";
import {ROUTE_NAMES} from "#shared/constants";
import {ref, watch} from "vue";
import {darkening} from "#widgets/header/utils/darkening";
import HeaderCatalog from "#widgets/header/header-catalog/ui/HeaderCatalog.vue";
import HeaderProfile from "#widgets/header/header-profile/ui/HeaderProfile.vue";
import HeaderSearch from "#widgets/header/header-search/ui/HeaderSearch.vue";

type Emits = {
  (event: 'open-auth'): void
}

const emits = defineEmits<Emits>()

const headerRef = ref<HTMLDivElement>()
const isAuthorized = ref(false)
const isSearchDialogVisible = ref(false)

const onHover = (value: boolean) => {
  darkening(value, headerRef)
}
</script>

<style lang="scss" scoped>
.ui-header {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background:
      linear-gradient(
        147.38deg,
        var(--color-primary-30) 60.98%,
        var(--color-primary-70) 81.93%,
        var(--color-primary-30) 99.45%),
        linear-gradient(0deg, var(--color-white), var(--color-white)
      );
  }

  .ui-icon--logo {
    width: 56px;
    height: 63px;
  }

  &__inner {
    padding: 18px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    &::before {
      display: none;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    column-gap: 48px;
  }

  &__link {
    :deep(.router-link-active) {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(
            147.38deg,
            var(--color-primary-30) 0,
            var(--color-primary-70) 50.93%,
            var(--color-primary-30) 100%,
        );
        border-image-slice: 1;
        width: 100% !important; // Перекрывает width в ui-header
        transition: width var(--animation-time) linear;
      }
    }

    a {
      font-size: var(--font-size-body-md);
      font-weight: 300;
      padding: 8px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(
            147.38deg,
            var(--color-primary-30) 0,
            var(--color-primary-70) 50.93%,
            var(--color-primary-30) 100%,
        );
        border-image-slice: 1;
        width: 0;
        transition: width var(--animation-time) linear;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    column-gap: 8px;

    button {
      padding: 8px;
    }

    .ui-icon {
      font-size: var(--font-size--icon-md);
    }
  }

  :deep(.ui-tooltip-content) {
    border-radius: 0 0 8px 8px;
  }

  :deep(.ui-dialog-content) {
    padding: 32px 48px 60px;
  }
}
</style>
