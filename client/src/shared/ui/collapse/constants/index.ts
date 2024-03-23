import type { InjectionKey, Ref } from 'vue'
import type { CollapseActiveNameType } from '../types'

export interface ICollapseContext {
  activeNames: Ref<Array<CollapseActiveNameType>>
  handleItemClick: (name: CollapseActiveNameType) => void
}

export const collapseContextKey: InjectionKey<ICollapseContext> =
  Symbol('collapseContextKey')
