<template>
  <nav class="header-profile">
    <ul>
      <li class="header-profile__info">
        <nuxt-link :to="{ name: ROUTE_NAMES.ACCOUNT_PERSONAL_DATA }" class="header-profile__link">
          <ui-icon name="profile" class="mr-16" />

          <div class="header-profile__info-data">
            <p class="text-body-lg color-primary">Jimmy Smith</p>
            <a href="mailto:Jimmy.smith1996@gmail.com" class="text-body-sm mt-8 d-block">Jimmy.smith1996@gmail.com</a>
          </div>
        </nuxt-link>
      </li>

      <li class="header-profile__route">
        <nuxt-link to="#" class="header-profile__link">
          <ui-icon name="bag-2" />

          <p class="ml-16">Orders</p>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="#" class="header-profile__link">
          <ui-icon name="heart" />

          <p class="ml-16">Wish List</p>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link :to="{ name: ROUTE_NAMES.ACCOUNT_PAYMENT_AND_INSTALMENTS }" class="header-profile__link">
          <ui-icon name="dollar-circle" />

          <p class="ml-16">Payments</p>
        </nuxt-link>
      </li>

      <li>
        <button type="button" class="header-profile__logout">
          <ui-icon name="logout" />

          <p class="ml-16">Log out</p>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {UiIcon} from "#shared/ui";
import {ROUTE_NAMES} from "#shared/constants";
</script>

<style lang="scss" scoped>
.header-profile {
  background-color: var(--color-white);
  width: 288px;

  .ui-icon {
    font-size: var(--font-size--icon-md);
  }

  ul {
    padding: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  &__info {
    display: flex;
  }

  &__link,
  &__logout {
    display: flex;
    align-items: center;
  }
}
</style>
