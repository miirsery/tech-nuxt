<template>
  <slot :handle-keydown="onKeydown" />
</template>

<script setup lang="ts">
const onKeydown = (e: KeyboardEvent) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>

</style>
