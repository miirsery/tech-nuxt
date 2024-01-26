<template>
  <li :class="classes">
    <component :is="context.tag" nuxt-link v-if="props.to" :to="props.to" class="ui-breadcrumbs-item__link" role="link">
      <span class="ui-breadcrumbs-item__text">
        <slot />
      </span>
    </component>

    <span v-else class="ui-breadcrumbs-item__text">
      <slot />
    </span>

    <div class="ui-breadcrumbs-item__separator">
      <ui-icon name="arrow-down" />
    </div>
  </li>
</template>

<script lang="ts" setup>
import type {RouteLocationRaw} from "#vue-router";
import {computed, onMounted, ref} from "vue";
import {UiIcon} from "#shared/ui";
import {useUiBreadcrumbs} from "#shared/ui/breadcrumbs/model/useUiBreadcrumbs";

type Props = {
  to?: RouteLocationRaw
}

const props = defineProps<Props>()

const { context } = useUiBreadcrumbs()

const classes = computed(() => ['ui-breadcrumbs-item', { 'with-link': !!props.to }])

defineOptions({
  name: 'UiBreadcrumbsItem'
})
</script>

<style lang="scss" scoped>
.ui-breadcrumbs-item {
  --ui-breadcrumbs-item-font-size: 18px;
  --ui-breadcrumbs-item-font-weight: 300;
  --ui-breadcrumbs-item-line-height: normal;
  --ui-breadcrumbs-item-color: var(--color-grey-71);
  --ui-breadcrumbs-item-color-hover: var(--color-grey-44);
  --ui-breadcrumbs-item-color-active: var(--color-primary);
  --ui-breadcrumbs-item-padding-vertical: 4px;

  display: flex;
  align-items: center;

  $root: &;

  &__text {
    font-size: var(--ui-breadcrumbs-item-font-size);
    font-weight: var(--ui-breadcrumbs-item-font-weight);
    line-height: var(--ui-breadcrumbs-item-line-height);
    color: var(--ui-breadcrumbs-item-color);
    padding: var(--ui-breadcrumbs-item-padding-vertical) 0;
    transition: color var(--animation-time) linear;
  }

  &:hover {
    --ui-breadcrumbs-item-color: var(--ui-breadcrumbs-item-color-hover);
  }

  &__separator {
    width: 24px;
    height: 24px;

    .ui-icon {
      font-size: 24px;
      color: var(--color-grey-71);
    }
  }

  &:not(.with-link) {
    #{$root}__text {
      color: var(--ui-breadcrumbs-item-color-active);
      border-bottom: 2px solid var(--ui-breadcrumbs-item-color-active);
    }
  }
}
</style>
