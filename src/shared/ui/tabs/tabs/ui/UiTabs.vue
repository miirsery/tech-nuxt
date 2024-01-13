<template>
  <div class="ui-tabs">
    <div v-if="slots?.default?.()" class="ui-tabs__header">
      <button
        v-for="tabSlot in slots.default?.()"
        :id="`tab-${tabSlot.props.name}`"
        :key="tabSlot.props.name"
        :aria-controls="`pane-${tabSlot.props.name}`"
        :aria-selected="isSelected(tabSlot.props.name)"
        class="ui-tabs__header-item"
        role="tab"
        tabindex="-1"
        type="button"
        @click="handleTabSelect(tabSlot.props.name)"
      >
        {{ tabSlot.props.name }}
      </button>
    </div>

    <div class="ui-tabs__content">
      <slot  />
    </div>
  </div>
</template>

<script setup lang="ts">
// DEBT: Типизировать, вынести в композабл.
import {computed, provide, ref, useSlots} from "vue";

type Props = {
  modelValue: string
}

type Emits = {
  (event: 'update:modelValue', value: Props['modelValue']): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const slots = useSlots()

const selectedTab = ref(slots?.default?.()?.[0]?.props?.name ?? '')
const localModelValue = computed<Props['modelValue']>({
  get() {
    return selectedTab.value
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

const paneToRender = computed(() => slots?.default?.().find((tabPane) => tabPane.props.name === localModelValue.value).props.name)

const handleTabSelect = (tabName: string) => {
  selectedTab.value = tabName
  localModelValue.value = tabName
}

const isSelected = (name: string) => {
  return selectedTab.value === name
}

provide('paneToRender', paneToRender)

defineOptions({
  name: 'UiTabs',
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>
.ui-tabs {
  &__header {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      z-index: 1;
      background-color: var(--color-grey-71);
    }
  }

  &__header-item {
    font-size: var(--font-size-body-xl);
    font-weight: 300;
    line-height: 140%;
    padding: 8px 12px;
    color: var(--color-grey-71);
    transition: color var(--animation-time) linear;

    &:not(:last-child) {
      margin-right: 24px;
    }

    &[aria-selected="true"] {
      position: relative;
      color: var(--color-primary);

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        z-index: 2;
        background-color: var(--color-primary);
      }
    }
  }

  &__content {
    margin-top: 12px;
  }
}
</style>
