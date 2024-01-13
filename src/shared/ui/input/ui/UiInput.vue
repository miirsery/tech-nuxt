<template>
  <div
    :class="uiInputClasses"
    ref="uiInputRef"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="handleFocus"
    v-on-click-outside="handleOutsideClick"
  >
    <template v-if="props.type !== 'textarea'">
      <div v-if="slots.prepend" class="ui-input__prepend">
        <slot name="prepend" />
      </div>

      <div class="ui-input__wrapper" @click="handleFocus" @blurin="handleBlur" tabindex="-1">
        <div v-if="isPrefixVisible" class="ui-input__prefix">
          <!-- DEBT: Улучшить логику. Необходимо создать пул значений. -->
          <ui-icon v-if="isPasswordType || isEmailType" :name="isPasswordType ? 'key' : 'email'" />

          <slot v-else name="prefix" />
        </div>

        <input
          ref="inputInnerRef"
          v-model="modelValue"
          :type="inputType"
          :inputmode="props.inputmode"
          :autocomplete="props.autocomplete"
          :disabled="props.disabled"
          :readonly="props.readonly"
          :minlength="props.minlength"
          :maxlength="props.maxlength"
          class="ui-input__inner"
          @input="handleInput"
          @change="handleChange"
          @keydown="handleKeydown"
        />

        <client-only v-if="props.label">
          <div class="ui-input__label">
            {{ props.label }}
          </div>
        </client-only>

        <div v-if="isSuffixVisible" class="ui-input__suffix">
          <slot v-if="!props.clearable" name="suffix" />

          <button v-else-if="!isPasswordType && props.clearable" type="button" @click="handleClear">
          <!--  DEBT: Вынести все иконки в отдельный пакет.  -->
            <ui-icon name="close-circle" />
          </button>

          <button type="button" v-if="isPasswordType" @click="handlePasswordVisibleChange">
            <ui-icon :name="passwordIcon" />
          </button>
        </div>
      </div>

      <div v-if="slots.append" class="ui-input__append">
        <slot name="append" />
      </div>
    </template>

    <template v-else>
      <textarea
        class="ui-input__textarea-inner"
        ref="textareaInnerRef"
        :autocomplete="props.autocomplete"
        :placeholder="props.label"
        :disabled="props.disabled"
        :readonly="props.readonly"
        @input="handleInput"
        @change="handleChange"
        @keydown="handleKeydown"
      />

<!--      DEBT: Реализовать функционал.-->
<!--      <span-->
<!--        v-if="isWordLimitVisible"-->
<!--        :style="countStyle"-->
<!--        :class="nsInput.e('count')"-->
<!--      >-->
<!--        {{ textLength }} / {{ maxlength }}-->
<!--      </span>-->
    </template>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, onUnmounted, type Ref, ref, shallowRef, watch} from "vue";
import {UiIcon} from "#shared/ui";
import type {NonNegativeIntegerType} from "#shared/types/helpers";
import { vOnClickOutside } from '@vueuse/components'

// DEBT: Вынести в типы.
// DEBT: Сделать state = error.
type ModelValue = string | number | null

type Props = {
  label?: string
  type?: 'text' | 'password' | 'textarea' | 'number' | 'email' | 'tel'
  inputmode?: 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
  clearable?: boolean
  disabled?: boolean
  autocomplete?: string
  class?: string
  rows?: number
  autosize?: { minRows?: number, maxRows?: number } | boolean
  readonly?: boolean
  minlength?: number
  maxlength?: number
  resize?: boolean
}

type Emits = {
  (event: 'input', value: ModelValue): void
  (event: 'change', value: ModelValue): void
  (event: 'keydown', value: KeyboardEvent): void
  (event: 'clear'): void
  (event: 'focus'): void
  (event: 'blur'): void
}

type Slots = {
  prepend?: () => HTMLElement
  append?: () => HTMLElement
  prefix?: () => HTMLElement
  suffix?: () => HTMLElement
}

