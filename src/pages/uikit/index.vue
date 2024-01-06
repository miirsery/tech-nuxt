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

        <form-item error="supporting text" label="Профиль">
          <ui-input v-model="value" label="label" clearable>
            <template #prefix>
              <ui-icon name="profile" />
            </template>
          </ui-input>
        </form-item>
      </div>
    </div>
	</div>
</template>

<script lang="ts" setup>
import {useHead} from "#imports";
import {ref} from "vue";
import {UiButton, UiIcon, UiInput} from "#shared/ui";
import FormItem from "#shared/ui/form/form-item/ui/FormItem.vue";

useHead({
  title: 'UIKit'
})

const value = ref('')
</script>

<style lang="scss" scoped>
.uikit-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.box {
  display: flex;
  row-gap: 32px;
  column-gap: 40px;
  padding: 20px;
  border: 1px dashed #9747FF;
}

.column {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
</style>
