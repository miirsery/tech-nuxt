<template>
  <div class="ui-table">
    <div class="ui-table__wrapper">
      <div class="ui-table__hidden">
        <slot />
      </div>

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
            <td v-for="(slot, indexSlot) in defaultSlot" :key="indexSlot">
              <div v-if="slot?.children" class="cell">
<!--                {{ slot?.children.body({ data: { image: '123' } }) }}-->
               <div>{{ render(slot?.children.body, {}) }}</div>
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

<script setup lang="ts" generic="T = unknown">
import {computed, h, onMounted, shallowRef, useSlots} from "vue";

type Props = {
  data: Array<T>
}

type Slots = {
  default?: () => HTMLElement
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ([]),
})

const slots = defineSlots<Slots>()
const defaultSlot = computed(() => slots?.default())
const defaultSlotProps = computed(() => slots?.default().map((slot) => slot.props))

const render = (item, data: any) => {
  const a =  h('div', item(), {
    props: { link: '123' }
  })

  console.log('a', a)
  // console.log('item', item()[0])

  return 'div'
}

onMounted(() => {
  console.log(defaultSlot.value)
  defaultSlot.value?.forEach((item) => {

  })

  console.log(defaultSlotProps.value)
})
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
