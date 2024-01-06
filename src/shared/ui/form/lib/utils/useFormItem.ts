import {useId} from "#shared/lib/hooks";

export const useFormItem = () => {
  const value = useId().value

  return {
    value,
  }
}
