import type {WritableComputedRef} from "vue";

export type CheckboxGroupProps = {
  change: (value: Array<string | number>) => void
  modelValue: WritableComputedRef<Array<string | number>>
}
