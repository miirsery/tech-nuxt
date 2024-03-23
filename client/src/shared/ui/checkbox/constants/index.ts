import type {InjectionKey, WritableComputedRef} from "vue";

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<Array<string | number | boolean>>
  changeEvent?: (...args: any) => any
}

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')
