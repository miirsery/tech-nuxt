<template>
  <div class="instalment">
    <ui-table :data="tableData">
      <ui-table-column field="id" label="ID" width="100" />
      <ui-table-column field="title" label="Title" width="300" />
      <ui-table-column field="email" label="Email" />
      <ui-table-column label="Description">
        <template #default="scope">
          <div>
            {{ scope }}
            <img src="https://torrent-rose.ru/_ld/161/73699329.jpg" width="40" height="40" />
          </div>
        </template>
      </ui-table-column>
    </ui-table>
  </div>
</template>

<script setup lang="ts">
import {useBreadcrumbs} from "#widgets/base-layout-breadcrumbs";
import {UiTable} from "#shared/ui";
import {ref} from "vue";
import {definePageMeta, useSeoMeta} from "#imports";
import UiTableColumn from "#shared/ui/table/table-column/ui/ui-table-column";

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
  },
  {
    id: 3,
    title: 'Title-3',
    email: 'testl@example.com',
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

useSeoMeta({
  title: 'Instalment'
})

definePageMeta({
  title: 'Instalment',
})
</script>

<style lang="scss" scoped>

</style>
