import type {ProductCatalogTypes} from "../../product/types";

export const HEADER_CATALOG_DUMMY_DATA: ProductCatalogTypes.Response = [
  {
    uuid: 'qwerty-12334',
    icon_name: 'mobile',
    title: 'Mobile Phones',
    short_title: null,
    slug: 'mobile-phones',
    sub_categories: [
      {
        uuid: 'qwerty-1234-1',
        icon_name: 'mobile-programming',
        title: 'Smart Phones',
        short_title: null,
        slug: 'smart-phones',
        children: [
          {
            uuid: 'qwerty-1234-1-1',
            image: 'https://i.pinimg.com/originals/59/9e/af/599eafd966ff901743f207e0ee890fa8.jpg',
            title: 'Watch & Earpods',
          },
          {
            uuid: 'qwerty-1234-1-2',
            image: 'https://i.pinimg.com/originals/63/d7/fd/63d7fd9f37ced9fb0c1b0138db784a78.jpg',
            title: 'Holder',
          },
          {
            uuid: 'qwerty-1234-1-3',
            image: 'https://diskomir.ru/upload/resize_cache/webp/iblock/dfd/nzb5o5nmhoefz2ebecnsc14q60olp9xy/plakat-bumazhnyy-sono-kisekae-ningyou-wa-koi-wo-suru-marin-kitagawa.webp',
            title: 'Power cables',
          },
          {
            uuid: 'qwerty-1234-1-4',
            image: 'https://sun9-61.userapi.com/impg/_9DLR39Cah4CuLGa3-9VpUh7esi3LAVevvZTZQ/g3eQBiZ-BVs.jpg?size=931x1280&quality=95&sign=371b631529256412aac5f88c8dbccc40&c_uniq_tag=KfQMNSuaFHgv2qm8JXAtAeOnAMrN3mprtcD1T8QiJYU&type=album',
            title: 'Cases & Protection',
          },
        ]
      },
      {
        uuid: 'qwerty-1234-2',
        icon_name: 'devices',
        title: 'Accessories',
        short_title: null,
        slug: 'accessories',
        children: [
          {
            uuid: 'qwerty-1234-2-1',
            image: '',
            title: 'Watch & Earpods',
          },
          {
            uuid: 'qwerty-1234-2-2',
            image: 'https://i.pinimg.com/originals/63/d7/fd/63d7fd9f37ced9fb0c1b0138db784a78.jpg',
            title: 'Holder',
          },
        ]
      }
    ]
  },
  {
    uuid: 'qwerty-12335',
    icon_name: 'monitor',
    title: 'Laptops & Computers',
    short_title: 'laptops',
    slug: 'laptops-and-computers',
    sub_categories: []
  }
]
