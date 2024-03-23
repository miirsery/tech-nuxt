export const isNil = (val: any): val is null  => val === null
export const isUndefined = (val: any): val is undefined => val === undefined
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isPropAbsent = (prop: unknown): prop is null | undefined => isNil(prop)
