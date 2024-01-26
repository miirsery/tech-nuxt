<template>
  <aside class="account-menu">
    <div class="account-menu__user">
      <ui-icon name="profile-circle" />

      <!-- DEBT: Узнать можно ли использовать h5 без уровней выше. Кажется, что нет.
           Насколько сематически верно делать так.
       -->
      <span class="h5">Jimmy smith</span>
    </div>
    <nav>
      <ul>
        <li v-for="accountRoute in accountChildrenRoutes" :key="accountRoute" :class="['account-menu__item', { active: route.name === accountRoute.name }]">
          <nuxt-link :to="{ name: accountRoute.name }">
            <ui-icon :name="accountRoute.iconName" />

            {{ accountRoute.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import {UiIcon} from "#shared/ui";
import {useRoute, useRouter} from "vue-router";
import {ROUTE_NAMES} from "#shared/constants";
import {computed} from "vue";

const route = useRoute()
const router = useRouter()

const ACCOUNT_ROUTE_NAMES = [
  ROUTE_NAMES.ACCOUNT_PERSONAL_DATA,
  ROUTE_NAMES.ACCOUNT_PAYMENT_AND_INSTALMENTS,
] as const

const accountChildrenRoutes = computed(() => {
  return ACCOUNT_ROUTE_NAMES.map((routeName) => {
    const route = router.resolve({ name: routeName })

    return {
      title: route.meta.title ?? 'Account',
      iconName: route.meta.iconName ?? 'user-edit',
      path: `account/${route.path}`,
      name: route.name,
      meta: route.meta,
    }
  })
})
</script>

<style lang="scss" scoped>
.account-menu {
  padding: 8px 0;
  width: 288px;
  background-color: var(--color-grey-f9);
  border-radius: 8px;
  margin-right: 24px;

  &__user {
    display: flex;
    align-items: center;
    padding: 2px 0 2px 8px;

    .ui-icon {
      font-size: 60px;
      color: var(--color-grey-b4);
      margin-right: 16px;
    }
  }

  &__item {
    position: relative;
    border-left: 2px solid transparent;

    .ui-icon {
      font-size: 24px;
      margin-right: 16px;
    }

    a {
      padding: 24px;
      display: flex;
      align-items: center;

      &::before {
        display: none;
      }
    }

    &.active {
      border-left: 2px solid var(--color-primary);

      a {
        color: var(--color-primary);

      }
    }
  }
}
</style>
