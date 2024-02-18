<template>
  <div
    ref="autocompleteRef"
    v-on-click-outside="handleOutsideClick"
    class="ui-autocomplete"
    @click="handleFocus"
  >
    <ui-input ref="uiInputRef" v-model="modelValue" :label="localLabel">
      <template #suffix>
        <slot v-if="slots?.icon" name="icon" />

        <ui-icon v-else name="search-normal" />
      </template>
    </ui-input>
  </div>
</template>

<script setup lang="ts" generic="T = unknown">
import {UiIcon, UiInput} from "#shared/ui";
import {computed, ref, watch} from "vue";
import { vOnClickOutside } from '@vueuse/components'
import type {UiInputInstance} from "#shared/ui/@types";
import {debounce} from "perfect-debounce";

type Props = {
  label?: string
  minSymbols?: number
  suggestions?: T[]
}

type Emits = {
  (event: 'search', value: string): void
}

type Slots = {
  icon?: () => HTMLElement
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  minSymbols: 3,
  suggestions: () => []
})
const emits = defineEmits<Emits>()
const slots = defineSlots<Slots>()
const modelValue = defineModel('modelValue', {
  type: String,
  required: true,
  default: '',
})

const autocompleteRef = ref<HTMLDivElement>()
const uiInputRef = ref<UiInputInstance>()

const isFocus = ref(false)

const localLabel = computed(() => isFocus.value ? '' : props.label)

const debouncedSearch = debounce(() => {
  emits('search', modelValue.value)
}, 300)

watch(() => modelValue.value, () => {
  if (modelValue.value.length < props.minSymbols) return

  debouncedSearch()
})

const handleFocus = () => {
  isFocus.value = true

  uiInputRef.value?.focus()
}

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (!autocompleteRef.value?.contains(target)) {
    isFocus.value = false

    uiInputRef.value?.blur()
  }
}
</script>

<style lang="scss" scoped>
.ui-autocomplete {
  :deep(.ui-input) {
    &.ui-input--focus {
      box-shadow: none;
      --ui-input-focus-border-color: var(--color-black);

      .ui-input__label {
        display: none;
      }
    }
  }
}
</style>
