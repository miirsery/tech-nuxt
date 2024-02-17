<template>
  <client-only>
    <ui-dialog v-model="modelValue" show-close class="header-search-dialog">
      <template #header-content>
        <ui-autocomplete class="header-search__autocomplete" v-model="searchValue" label="What can we help you to find ?" />
      </template>

      <div class="header-search">
        <div class="header-search__content">
          <template v-if="suggestions.length">
            <div class="header-search__the-most">
              <h5>The Most Searched Items</h5>

              <div class="header-search__the-most-content">
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
              </div>
            </div>
            <div class="header-search__the-most">
              <h5>Most used keywords</h5>

              <div class="header-search__the-most-content">
                <div class="header-search__the-most-item text-body-lg">Tablets</div>
                <div class="header-search__the-most-item text-body-lg">Headphones</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">Smartphones</div>
                <div class="header-search__the-most-item text-body-lg">Smartwatch</div>
                <div class="header-search__the-most-item text-body-lg">Tablets</div>
                <div class="header-search__the-most-item text-body-lg">Headphones</div>
                <div class="header-search__the-most-item text-body-lg">MacBook Pro</div>
                <div class="header-search__the-most-item text-body-lg">Smartphones</div>
              </div>
            </div>
          </template>

          <template v-else>
            <p class="body-md mt-16 color-grey-50">
              view 17 out of 30 results
            </p>
          </template>
        </div>
      </div>
    </ui-dialog>
  </client-only>
</template>

<script setup lang="ts">
import {UiAutocomplete, UiDialog} from "#shared/ui";
import {ref} from "vue";

const searchValue = ref('')
const suggestions = ref([])

const modelValue = defineModel('visible', {
  type: Boolean,
  default: false,
})
</script>

<style lang="scss" scoped>
.header-search {
  width: 808px;

  &__autocomplete {
    width: 517px;
  }

  &__the-most {
    max-width: 266px;

    &:first-child {
      margin-right: 32px;
    }
  }

  &__the-most-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    row-gap: 32px;
  }

  &__the-most-item {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__content {
    margin-top: 48px;
    display: flex;
  }
}
</style>
