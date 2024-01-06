import type {InjectionKey, MaybeRef, Ref} from 'vue'
import {computed, getCurrentInstance, inject, unref} from 'vue'

export type IdInjectionContext = {
  prefix: number
  current: number
}

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

export const ID_INJECTION_KEY: InjectionKey<IdInjectionContext> =
  Symbol('elIdInjection')

export const useIdInjection = (): IdInjectionContext => {
  return getCurrentInstance()
    ? inject(ID_INJECTION_KEY, defaultIdInjection)
    : defaultIdInjection
}

export const useId = (deterministicId?: MaybeRef<string>): Ref<string> => {
  const idInjection = useIdInjection()

  const uid = getCurrentInstance()?.uid

  return computed(
    () =>
      unref(deterministicId) ||
      `${uid}-id-${idInjection.prefix}-${idInjection.current++}`
  )
}
