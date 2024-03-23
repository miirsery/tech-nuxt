import type {CommonTypes} from "#shared/types";

export namespace ProductCatalogTypes {
  export type ResponseOne = {
    uuid: string
    icon_name: string
    title: string
    short_title: CommonTypes.Nullable<string>
    slug: string
    sub_categories?: Array<ResponseOne>
    children?: Array<ChildrenDetail>
  }

  export type One = Pick<ResponseOne, 'uuid' | 'title' | 'slug'> & {
    iconName: string
    subCategories: Array<One>
    shortTitle: string
    children?: Array<ChildrenDetail>
  }

  // API: Добавить ссылку на категорию.
  export type ChildrenDetail = {
    uuid: string
    image: string
    title: string
  }

  export type Response = Array<ResponseOne>

  export type All = Array<One>
}
