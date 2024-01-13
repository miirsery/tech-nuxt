<template>
	<div class="uikit-page">
    <!-- buttons -->
		<div class="box">
      <!-- primary buttons -->
      <div class="column">
        <ui-button>
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>

        <ui-button disabled>
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
      </div>

      <div class="column">
        <ui-button fill-style="outlined">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>

        <ui-button fill-style="outlined" disabled>
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
      </div>

      <div class="column">
        <ui-button fill-style="text">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
        <ui-button disabled fill-style="text">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
      </div>

      <div class="column">
        <ui-button fill-style="small-text">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
        <ui-button disabled fill-style="small-text">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
      </div>

      <!-- secondary buttons -->
      <div class="column">
        <ui-button appearance="secondary">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>

        <ui-button disabled appearance="secondary">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
      </div>

      <div class="column">
        <ui-button fill-style="outlined" appearance="secondary">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>

        <ui-button fill-style="outlined" disabled appearance="secondary">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
      </div>

      <div class="column">
        <ui-button fill-style="text" appearance="secondary">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
        <ui-button disabled fill-style="text" appearance="secondary">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
      </div>

      <div class="column">
        <ui-button fill-style="small-text" appearance="secondary">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
        <ui-button disabled fill-style="small-text" appearance="secondary">
          <template #prefix>
            <ui-icon name="cart" />
          </template>

          Add to cart

          <template #suffix>
            <ui-icon name="cart" />
          </template>
        </ui-button>
      </div>
    </div>

    <div class="d-flex" :style="{gap: '20px'}">
      <div class="box">
        <div class="column">
          <ui-input v-model="value" label="label" clearable />

          <ui-input v-model="value" label="label" type="password" />

          <ui-input v-model="value" label="label" clearable class="ui-input--focus">
            <template #prefix>
              <ui-icon name="profile" />
            </template>
          </ui-input>

          <ui-input v-model="value" label="label" disabled clearable>
            <template #prefix>
              <ui-icon name="profile" />
            </template>
          </ui-input>

          <ui-form-item error="supporting text" label="Профиль">
            <ui-input v-model="value" label="label" clearable>
              <template #prefix>
                <ui-icon name="profile" />
              </template>
            </ui-input>
          </ui-form-item>

          <ui-input v-model="value" type="textarea" label="Я textarea..." />
        </div>
      </div>

      <div class="box">
        <ui-button @click="isDialogVisible = !isDialogVisible">
          Открыть диалог
        </ui-button>

        <change-full-name v-model="isDialogVisible" />

        <ui-checkbox v-model="isChecked" label="Keep me logged in " />
      </div>
    </div>

    <div class="d-flex" :style="{gap: '20px'}">
      <div class="box" :style="{ minWidth: '300px' }">
        <ui-product-characteristics :characteristics="characteristics" />
      </div>

      <div class="box">
        <ui-tabs v-model="activeTab">
          <ui-tab-pane name="first">
            Content 1
          </ui-tab-pane>

          <ui-tab-pane name="second">
            Content 2
          </ui-tab-pane>
        </ui-tabs>
      </div>
    </div>
	</div>
</template>

<script lang="ts" setup>
import {useHead} from "#imports";
import {ref} from "vue";
import {UiButton, UiCheckbox, UiDialog, UiIcon, UiInput, UiProductCharacteristics, UiTabPane, UiTabs} from "#shared/ui";
import UiFormItem from "#shared/ui/form/form-item/ui/FormItem.vue";
import {ChangeFullName} from "#features/profile";

useHead({
  title: 'UIKit'
})

const value = ref('')
const activeTab = ref('first')
const isDialogVisible = ref(false)
const isChecked = ref(false)

const characteristics = [
  {
    title: 'Дисплей',
    value: 'Большой'
  },
  {
    title: 'Разрешение',
    value: '1600x900'
  },
  {
    title: 'Цена',
    value: '9 900 р'
  }
]
</script>

<style lang="scss" scoped>
.uikit-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  :deep(.ui-button) {
    margin: 0;
  }
}

.box {
  display: flex;
  row-gap: 32px;
  column-gap: 40px;
  padding: 20px;
  border: 1px dashed #9747FF;
  border-radius: 8px;
}

.column {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
</style>