type TargetElement = HTMLInputElement | HTMLTextAreaElement

type UiInputExposeType = {
  focus: () => void
  blur: () => void
  instance?: Ref<HTMLInputElement | HTMLTextAreaElement | null | undefined>
}

const props = withDefaults(defineProps<Props>(), {
  rows: 2,
  class: '',
  type: 'text',
  autocomplete: 'new-password',
  inputmode: 'text',
  clearable: false,
  disabled: false,
  autosize: false,
  readonly: false,
  resize: true,
})
const emits = defineEmits<Emits>()
const slots = defineSlots<Slots>()

const modelValue = defineModel<ModelValue>()

const uiInputRef = shallowRef<HTMLDivElement | null>(null)
const inputInnerRef = shallowRef<HTMLInputElement | null>(null)
const textareaInnerRef  = shallowRef<HTMLTextAreaElement | null>(null)

const isHovered = ref(false)
const isInFocus = ref(false)
const isPasswordHidden = ref(true)

const _ref = computed<HTMLInputElement | HTMLTextAreaElement | null>(() => inputInnerRef.value || textareaInnerRef.value)
const isPasswordType = computed(() => props.type === 'password')
const isEmailType = computed(() => props.type === 'email')
const isSuffixVisible = computed(() => slots.suffix || props.clearable || isPasswordType.value)
const isPrefixVisible = computed(() => slots.prefix || isPasswordType.value || isEmailType.value)
const inputType = computed<Props['type']>(() => {
  if (isPasswordType.value && isPasswordHidden.value) return 'password'
  if (isPasswordType.value && !isPasswordHidden.value) return 'text'

  return props.type
})
const uiInputClasses = computed(() => [
  'ui-input',
  { 'ui-input--focus': isInFocus.value || modelValue.value?.toString().length },
  { 'ui-input--disabled': props.disabled },
  { 'ui-input--hovered': isHovered.value },
  { 'ui-input--with-prefix': isPrefixVisible.value },
  { 'ui-input--not-resize': !props.resize },
  { 'ui-input--type-textarea': props.type === 'textarea' },
  props.class,
])

const passwordIcon = computed(() => (isPasswordHidden.value ? 'eye-close' : 'eye-open'))

const handlePasswordVisibleChange = () => {
  isPasswordHidden.value = !isPasswordHidden.value
}

const handleInput = (event: Event) => {
  const { value } = event.target as TargetElement

  emits('input', value as ModelValue)
}

const handleChange = (event: Event) => {
  emits('change', (event.target as TargetElement).value as ModelValue)
}

const handleKeydown = (event: KeyboardEvent) => {
  emits('keydown', event)
}

const handleFocus = () => {
  if (!_ref.value || props.disabled) return

  _ref.value.focus()
  isInFocus.value = true

  emits('focus')
}

const handleBlur = () => {
  if (!_ref.value || props.disabled) return

  _ref.value.blur()
  isInFocus.value = false

  emits('blur')
}

const handleClear = () => {
  if (!_ref.value || props.disabled) return

  modelValue.value = ''
  isInFocus.value = true
  _ref.value.focus()

  emits('clear')
  emits('input', '')
  emits('change', '')
}

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;

  if (!uiInputRef.value?.contains(target)) {
    isInFocus.value = false;
  }
}

defineOptions({
  name: 'UiInput',
  inheritAttrs: false,
})

defineExpose<UiInputExposeType>({
  instance: _ref,
  focus: handleFocus,
  blur: handleBlur,
})
</script>

