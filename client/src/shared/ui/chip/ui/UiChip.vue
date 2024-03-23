<template>
  <div :class="classes">
    <slot />

    <button v-if="props.closable" type="button" class="ui-chip__close" @click="handleChipClose">
      <ui-icon name="close-square" />
    </button>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {UiIcon} from "#shared/ui";

type Props = {
  closable?: boolean
}

type Emits = {
  (e: 'on-close'): void
}

const props = withDefaults(defineProps<Props>(), {
  closable: false,
})
const emits = defineEmits<Emits>()

const classes = computed(() => ['ui-chip', { closable: props.closable }])

const handleChipClose = () => {
  emits('on-close')
}

defineOptions({
  name: 'UiChip',
})
</script>

<style lang="scss" scoped>
.ui-chip {
  width: fit-content;
  padding: 8px;
  min-width: 140px;
  border-radius: 8px;
  border: 1px solid var(--color-dark);
  border-radius: 8px;

  &.closable {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__close {
    width: var(--font-size--icon-md);
    height: var(--font-size--icon-md);
    margin-left: 8px;

    .ui-icon {
      font-size: var(--font-size--icon-md);
    }
  }
}
</style>
