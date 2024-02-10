<template>
  <div class="guest-form-view">
    <h3 class="guest-form-view__title">
      <slot name="title" />
    </h3>

    <slot name="content" />

    <footer class="guest-form-view__footer">
      <div class="guest-form-view__footer-title">
        <div class="divider" />

        <span>
          <slot name="footer-title" />
        </span>

        <div class="divider" />
      </div>

      <div class="guest-form-view__footer-auth-socials">
        <ui-button fill-style="outlined">
          <ui-icon name="google" />

          Google
        </ui-button>

        <ui-button fill-style="outlined">
          <ui-icon name="facebook" />

          Facebook
        </ui-button>
      </div>

      <span class="guest-form-view__footer-redirect">
        <slot name="footer-redirect" />
      </span>
    </footer>
  </div>
</template>
<script setup lang="ts">
import {UiButton, UiIcon} from "#shared/ui";
</script>

<style lang="scss" scoped>
.guest-form-view {
  &__title {
    text-align: center;
    margin-bottom: 24px;
  }

  &__footer {
    margin-top: 24px;
  }

  &__footer-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--color-grey-2d);
      margin-left: 8px;
      margin-right: 8px;
      white-space: nowrap;
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: var(--color-grey-2d);
    }
  }

  &__footer-auth-socials {
    margin-top: 24px;
    display: flex;
    align-items: center;

    .ui-button {
      width: 208px;

      &:first-child {
        margin-right: 24px;
      }

      .ui-icon {
        margin-right: 8px;
        font-size: var(--font-size--icon-md);
      }
    }
  }

  &__footer-redirect {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    :deep(.ui-button) {
      margin-left: 16px;
    }
  }
}
</style>
