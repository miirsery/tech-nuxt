<template>
  <div v-if="paneToRender === props.name" class="ui-tab-pane" role="tabpanel" aria-hidden="false">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {inject, type Ref} from "vue";

type Props = {
  name: string
  label?: string
  lazy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  lazy: false,
})

const paneToRender = inject('paneToRender') as Ref<string>
</script>
