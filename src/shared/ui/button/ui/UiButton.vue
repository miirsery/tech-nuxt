<template>
	<component
    ref="buttonRef"
		:is="props.as"
		:disabled="props.disabled || props.loading"
		:class="classes"
		v-bind="$attrs"
		v-on="$attrs"
	>
    <span v-if="slots.prefix" class="ui-button__prefix">
      <slot name="prefix" />
    </span>

		<span class="ui-button__content">
      <slot />
    </span>

		<span v-if="slots.suffix" class="ui-button__suffix">
      <slot name="suffix" />
    </span>
	</component>
</template>

<script lang="ts" setup>
// DEBT: Добавить типизацию.
// DEBT: Добавить type="button" дефолтно.
import {computed, type Ref, ref, useSlots} from "vue";
import type {NuxtLink} from "#components";

type Props = {
	as?: 'button' | 'a' | typeof NuxtLink
	size?: 'md' | 'sm'
	loading?: boolean
	disabled?: boolean
	appearance?: 'primary' | 'secondary'
	fillStyle?: 'fill' | 'outlined' | 'text' | 'small-text'
	onlyIcon?: boolean
}

const slots = useSlots()

const props = withDefaults(defineProps<Props>(), {
	as: 'button',
	appearance: 'primary',
	size: 'md',
  fillStyle: 'fill',
	onlyIcon: false,
	disabled: false,
	loading: false,
})

const buttonRef = ref<HTMLButtonElement | HTMLAnchorElement | typeof NuxtLink>()

const classes = computed(() => {
	return [
		'ui-button',
		`ui-button--${props.appearance}`,
		`ui-button--${props.fillStyle}`,
		`ui-button--${props.size}`,
		{
			'ui-button--prefix': slots.prefix,
			'ui-button--suffix': slots.suffix,
			'ui-button--loading': props.loading,
			'ui-button--only-icon': props.onlyIcon,
		},
	]
})

defineOptions({
  name: 'UiButton',
})

// DEBT: Типизировать.
defineExpose({
  ref,
})
</script>

