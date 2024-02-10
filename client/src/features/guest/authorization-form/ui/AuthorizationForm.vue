<template>
  <div class="authorization-form">
    <ui-form class="authorization-form">
      <ui-form-item prop="email">
        <ui-input v-model="formData.email" type="email" inputmode="email" label="E-mail" />
      </ui-form-item>

      <ui-form-item prop="password">
        <ui-input v-model="formData.password" type="password" label="Password" />
      </ui-form-item>

      <div class="authorization-form__actions">
        <ui-checkbox v-model="formData.staySignedIn" label="Keep me logged in" />

        <!-- DEBT: Добавить диалог с полем email. -->
        <button type="button" @click="handleForgotPasswordDialogOpen" class="authorization-form__forgot-form">
          Forgot Password?
        </button>
      </div>
    </ui-form>

    <ui-button class="w-100 mt-12" @click="handleFormSubmit">
      Log in
    </ui-button>
  </div>
</template>
<script setup lang="ts">
import {UiButton, UiCheckbox, UiForm, UiInput, UiFormItem} from "#shared/ui";
import {inject, type Ref, ref} from "vue";
import type {AuthorizationPayloadType} from "#entities/guest";
import {type FetchStatusDialogType} from "#entities/fetch-status";

const fetchStatusDialogState = inject('fetchStatusDialogState') as Ref<FetchStatusDialogType>

const formData = ref<AuthorizationPayloadType>({
  email: '',
  password: '',
  staySignedIn: false,
})

const isForgotPasswordDialogVisible = ref(false)

const handleForgotPasswordDialogOpen = () => {
  isForgotPasswordDialogVisible.value = true
}

const handleFormSubmit = async () => {
  console.log(formData.value)

  fetchStatusDialogState.value.visible = true
  fetchStatusDialogState.value.state = {
    status: 'success',
    description: 'Congratulation ёпта'
  }
}
</script>

<style lang="scss" scoped>
.authorization-form {
  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
  }

  &__forgot-form {
    color: var(--color-primary);
    font-size: var(--font-size-body-sm);
    font-weight: 300;
  }
}
</style>
