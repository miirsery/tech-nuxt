<template>
  <div class="instalment">
    <ui-table class="instalment__table">
      <ui-table-header>
        <ui-table-row>
          <ui-table-head />
          <ui-table-head class="instalment__table-head-description">
            Description
          </ui-table-head>
          <ui-table-head>Due Amount </ui-table-head>
          <ui-table-head>Due Date</ui-table-head>

          <ui-table-head>
            Actual Amount
          </ui-table-head>
          <ui-table-head>
            Payment Date
          </ui-table-head>
          <ui-table-head>
            Status
          </ui-table-head>
          <ui-table-head>
            Total
          </ui-table-head>
        </ui-table-row>
      </ui-table-header>

      <ui-table-body>
          <ui-table-row v-for="item in tableData" :key="item.id">
            <ui-table-cell class="instalment__table-checkbox">
              <ui-checkbox v-model="item.checked" />
            </ui-table-cell>
            <ui-table-cell class="instalment__table-description">
              <img :src="item.images[0]" alt="Product" title="Product" />

              <span class="mr-12 text-body-sm">+{{ countImages(item.images) - 1  }}</span>

              <span>#{{ item.id }}</span>
            </ui-table-cell>

            <ui-table-cell class="instalment__table-due-amount">
              ${{ item.dueDate }}
            </ui-table-cell>

            <ui-table-cell>
              {{ item.dueDate }}
            </ui-table-cell>

            <ui-table-cell>
              <span v-if="item.actualAmount">
                ${{ item.actualAmount }}
              </span>
              <span v-else>-</span>
            </ui-table-cell>

            <ui-table-cell>
              <span v-if="item.paymentDate">
                ${{ item.actualAmount }}
              </span>
              <span v-else>-</span>
            </ui-table-cell>

            <ui-table-cell class="instalment__table-status">
              <div :class="['instalment__table-status-label', `instalment__table-status-label--${item.status}`]">
                {{ statusDictionary[item.status] }}
              </div>
            </ui-table-cell>

            <ui-table-cell>
              <span class="h6">
                ${{ item.total }}
              </span>
            </ui-table-cell>
          </ui-table-row>
      </ui-table-body>
    </ui-table>

    <div class="instalment__subtotal">
      <div class="instalment__subtotal-info">
        <div class="h5">Subtotal</div>

        <div>{{ subtotal }}</div>
      </div>

      <ui-button @click="handleInstalmentPay">
        Pay
      </ui-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// DEBT: Добавить красивый пересчет subtotal.
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";
import {computed, ref} from "vue";
import {definePageMeta, useSeoMeta} from "#imports";
import {
  UiTable,
  UiTableHeader,
  UiTableRow,
  UiTableHead,
  UiTableBody,
  UiTableCell,
  UiCheckbox,
  UiButton
} from "#shared/ui";
import {instalmentApi, type InstalmentTypes} from "#entities/instalment";
const { defineBreadcrumbs } = useBreadcrumbs()

const statusDictionary: Record<InstalmentTypes.One['status'], string> = {
  paid: 'Paid',
  'on-schedule': 'On schedule',
  overdue: 'Overdue',
}

const tableData = ref<Array<InstalmentTypes.One & { checked: boolean }>>([])

const subtotal = computed(() => tableData.value.filter((instalment) => instalment.checked).reduce((acc, total) => acc += +total.total, 0))

const countImages = (images: Array<string>) => {
  return images.length
}

const getInstalmentData = async () => {
  const {data} = await instalmentApi.getAll()

  if (data.value) {
    tableData.value = data.value.data.map((instalment) => {
      return {
        ...instalment,
        checked: false,
      }
    })
  }
}

const handleInstalmentPay = async () => {
  console.log('pay')
}

await getInstalmentData()

defineBreadcrumbs([
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Account',
    link: '/account',
  },
  {
    title: 'Payment & Instalments',
    link: '/account/payment-and-instalments',
  },
  {
    title: 'Instalment'
  }
])

useSeoMeta({
  title: () => 'Instalment'
})

definePageMeta({
  title: () => 'Instalment',
})
</script>

<style lang="scss" scoped>
.instalment {
  :deep(.ui-table) {
    .instalment {
      &__table-head-description {
        text-align: left;
      }

      &__table-checkbox {
        padding-right: 6px;
      }
    }
  }

  &__table-description {
    display: flex;
    align-items: center;

    img {
      width: 60px;
      height: 54px;
      border-radius: 4px;
      object-fit: contain;
    }
  }

  &__table-status {
    text-align: center;
  }

  &__table-due-amount {
    color: var(--color-secondary);
  }

  &__table-status-label {
    padding: 4px 9px;
    width: fit-content;
    border-radius: 8px;
    margin-inline: auto;

    &--paid {
      background-color: var(--color-success-light);
      border: 1px solid var(--color-success);
    }

    &--on-schedule {
      background-color: var(--color-primary-25);
      border: 1px solid var(--color-primary);
    }

    &--overdue {
      background-color: var(--color-error-light);
      border: 1px solid var(--color-error);
    }
  }

  &__subtotal {
    display: flex;
    align-items: center;
    margin-top: 32px;

    .ui-button {
      width: 168px;
    }
  }

  &__subtotal-info {
    margin-right: 16px;
    border-radius: 8px;
    background-color: var(--color-grey-f9);
    border: 1px solid var(--color-grey-f6);
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 310px;
    width: 100%;
    padding: 11px 24px;
  }
}
</style>
