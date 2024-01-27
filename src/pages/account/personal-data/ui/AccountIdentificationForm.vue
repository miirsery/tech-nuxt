<template>
  <ui-form class="account-identification-form">
    <div class="account-identification-form__item">
      <ui-form-item>
        <ui-input v-model="formData.fullName" label="Full name" :editable="false" @edit="handleFullNameDialogVisibleToggle">
          <template #prefix>
            <ui-icon name="profile" />
          </template>
        </ui-input>
      </ui-form-item>

      <ui-form-item>
        <ui-input v-model="formData.phone" label="Phone number" :editable="false">
          <template #prefix>
            <ui-icon name="phone" />
          </template>
        </ui-input>
      </ui-form-item>

      <ui-form-item>
        <ui-input v-model="formData.address" label="Address" :editable="false">
          <template #prefix>
            <ui-icon name="home-2" />
          </template>
        </ui-input>
      </ui-form-item>
    </div>

    <div class="account-identification-form__item">
      <ui-form-item>
        <ui-input v-model="formData.email" label="E-mail Address" inputmode="email" :editable="false">
          <template #prefix>
            <ui-icon name="direct" />
          </template>
        </ui-input>
      </ui-form-item>

      <ui-form-item>
        <ui-input v-model="formData.password" type="password" label="Phone number" :editable="false" />
      </ui-form-item>

      <ui-form-item>
        <ui-input v-model="formData.postalCode" label="Postal code" :editable="false">
          <template #prefix>
            <ui-icon name="signpost" />
          </template>
        </ui-input>
      </ui-form-item>
    </div>
  </ui-form>

  <change-full-name v-model="isChangeFullNameDialogVisible" />
</template>

<script setup lang="ts">
import {UiForm, UiFormItem, UiIcon, UiInput} from "#shared/ui";
import {ref} from "vue";
import {ChangeFullName} from "#features/profile";

const formData = ref({
  fullName: 'Jimmy Smith',
  phone: '+12345678910',
  address: 'HubSpot, 25 First Street, Cambridge MA 02141, United States',
  email: 'Jimmy.smith1996@gmail.com',
  password: '**********',
  postalCode: '',
})

const isChangeFullNameDialogVisible = ref(false)

const handleFullNameDialogVisibleToggle = () => {
  isChangeFullNameDialogVisible.value = !isChangeFullNameDialogVisible.value
}
</script>

<style lang="scss" scoped>
.account-identification-form {
  display: flex;
  margin-top: 40px;

  &__item {
    max-width: 392px;
    width: 100%;

    &:first-child {
      margin-right: 16px;
    }
  }
}
</style>
