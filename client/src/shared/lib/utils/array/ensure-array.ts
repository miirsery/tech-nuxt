export const unique = <T>(arr: T[]) => [...new Set(arr)]

type Many<T> = T | ReadonlyArray<T>

export const ensureArray = <T>(arr: Many<T>): Array<T> => {
  if (!arr && arr !==  0) return []

  // Всегда возвращаем массив, даже если это массив с одним элементом.
  return Array.isArray(arr) ? arr : [arr] as Array<T>
}
