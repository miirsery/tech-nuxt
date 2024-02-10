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
// DEBT: Исправить Hydration children mismatch on.
// Доработать пагинацию с tag: button | NuxtLink
import {type Component, onMounted, ref} from "vue"
import {NuxtLink} from "#components";
import {useUiBreadcrumbs} from "#shared/ui/breadcrumbs/model/useUiBreadcrumbs";

type Props = {
  separator?: string | Component
  tag?: 'button' | typeof NuxtLink
}

const props = withDefaults(defineProps<Props>(), {
  tag: NuxtLink,
})

const { buildProps } = useUiBreadcrumbs()

const breadcrumbsRef = ref<HTMLElement>()

onMounted(() => {
  buildProps(props)

  const items = breadcrumbsRef.value!.querySelectorAll('.tooltip-breadcrumbs-item')

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
