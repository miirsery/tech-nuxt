<template>
  <div class="header-category-card">
    <nuxt-link to="#">

      <div class="header-category-card__image" v-if="props.category?.image">
        <nuxt-img :src="props.category.image" />
      </div>
      <div v-else>
        Image
      </div>

      <p class="mt-16">{{ props.category.title }}</p>
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
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  transition: box-shadow var(--animation-time) linear;

  &:hover {
    box-shadow: $box-shadow-1;
  }

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
