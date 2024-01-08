<template>
  <dl class="ui-product-characteristics">
    <div v-for="(characteristics, index) in props.characteristics" :key="index" class="ui-product-characteristics__item">
      <dt class="ui-product-characteristics__term">
        <span class="ui-product-characteristics__term-text">
          {{ characteristics.title }}
        </span>
      </dt>
      <dd class="ui-product-characteristics__value">{{ characteristics.value }}</dd>
    </div>
  </dl>
</template>
<script setup lang="ts">
import type {CommonTypes} from "#shared/types";

type Props = {
  titlePosition: 'top' | 'bottom'
  characteristics: Array<CommonTypes.CharacteristicType>
}

// DEBT: Добавить изменение позиции названия.
const props = withDefaults(defineProps<Props>(), {
  titlePosition: 'top'
})
</script>

<style lang="scss" scoped>
.ui-product-characteristics {
  margin: 0;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  &__item {
    display: flex;
  }

  &__term {
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    width: calc(50% - 4px);
    height: fit-content;
    margin-right: 4px;

    &::after {
      content: '';
      left: 0;
      bottom: 2px;
      width: 100%;
      position: absolute;
      display: block;
      border-bottom: 1px dashed var(--color-dark);
    }
  }

  &__term-text {
    background-color: var(--color-white);
    display: inline-block;
    position: relative;
    z-index: 2;
    width: fit-content;
  }

  &__value {
    margin: 0;
    width: 40%;
  }
}
</style>
