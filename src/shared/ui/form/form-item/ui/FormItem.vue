<template>
  <div :class="formItemClasses">
    <!--  DEBT: Переделать на label  -->
    <!--  DEBT: Добавить <slot name="label" />  -->
    <div v-if="props.label" class="ui-form-item__label">
      {{ props.label }}
    </div>

    <div class="ui-form-item__content">
      <slot />

      <!--  DEBT: Добавить <slot name="error" />  -->
      <transition>
        <div v-if="props.error" class="ui-form-item__error">
          {{ props.error }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";

type Props = {
  prop?: string
  error?: string
  required?: boolean
  showMessage?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
  showMessage: true,
})

const isValid = ref(false)
const isRequired = ref(props.required)

const formItemClasses = computed(() => {
  return [
    'ui-form-item',
    { 'with-error': !isValid.value },
    { 'is-required': isRequired.value }
  ]
})

defineOptions({
  name: 'UiFormItem',
})
</script>

<style lang="scss" scoped>
.ui-form-item {
  &__content {
    margin-top: 4px;
  }

  &__error {
    font-size: var(--font-size-body-xs);
    font-weight: 300;
    line-height: 14.52px;
    margin-top: 4px;
    color: var(--color-error);
  }

  &.with-error {
    :deep(.ui-input) {
      --ui-input-border-color: var(--color-error);
      --ui-input-text-color: var(--color-error);
      --ui-input-hover-border-color: var(--color-error);
    }
  }
}
</style>
