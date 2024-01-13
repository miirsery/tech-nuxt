<template>
  <client-only>
    <ui-dialog v-model="modelValue" append-to-body>
      <div :class="['fetch-status', `fetch-status--${props.status}`]">
        <div class="fetch-status__icon">
          <ui-icon :name="`${props.status}-status`" />
        </div>

        <h3 class="fetch-status__title">
          {{ props.text ?? props.status === 'error' ? 'Oops.' : 'Well done' }}
        </h3>

        <p class="body-lg fetch-status__description">
          {{ props.description }}
        </p>
      </div>
    </ui-dialog>
  </client-only>
</template>
<script setup lang="ts">
import {UiDialog, UiIcon} from "#shared/ui";

type Props = {
  status?: 'error' | 'success'
  text?: string
  description?: string
}

const props = defineProps<Props>()
const modelValue = defineModel('modelValue', {
  type: Boolean,
  default: false,
})
</script>

<style lang="scss" scoped>
.fetch-status {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
  width: 442px;
  height: 315px;

  $root: &;

  &__icon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: $box-shadow-2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &--error {
    .ui-icon {
      width: 35px;
      height: 35px;
    }
  }

  &--success {
    .ui-icon {
      width: 50px;
      height: 35px;
    }
  }

  &__description {
    max-width: 394px;
    text-align: center;
  }
}
</style>
