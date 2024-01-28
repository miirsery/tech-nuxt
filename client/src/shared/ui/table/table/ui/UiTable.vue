<template>
  <div class="ui-table">
    <div class="ui-table__wrapper">
      <table role="table">
        <thead role="rowgroup">
          <tr role="rowheader">
            <th v-for="(prop, index) in defaultSlotProps" :key="index" role="columnheader">
              {{ prop.label }}
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
        <tr v-for="(item, index) in props.data" :key="index">
<!--          <slot :rowData="item" />-->


          <td v-for="(slot, indexSlot) in defaultSlot" :key="indexSlot">
            <div class="cell" v-if="slot?.children">
              <template v-for="(slotItem, slotItemIndex) in slot?.children.default()" :key="slotItemIndex">
<!--                <component :is="render(slotItem, item)" class="qwe" />-->
                <slot :data="item" />
              </template>
            </div>

            <template v-for="(itemProp, itemIndex) in slot.props" :key="itemIndex">
              <div class="cell-else">
                {{ item[itemProp] }}
              </div>
            </template>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineSlots, h } from "vue";

type Props = {
  data: Array<any>
}

type SlotProps = {
  rowData: any
}

const props = defineProps<Props>();

const slots = defineSlots<SlotProps>();

const defaultSlot = computed(() => slots?.default?.());

const defaultSlotProps = computed(() => {
  return slots?.default().map((slot) => slot.props);
});

const render = (data: any, props: any) => {
  return h('div', {...data})
}
</script>

<style lang="scss" scoped>
.ui-table {
  &__hidden {
    display: none;
  }
}
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
