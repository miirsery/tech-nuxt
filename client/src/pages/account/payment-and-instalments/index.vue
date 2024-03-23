<template>
  <div class="payment-and-instalments">
    <h5>Cards</h5>

    <p class="body-md color-grey-71 mt-6">manage payment methods</p>

    <ui-form class="payment-and-instalments__form">
      <ui-form-item>
        <ui-input v-model="formData.cards" :editable="false" label="Credit or Debit cards"/>

        <div>
          <ui-icon class="payment-and-instalments__card" name="american-express" />
          <ui-icon class="payment-and-instalments__card" name="master-card" />
          <ui-icon class="payment-and-instalments__card" name="visa" />
        </div>
      </ui-form-item>

      <ui-form-item>
        <ui-input v-model="formData.paypal" label="PayPal" :editable="false" />

        <ui-icon class="payment-and-instalments__card" name="paypal" />
      </ui-form-item>
    </ui-form>

    <h5 class="mt-32">Instalments</h5>

    <ui-button :as="NuxtLink" :to="{ name: ROUTE_NAMES.ACCOUNT_PAYMENT_AND_INSTALMENTS_INSTALMENT }" class="mt-16 color-primary" fill-style="text">
      Manage your instalment

      <template #suffix>
        <ui-icon name="arrow-right" class="color-primary" />
      </template>
    </ui-button>
  </div>
</template>

<script setup lang="ts">
import {useBreadcrumbs} from "#widgets/base-breadcrumbs";
import {UiButton, UiForm, UiFormItem, UiIcon, UiInput} from "#shared/ui";
import {ref} from "vue";
import {NuxtLink} from "#components";
import {ROUTE_NAMES} from "#shared/constants";

const { defineBreadcrumbs } = useBreadcrumbs()

const formData = ref({
  cards: '',
  paypal: ''
})

// DEBT: Сделать генерацию хлебных крошек где-то в одном месте.
defineBreadcrumbs([
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Account',
    link: '/account',
  },
  {
    title: 'Payment & Instalments',
  }
])

useSeoMeta({
  title: ' Payment & Instalments'
})

definePageMeta({
  title: 'Payment & Instalments',
  iconName: 'dollar-circle'
})
</script>

<style lang="scss" scoped>
.payment-and-instalments {
  :deep(.ui-form-item) {
    &:not(:first-child) {
      margin-top: 32px;
    }

    .ui-form-item {
      &__content {
        display: flex;
        align-items: center;
        row-gap: 12px;

        .ui-input {
          max-width: 392px;
          margin-right: 12px;
        }
      }
    }
  }

  &__form {
    margin-top: 40px;
  }

  &__card {
    width: 55px;
    height: 40px;
  }
}
</style>
