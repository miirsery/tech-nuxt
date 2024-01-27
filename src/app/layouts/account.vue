<template>
  <div class="container">
    <div class="account">
      <account-menu />

      <div class="account__page">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountMenu from "pages/account/ui/account-menu/AccountMenu.vue";
</script>

<style lang="scss" scoped>
.account {
  display: flex;

  &__page {
    width: 100%;
  }
}
</style>
