<template>
  <label :class="uiCheckboxClasses">
    <span class="ui-checkbox__input">
      <input v-model="modelValue" class="ui-checkbox__original" type="checkbox" />

      <span class="ui-checkbox__inner" />
    </span>

    <span v-if="hasLabel" class="ui-checkbox__label">
      <slot v-if="slots?.label" name="label" />

      <template v-else>
        {{ props.label }}
      </template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import {computed} from "vue";

type Props = {
  label?: string
}

type SlotsType = {
  label?: () => HTMLElement
}

const props = defineProps<Props>()
const slots = defineSlots<SlotsType>()

const modelValue = defineModel('modelValue', {
  type: Boolean,
  default: false,
})

const hasLabel = computed(() => props?.label || slots?.label)

const uiCheckboxClasses = computed(() => {
  return [
    'tooltip-checkbox',
    { 'is-checked': modelValue.value },
    { 'with-label': hasLabel.value }
  ]
})
</script>

<style lang="scss" scoped>
.ui-checkbox {
  --ui-checkbox-height: 24px;
  --ui-checkbox-width: 24px;
  --ui-checkbox-border-radius: 8px;

  height: var(--ui-checkbox-height);
  width: var(--ui-checkbox-width);
  display: flex;
  align-items: center;
  cursor: pointer;

  $root: &;

  &.with-label {
    width: auto;
  }

  &__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }

  &__label {
    margin-left: 12px;
    font-size: var(--font-size-body-sm);
    font-weight: 300;
    color: var(--color-grey-71);

    &:hover {
      color: var(--color-grey-50);
    }
  }

  &__inner {
    height: var(--ui-checkbox-height);
    width: var(--ui-checkbox-width);
    border-radius: var(--ui-checkbox-border-radius);
    border: 2px solid var(--color-grey-71);
    display: block;
    position: relative;

    &::after {
      box-sizing: content-box;
      content: "";
      border: 2px solid transparent;
      border-left: 0;
      border-top: 0;
      height: 12px;
      left: 6px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      width: 8px;
      transition: transform .15s ease-in .05s;
      transform-origin: center;
    }
  }

  &.is-checked {
    #{$root}__inner {
      border: 2px solid var(--color-primary);
      background-color: var(--color-primary);

      &::after {
        transform: rotate(45deg) scaleY(1);
        border-color: var(--color-white);
      }
    }

    #{$root}__label {
      color: var(--color-primary);
    }
  }
}
</style>
