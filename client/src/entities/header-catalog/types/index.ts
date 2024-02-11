export namespace HeaderCatalogTypes {
  export type One = {
    uuid: string
    icon_name: string
    title: string
    slug: string
    sub_categories?: Array<One>
    children?: Array<ChildrenDetail>
  }

  type ChildrenDetail = {
    uuid: string
    image: string
    title: string
  }

  export type All = Array<One>
}
