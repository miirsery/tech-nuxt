<template>
  <client-only>
    <ui-dialog v-model="modelValue" show-close title="First name and Last name">
      <ui-form :model="formData" class="change-full-name" >
          <ui-form-item prop="firstName">
            <ui-input v-model="formData.firstName" label="First name" />
          </ui-form-item>

          <ui-form-item prop="lastName">
            <ui-input v-model="formData.lastName" label="Last name" />
          </ui-form-item>

          <div class="change-full-name__footer">
            <ui-button @click="handleFormSubmit">Save</ui-button>
          </div>
        </ui-form>
    </ui-dialog>
  </client-only>
</template>
<script setup lang="ts">
import {UiButton, UiDialog, UiForm, UiFormItem, UiInput} from "#shared/ui";
import {reactive} from "vue";

const modelValue = defineModel('modelValue', {
  type: Boolean,
  required: true
})

const formData = reactive({
  firstName: '',
  lastName: '',
})

const handleFormSubmit = async () => {
  // API: Заменить на fakeApi
  console.log(formData)
}
</script>

<style lang="scss" scoped>
.change-full-name {
  width: 392px;
  margin-top: 42px;

  &__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;

    .ui-button {
      width: 162px;
    }
  }
}
</style>
