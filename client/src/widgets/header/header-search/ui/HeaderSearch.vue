<template>
  <client-only>
    <ui-dialog v-model="modelValue" show-close class="header-search-dialog">
      <template #header-content>
        <ui-autocomplete
          v-model="searchValue"
          :suggestions="suggestions"
          class="header-search__autocomplete"
          label="What can we help you to find ?"
          @search="searchHandler"
        />
      </template>

      <div class="header-search">
        <div class="header-search__content">
          <div v-if="!suggestions.length" class="header-search__content-the-most">
            <div class="header-search__response the-most">
              <h5>The Most Searched Items</h5>

              <div class="header-search__response-content">
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
              </div>
            </div>
            <div class="header-search__response the-most">
              <h5>Most used keywords</h5>

              <div class="header-search__response-content">
                <div class="header-search__response-item text-body-lg">Tablets</div>
                <div class="header-search__response-item text-body-lg">Headphones</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">Smartphones</div>
                <div class="header-search__response-item text-body-lg">Smartwatch</div>
                <div class="header-search__response-item text-body-lg">Tablets</div>
                <div class="header-search__response-item text-body-lg">Headphones</div>
                <div class="header-search__response-item text-body-lg">MacBook Pro</div>
                <div class="header-search__response-item text-body-lg">Smartphones</div>
              </div>
            </div>
          </div>

          <div v-else class="header-search__result">
            <p class="body-md mt-16 color-grey-50">
              view 17 out of 30 results
            </p>

            <div class="header-search__response">
              <div class="header-search__response-text">
                <div v-for="result in suggestions" :key="result.id" class="header-search__response-item">
                  <span v-html="result.title" />
                </div>

                <ui-button fill-style="text">
                  Tap for more
                </ui-button>
              </div>

              <div class="header-search__response-categories">
                <product-preview-card v-for="category in categories" :category="category" :key="category.uuid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ui-dialog>
  </client-only>
</template>

<script setup lang="ts">
import {UiAutocomplete, UiButton, UiDialog} from "#shared/ui";
import {onUnmounted, ref, watch} from "vue";
import {searchApi} from "#entities/search";
import {$fetch} from "ofetch";
import {markText} from "#shared/lib/utils";
import {HEADER_CATALOG_DUMMY_DATA} from "../../../../entities/catalog";
import {ProductPreviewCard} from "#entities/product";

const searchValue = ref('')
const suggestions = ref([])
const categories = ref(HEADER_CATALOG_DUMMY_DATA[0].sub_categories[0].children)

const modelValue = defineModel('visible', {
  type: Boolean,
  default: false,
})

watch(() => modelValue.value, (value) => {
  if (!value) {
    setTimeout(() => {
      searchValue.value = ''
      suggestions.value.length = 0
    }, 300)
  }
})

const searchHandler = async (query: string) => {
  // const { data } = await searchApi.searchProducts(query)

  // if (data.value) {
  //   console.log(data.value)
  // }
  const data = await $fetch('https://jsonplaceholder.typicode.com/todos/')

  if (data) {
    suggestions.value = data.splice(0, 17).map((item) => {
      return {
        ...item,
        title: markText({
          repString: query,
          fullString: item.title,
          tag: 'span',
          options: {
            class: 'color-grey-71'
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  &__autocomplete {
    width: 517px;
  }

  &__response {
    display: flex;


    &.the-most {
      flex-direction: column;
    }

    &:first-child {
      margin-right: 32px;
    }
  }

  &__response-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    row-gap: 32px;
  }

  &__response-item {
    flex: 0 0 136px;
    max-width: 136px;

   @include truncate(3, 136px, block);
  }

  &__content {
    margin-top: 48px;
    display: flex;
  }

  &__content-the-most {
    max-width: 808px;
    display: flex;
  }

  &__response-text {
    display: flex;
    flex-wrap: wrap;
    min-width: 350px;
    row-gap: 24px;
    margin-right: 28px;
    width: 350px;
    column-gap: 55px;
  }

  &__response-categories {
    display: flex;
    flex-wrap: wrap;
    max-width: 543px;
    gap: 24px;
  }
}
</style>
