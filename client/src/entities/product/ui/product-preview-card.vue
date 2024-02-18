<template>
  <div class="product-preview-card">
    <nuxt-link to="#">

      <div class="product-preview-card__image" v-if="props.category?.image">
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
import { type ProductCatalogTypes } from "#entities/product";

type Props = {
  category: ProductCatalogTypes.ChildrenDetail
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.product-preview-card {
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  transition: box-shadow var(--animation-time) linear;
  width: 165px;
  height: 238px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
