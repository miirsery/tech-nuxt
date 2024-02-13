<template>
  <div class="header-category-card">
    <nuxt-link to="#">

      <div class="header-category-card__image" v-if="props.category?.image">
        <nuxt-img :src="props.category.image" />
      </div>
      <div v-else>
        Image
      </div>

      <p>{{ props.category.title }}</p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type {HeaderCatalogTypes} from "#entities/header-catalog";

type Props = {
  category: HeaderCatalogTypes.ChildrenDetail
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.header-category-card {
  a {
    &::before {
      display: none;
    }
  }

  &__image {
    width: 136px;
    height: 187px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
