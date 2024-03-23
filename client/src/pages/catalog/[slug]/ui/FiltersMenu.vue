<template>
  <div class="filters-menu">
    <div class="filters-menu__header">
      <h5 class="filters-menu__title">Filters</h5>

      <ui-button fill-style="text">
        Clear all
      </ui-button>
    </div>

    <div class="filters-menu__content">
      <ui-collapse v-model="activeCollapse">
        <ui-collapse-item title="Brand" name="brand">
          <ui-checkbox-group v-model="activeBrand">
            <ui-checkbox value="asus">
              <template #label>
                <span class="text-body-xl color-dark">
                  Asus
                </span>
                <span class="text-body-sm color-grey-b4">(183)</span>
              </template>
            </ui-checkbox>

            <ui-checkbox value="apple">
              <template #label>
                <span class="text-body-xl color-dark">
                  Apple
                </span>
                <span class="text-body-sm color-grey-b4">(18)</span>
              </template>
            </ui-checkbox>
          </ui-checkbox-group>
        </ui-collapse-item>
      </ui-collapse>

      <ui-collapse v-model="activeColorCollapse">
        <ui-collapse-item title="Color" name="color">
          <ui-checkbox-group v-model="activeColor">
            <ui-checkbox value="red">
              <template #label>
                <span class="text-body-xl color-dark">
                  Red
                </span>
                <span class="text-body-sm color-grey-b4">(183)</span>
              </template>
            </ui-checkbox>

            <ui-checkbox value="green">
              <template #label>
                <span class="text-body-xl color-dark">
                  Green
                </span>
                <span class="text-body-sm color-grey-b4">(18)</span>
              </template>
            </ui-checkbox>
          </ui-checkbox-group>
        </ui-collapse-item>
      </ui-collapse>


    </div>
  </div>
</template>

<script setup lang="ts">
import {UiButton, UiCollapse, UiCollapseItem, UiCheckboxGroup, UiCheckbox} from "#shared/ui";
import {ref} from "vue";

const activeCollapse = ref(['brand'])
const activeColorCollapse = ref([''])
const activeBrand = ref(['apple'])
const activeColor = ref(['red'])
</script>

<style lang="scss" scoped>
.filters-menu {
  &__header {
    display: flex;
    align-items: center;
    height: 56px;
  }

  &__title {
    margin-right: 30px;
  }

  &__content {
    :deep(.ui-collapse) {
      &:not(:first-child) {
        padding-top: 12px;
      }
    }
  }
}
</style>
