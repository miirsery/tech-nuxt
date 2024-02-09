<template>
  <div class="instalment">
    <ui-table class="instalment__table">
      <ui-table-header>
        <ui-table-row>
          <ui-table-head>
            Invoice
          </ui-table-head>
          <ui-table-head>Status</ui-table-head>
          <ui-table-head>Method</ui-table-head>
          <ui-table-head class="text-right">
            Amount
          </ui-table-head>
        </ui-table-row>
      </ui-table-header>

      <ui-table-body>
          <ui-table-row v-for="item in tableData" :key="item.id">
            <ui-table-cell class="instalment__table-cell">
              <img :src="item.images[0]" />

              <span>{{ item.id }}</span>
            </ui-table-cell>

            <ui-table-cell>
              ${{ item.due_amount }}
            </ui-table-cell>

            <ui-table-cell>
              {{ item.due_date }}
            </ui-table-cell>

            <ui-table-cell>
              {{ item.actual_amount }}
            </ui-table-cell>

            <ui-table-cell>
              {{ item.payment_date }}
            </ui-table-cell>

            <ui-table-cell>
              {{ item.status }}
            </ui-table-cell>

            <ui-table-cell>
              {{ item.total }}
            </ui-table-cell>
          </ui-table-row>
      </ui-table-body>
    </ui-table>
  </div>
</template>

<script setup lang="ts">
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";
import {ref} from "vue";
import {definePageMeta, useSeoMeta} from "#imports";
import {UiTable, UiTableHeader, UiTableRow, UiTableHead, UiTableBody, UiTableCell } from "#shared/ui";
import type {InstalmentTypes} from "#entities/instalment/types";
import {instalmentApi} from "#entities/instalment/api";
const { defineBreadcrumbs } = useBreadcrumbs()

const tableData = ref<InstalmentTypes.All>([])

const getInstalmentData = async () => {
  const {data} = await instalmentApi.getAll()

  if (data.value) {
    tableData.value = data.value.data
  }
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
  &__table-cell {
    img {
      width: 60px;
      height: 54px;
      border-radius: 4px;
      object-fit: contain;
    }
  }
}
</style>
