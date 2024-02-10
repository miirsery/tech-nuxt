<template>
  <div class="ui-table__wrapper">
    <table class="ui-table">
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
// DEBT: Переделать таблицу.
</script>

<style lang="scss" scoped>
.ui-table {
  --ui-table-border-color: var(--color-grey-f6);
  border-collapse: separate;
  border-spacing: 0;

  &__wrapper {
    overflow: hidden;
  }

  :deep(tr) {
    th {
      border-bottom: 1px solid var(--ui-table-border-color);
      background: #eee;
      text-align: left;
      border-top: solid 1px var(--ui-table-border-color);

      &:first-child {
        border-left: 1px solid var(--ui-table-border-color);
      }

      &:last-child {
        border-right: 1px solid var(--ui-table-border-color);
      }
    }

    td {
      border-bottom: 1px solid var(--ui-table-border-color);

      &:first-child {
        border-left: 1px solid var(--ui-table-border-color);
      }

      &:last-child {
        border-right: 1px solid var(--ui-table-border-color);
      }
    }
    &:first-child {
      th {
        &:first-child {
          border-top-left-radius: 6px;
        }

        &:last-child {
          border-top-right-radius: 6px;
        }
      }
    }
    &:last-child {
      td {
        &:first-child {
          border-bottom-left-radius: 6px;
        }

        &:last-child {
          border-bottom-right-radius: 6px;
        }
      }
    }
  }

  :deep(thead) {
    background-color: var(--color-grey-f9);

    tr {
      border-bottom: 1px solid var(--ui-table-border-color);
    }

    th {
      padding-left: 8px;
      padding-right: 8px;
      text-align: center;
      height: 62px;
      font-weight: 500;
      line-height: 19px;
    }
  }

  :deep(tbody) {
    tr {
      border-bottom: 1px solid var(--ui-table-border-color);
    }

    td {
      padding: 18px;
      width: fit-content;
      vertical-align: middle;
      height: 80px;
      text-align: center;
      font-weight: 300;
    }
  }

  :deep(.ui-checkbox__inner) {
    border: 2px solid var(--color-grey-b4);
  }
}
</style>
