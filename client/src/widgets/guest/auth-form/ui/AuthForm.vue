<template>
  <client-only>
    <ui-dialog v-model="modelValue">
      <ui-tabs v-model="currentAction" class="auth-form">
        <ui-tab-pane name="authorization" label="Log In">
          <guest-form-view>
            <template #title>
              Log in to Tech Heim
            </template>

            <template #content>
              <authorization-form />
            </template>

            <template #footer-title>
              Or Log In with
            </template>

            <template #footer-redirect>
              Don’t have an account?

              <ui-button fill-style="text" @click="currentAction = 'registration'">
                Sign up
              </ui-button>
            </template>
          </guest-form-view>
        </ui-tab-pane>

        <ui-tab-pane name="registration" label="Create Account">
          <guest-form-view>
            <template #title>
              Create your account
            </template>

            <template #content>
              <registration-form />
            </template>

            <template #footer-title>
              Or Sign Up with
            </template>

            <template #footer-redirect>
              Already have an account?

              <ui-button fill-style="text" @click="currentAction = 'authorization'">
                Sign in
              </ui-button>
            </template>
          </guest-form-view>
        </ui-tab-pane>
      </ui-tabs>
    </ui-dialog>
  </client-only>

  <fetch-status
    v-if="Object.keys(fetchStatusDialogState.state).length"
    v-model="fetchStatusDialogState.visible"
  />
</template>
<script setup lang="ts">
import {UiButton, UiDialog, UiTabPane, UiTabs} from "#shared/ui";
import {provide, ref} from "vue";
import {GuestFormView} from "#entities/guest/guest-form-view";
import {AuthorizationForm} from "#features/guest/authorization-form";
import {RegistrationForm} from "#features/guest/registration-form";
import {FetchStatus, type FetchStatusDialogType} from "#entities/fetch-status";

const modelValue = defineModel('modelValue', {
  type: Boolean,
  default: false,
})

const currentAction = ref<'authorization' | 'registration'>('authorization')

const fetchStatusDialogState = ref<FetchStatusDialogType>({
  visible: false,
  state: {},
})

provide('fetchStatusDialogState', fetchStatusDialogState)
</script>

<style lang="scss" scoped>
.auth-form {
  padding: 40px 80px;
  width: 600px;

  :deep(.ui-tabs__content) {
    margin-top: 40px;
  }
}
</style>
