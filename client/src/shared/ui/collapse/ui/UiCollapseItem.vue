<template>
  <div class="ui-collapse-item">
    <button
      type="button"
      class="ui-collapse-item__header"
      @click="handleHeaderClick"
      @focus="handleFocus"
      @blur="focusing = false"
    >
      <slot v-if="slots.title" name="title" />

      <span v-else class="text-body-xl">{{ props.title }}</span>

      <span v-if="props.showArrow" class="ui-collapse-item__arrow">
        <ui-icon name="chevron-down" :reverse="isActive" />
      </span>
    </button>

    <div v-show="isActive" class="ui-collapse-item__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {UiIcon} from "#shared/ui";
import {useCollapseItem} from "#shared/ui/collapse/lib/composables";

type Props = {
  title?: string
  name?: string
  disabled?: boolean
  showArrow?: boolean
}

type Slots = {
  default?: () => HTMLElement
  title?: () => HTMLElement
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  name: '',
  disabled: false,
  showArrow: true,
})
const slots = defineSlots<Slots>()

const {
  focusing,
  id,
  isActive,
  handleFocus,
  handleHeaderClick,
} = useCollapseItem(props)

defineOptions({
  name: 'UiCollapseItem',
})
</script>

<style lang="scss" scoped>
.ui-collapse-item {
  border-color: var(--color-grey-9e);
  border-style: solid;
  border-bottom-width: 1px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    width: 100%;
  }

  &__arrow {
    .ui-icon {
      font-size: var(--font-size--icon-md);
    }
  }

  &__content {
    padding-bottom: 30px;
  }
}
</style>