<style lang="scss">
.ui-button {
	--ui-button--icon-size: var(--font-size--icon-md);
	--ui-button--border-width: 1px;
  --ui-button--border-radius: 8px;
	$root: &;

	height: var(--ui-button--height);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--ui-button--border-radius);
	box-shadow: inset 0 0 0 var(--ui-button--border-width) var(--ui-button--border-color);
	font-size: var(--ui-button--font-size);
	text-decoration: none;
	color: var(--ui-button--color);
	background: var(--ui-button--background);
	transition-duration: var(--animation-time);
	padding: var(--ui-button--padding-vertical) var(--ui-button--padding-horizontal);

	&__suffix {
		margin-left: 8px;
	}

	&__content {
		font-weight: 400;
    font-size: var(--ui-button--font-size);
	}

	&__prefix {
		padding-right: 8px;
	}

	&:hover {
		@include responsive(lg) {
			--ui-button--border-width: 1px;
		}
	}

	&:focus {
		--ui-button--border-width: 2px;
	}

	&:active {
		--ui-button--border-width: 1px;
	}

  &:disabled {
    cursor: not-allowed;
  }

	&--primary {
    &#{$root}--fill {
      --ui-button--border-color: var(--color-primary);
      --ui-button--background: var(--color-primary);
      --ui-button--color: var(--color-white);

      &:disabled {
        --ui-button--border-color: var(--color-primary-50) !important;
        --ui-button--background: var(--color-primary-50) !important;
        --ui-button--color: var(--color-white) !important;
      }

      &:hover {
        @include responsive(lg) {
          --ui-button--border-color: var(--color-primary-600);
          --ui-button--background: var(--color-primary-600);
        }
      }

      &:focus {
        --ui-button--background: var(--color-primary-600);
      }

      &:active {
        --ui-button--border-color: var(--color-primary-700);
        --ui-button--background: var(--color-primary-700);
      }
    }

    &#{$root}--outlined {
      --ui-button--border-color: var(--color-primary);
      --ui-button--border-width: 2px;
      --ui-button--color: var(--color-primary);

      &:disabled {
        --ui-button--border-color: var(--color-primary-50) !important;
        --ui-button--color: var(--color-primary-50) !important;
      }

      &:hover {
        @include responsive(lg) {
          --ui-button--border-color: var(--color-primary-600);
          --ui-button--color: var(--color-primary-600);
        }
      }
    }

    &#{$root}--text,
    &#{$root}--small-text {
      border: none;

      --ui-button--color: var(--color-primary);

      &:disabled {
        --ui-button--color: var(--color-primary-50) !important;
      }

      &:hover {
        @include responsive(lg) {
          --ui-button--color: var(--color-primary-600);
        }
      }
    }

    &#{$root}--small-text {
      --ui-button--font-size: var(--font-size-button-sm);
    }
	}

  &--secondary {
    &#{$root}--fill {
      --ui-button--border-color: var(--color-secondary);
      --ui-button--background: var(--color-secondary);
      --ui-button--color: var(--color-white);

      &:disabled {
        --ui-button--border-color: var(--color-secondary-100) !important;
        --ui-button--background: var(--color-secondary-100) !important;
        --ui-button--color: var(--color-white) !important;
      }

      &:hover {
        @include responsive(lg) {
          --ui-button--border-color: var(--color-secondary-500);
          --ui-button--background: var(--color-secondary-500);
        }
      }

      &:focus {
        --ui-button--background: var(--color-secondary-600);
      }

      &:active {
        --ui-button--border-color: var(--color-secondary-600);
        --ui-button--background: var(--color-secondary-600);
      }
    }

    &#{$root}--outlined {
      --ui-button--border-color: var(--color-secondary);
      --ui-button--border-width: 2px;
      --ui-button--color: var(--color-secondary);

      &:disabled {
        --ui-button--border-color: var(--color-secondary-100) !important;
        --ui-button--color: var(--color-secondary-100) !important;
      }

      &:hover {
        @include responsive(lg) {
          --ui-button--border-color: var(--color-secondary-500);
          --ui-button--color: var(--color-secondary-500);
        }
      }
    }

    &#{$root}--text,
    &#{$root}--small-text {
      border: none;

      --ui-button--color: var(--color-secondary);

      &:disabled {
        --ui-button--color: var(--color-secondary-100) !important;
      }

      &:hover {
        @include responsive(lg) {
          --ui-button--color: var(--color-secondary-600);
        }
      }
    }

    &#{$root}--small-text {
      --ui-button--font-size: var(--font-size-button-sm);
    }
  }

	&--md {
		--ui-button--padding-horizontal: 16px;
		--ui-button--padding-vertical: 8px;
		--ui-button--height: 48px;
		--ui-button--font-size: var(--font-size-button-lg);
	}

	&--sm {
		--ui-button--padding-horizontal: 20px;
		--ui-button--padding-vertical: 12px;
		--ui-button--height: 44px;
		--ui-button--font-size: var(--font-size--md);
	}

	&--only-icon {
		--ui-button--padding-horizontal: 0;

		min-width: var(--ui-button--height);
		font-size: var(--ui-button--icon-size);

		#{$root}__prefix,
		#{$root}__suffix {
			padding: 0;
		}

		#{$root}__content {
			display: flex;
			align-items: center;
		}
	}

	&--loading {
		cursor: progress !important; // stylelint-disable-line declaration-no-important
		#{$root}__prefix,
		#{$root}__content,
		#{$root}__suffix {
			visibility: hidden;
		}
	}

	&__suffix,
	&__prefix {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--ui-button--icon-size);

    .ui-icon {
      font-size: var(--ui-button--icon-size);
    }
	}
}
</style>
