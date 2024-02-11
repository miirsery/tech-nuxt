<template>
  <ui-breadcrumbs class="base-layout-breadcrumbs">
    <ui-breadcrumbs-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.title" :to="breadcrumb.link">
      {{ breadcrumb.title }}
    </ui-breadcrumbs-item>
  </ui-breadcrumbs>
</template>

<style lang="scss" scoped>
.base-layout-breadcrumbs {
  margin-top: 24px;
  margin-bottom: 40px;
}
</style>
