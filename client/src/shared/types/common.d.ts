export namespace CommonTypes {
  type CharacteristicType = {
    title: string
    value: string
  }

  type BreadcrumbType = {
    title: string
    link?: string
  }

  type BreadcrumbsType = Array<BreadcrumbType>

  type Nullable<T> = null | T

  type NonNegativeIntegerType<T extends number> =
    number extends T
      ? never
      : `${T}` extends `-${string}` | `${string}.${string}`
        ? never
        : T;

}
