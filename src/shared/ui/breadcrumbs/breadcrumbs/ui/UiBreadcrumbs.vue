<template>
  <nav
    aria-label="Breadcrumb"
    class="ui-breadcrumbs"
    role="navigation"
  >
    <ul ref="breadcrumbsRef" class="ui-breadcrumbs__list">
      <slot />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import {type Component, computed, onMounted, ref} from "vue"
import {useRoute} from "vue-router";
import {ROUTE_NAMES} from "#shared/constants";

type Props = {
  separator?: string | Component
}

const breadcrumbsRef = ref<HTMLElement>()

onMounted(() => {
  const items = breadcrumbsRef.value!.querySelectorAll('.ui-breadcrumbs-item')

  if (items && items.length) {
    items[items.length - 1].setAttribute('aria-current', 'page')
  }
})

defineOptions({
  name: 'UiBreadcrumbs'
})
</script>

<style lang="scss" scoped>
.ui-breadcrumbs {
  &__list {
    display: flex;
    align-items: center;
  }

  :deep(.ui-breadcrumbs-item) {
    &:last-child {
      cursor: default;

      .ui-breadcrumbs-item__separator {
        display: none;
      }
    }
  }
}
</style>