<style lang="scss" scoped>
.ui-input {
  $root: &;
  --ui-input-border-radius: 8px;
  --ui-input-text-color: var(--color-grey-b4);
  --ui-input-border-color: var(--ui-input-text-color);
  --ui-input-bg-color: var(--color-white);
  --ui-input-icon-color: var(--ui-input-text-color);
  --ui-input-hover-border-color: var(--color-grey-71);
  --ui-input-focus-border-color: var(--color-primary-100);
  --ui-input-disabled-border-color: var(--color-grey-cb);
  --ui-input-disabled-text-color: var(--color-grey-cb);
  --ui-input-padding-horizontal: 12px;
  --ui-input-padding-vertical: 12px;
  --ui-input-color-error: var(--color-error);

  min-height: 48px;
  height: auto;
  color: var(--ui-input-text-color);
  border-color: var(--ui-input-border-color);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--ui-input-border-radius);
  transition: all var(--animation-time) ease,
              color var(--animation-time) ease;
  font-size: var(--font-size-body-md);
  line-height: var(--line-height--body-xs);
  position: relative;
  width: 100%;

  &__wrapper {
    display: grid;
    grid-template-areas: 'prefix main suffix';
    grid-template-columns: min-content 1fr min-content;
    padding: var(--ui-input-padding-vertical) var(--ui-input-padding-horizontal);
    cursor: text;
  }

  &__inner {
    height: 24px;
    border: none;
    outline: none;
    width: 100%;
    flex-grow: 1;
    -webkit-appearance: none;
    grid-area: main;
  }

  &__inner,
  &__textarea-inner {
    font-size: var(--font-size--lg);

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__textarea-inner {
    vertical-align: bottom;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
  }

  &__prefix,
  &__suffix {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--font-size--icon-md);
    height: var(--font-size--icon-md);

    button {
      width: var(--font-size--icon-md);
      height: var(--font-size--icon-md);
    }

    :deep(svg) {
      font-size: var(--font-size--icon-md);
      color: var(--ui-input-hover-border-color);
    }
  }

  &__prefix {
    margin-right: 8px;
    grid-area: prefix;
  }

  &__suffix {
    margin-left: 8px;
    grid-area: suffix;
  }

  &--hovered {
    color: var(--ui-input-hover-border-color);
    border-color: var(--ui-input-hover-border-color);

    :deep(svg) {
      color: var(--ui-input-hover-border-color);
    }
  }

  &--focus {
    box-shadow: 0 0 2px 0 var(--ui-input-focus-border-color);
    border-color: var(--ui-input-focus-border-color);
    color: var(--ui-input-focus-border-color);

    :deep(svg) {
      color: var(--ui-input-focus-border-color);
    }

    #{$root}__label {
      top: -6px;
      left: 18px;
      background-color: var(--color-white);
      font-size: var(--font-size-body-xs);
      font-weight: 300;
      line-height: 1;
      box-shadow: 0 0 5px 3px var(--color-white);
    }

    #{$root}__inner {
      color: var(--ui-input-focus-border-color);
    }
  }

  &__label {
    font-size: var(--font-size-body-md);
    line-height: var(--line-height--body-xs);
    position: absolute;
    left: 12px;
    top: 12px;
    transition: top var(--animation-time) ease,
                left var(--animation-time) ease,
                font-size var(--animation-time) ease;
    padding-left: 4px;
    padding-right: 4px;
  }

  &--disabled {
    color: var(--ui-input-disabled-text-color);
    border-color: var(--ui-input-disabled-border-color);
    cursor: not-allowed;
    box-shadow: none;

    button {
      cursor: not-allowed;
    }

    #{$root}__inner {
      cursor: not-allowed;
      background: transparent;
      color: var(--ui-input-disabled-text-color);
    }

    :deep(svg) {
      color: var(--ui-input-disabled-text-color);
    }
  }

  &--with-prefix {
    #{$root}__label {
      left: 44px;
    }

    &#{$root}--focus {
      #{$root}__label {
        left: 22px;
      }
    }
  }

  &--not-resize {
    #{$root}__textarea-inner {
      resize: none;
    }
  }

  &--type-textarea {
    #{$root}__textarea-inner {
      min-height: 56px;
      padding: var(--ui-input-padding-vertical) var(--ui-input-padding-horizontal);
    }
  }
}
</style>
