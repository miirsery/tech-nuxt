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
}
