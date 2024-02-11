<template>
  <div class="header-catalog">
    <div class="header-catalog__categories">
      <div class="header-catalog__categories-main">
        <div class="header-catalog__subcategory"></div>
      </div>

      <div class="header-catalog__subcategories">
        <div class="header-catalog__subcategory"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useHeaderCatalog} from "#entities/header-catalog";

const { catalogData } = useHeaderCatalog()
</script>

<style lang="scss" scoped>

</style>
