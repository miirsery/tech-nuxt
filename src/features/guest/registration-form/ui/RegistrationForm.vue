<template>
  <div class="registration-form">
    <ui-form class="registration-form">
      <ui-form-item prop="fullName">
        <ui-input v-model="formData.fullName" label="Full Name" />
      </ui-form-item>

      <ui-form-item prop="email">
        <ui-input v-model="formData.email" type="email" inputmode="email" label="E-mail" />
      </ui-form-item>

      <ui-form-item prop="password">
        <ui-input v-model="formData.password" type="password" label="Password" />
      </ui-form-item>

      <div class="mt-12">
        <ui-checkbox v-model="isAgree">
          <template #label>
            <!-- DEBT: добавить ссылку, как появится страница -->
            I agree to all <nuxt-link to="/">Terms & Conditions</nuxt-link>
          </template>
        </ui-checkbox>
      </div>
    </ui-form>

    <ui-button :disabled="!isAgree" class="mt-12 w-100" @click="handleFormSubmit">
      Create Account
    </ui-button>
  </div>
</template>
<script setup lang="ts">
import {UiButton, UiCheckbox, UiForm, UiInput, UiFormItem} from "#shared/ui";
import {inject, type Ref, ref} from "vue";
import type {RegistrationPayloadType} from "#entities/guest";
import type {FetchStatusDialogType} from "#entities/fetch-status";

const fetchStatusDialogState = inject('fetchStatusDialogState') as Ref<FetchStatusDialogType>

const formData = ref<RegistrationPayloadType>({
  fullName: '',
  email: '',
  password: '',
})

const isAgree = ref(false)
const isForgotPasswordDialogVisible = ref(false)

const handleForgotPasswordDialogOpen = () => {
  isForgotPasswordDialogVisible.value = true
}

const handleFormSubmit = async () => {
  console.log(formData.value)

  fetchStatusDialogState.value.visible = true
  fetchStatusDialogState.value.state = {
    status: 'error',
    description: 'Unfortunately, there was a problem during creating your account. try again later.'
  }
}
</script>
