<template>
  <div class="ui-table-column">
    <!-- Используйте rowData по своему усмотрению -->
<!--    <slot :rowData="rowData" />-->
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineSlots, inject } from 'vue';

const props = defineProps({
  rowData: Object
});
</script>
