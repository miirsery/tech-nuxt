<template>
  <div class="ui-table">
    <div class="ui-table__wrapper">
<!--      <table class="ui-table__inner">-->

<!--      </table>-->
      <div v-for="(item, index) in props.data" :key="index">
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends unknown">
type Props = {
  data: Array<T>
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ([]),
})
</script>

<style lang="scss" scoped>

</style>

<!--<script setup lang="ts" generic="T extends { id: string }">-->
<!--...-->

<!--defineProps<{-->
<!--  items: T[]-->
<!--  columns: TableColumn<T>[]-->
<!--}>()-->

<!--defineSlots<{-->
<!--  `cell(${string})`: (scope: { item: T }) => VNode-->
<!--}>()-->
<!--</script>-->

<!--<template>-->
<!--  ...-->
<!--  <tr v-for="item in items" :key=item="item.id">-->
<!--    <td v-for="column in columns" :key="column.key">-->
<!--      <slot :name="`cell(${column.key}`" :item="item" />-->
<!--    </td>-->
<!--  </tr>-->
<!--  <template>-->
