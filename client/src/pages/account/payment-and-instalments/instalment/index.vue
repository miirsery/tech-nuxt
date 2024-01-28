<template>
  <div class="instalment">
    <ui-table :data="tableData">
      <ui-table-column field="id" label="ID" width="100" />
      <ui-table-column field="title" label="Title" width="300" />
      <ui-table-column field="email" label="Email" />
      <ui-table-column label="Description">
        <template #body="data">
          {{ data }}
<!--          <img :src="data?.image" />-->
        </template>
      </ui-table-column>
    </ui-table>
  </div>
</template>

<script setup lang="ts">
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";
import {UiTable, UiTableColumn} from "#shared/ui";
import {ref} from "vue";

const { defineBreadcrumbs } = useBreadcrumbs()

const tableData = ref([
  {
    id: 1,
    title: 'Title',
    email: 'test-email@example.com',
    image: 'https://www.fonstola.ru/images/201206/fonstola.ru_78573.jpg'
  },
  {
    id: 2,
    title: 'Title-2',
    email: 'test-qwe-123email@example.com',
    image: 'https://www.fonstola.ru/images/201206/fonstola.ru_78573.jpg'
  }
])

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
</script>

<style lang="scss" scoped>

</style>
