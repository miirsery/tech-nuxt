export const ROUTE_NAMES = {
  MAIN: 'index',
  UI_KIT: 'uikit',
  PRODUCTS: 'products',
  BLOG: 'blog',
  FAQ: 'faq',
  CONTACT_US: 'contacts',
  ACCOUNT_PERSONAL_DATA: 'account-personal-data',
  ACCOUNT_PAYMENT_AND_INSTALMENTS: 'account-payment-and-instalments',
  ACCOUNT_PAYMENT_AND_INSTALMENTS_INSTALMENT: 'account-payment-and-instalments-instalment',
} as const

// Тип значения, которое содержится по одному из ключей объекта ROUTE_NAMES.
export type RouteNamesValueType = typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES]
// Тип, содержащий все ключи объекта ROUTE_NAMES.
export type RouteNamesKeysType = keyof typeof ROUTE_NAMES
// Тип, содержащий все ключи объекта ROUTE_NAMES. Доступен только для чтения.
export type RouteNamesAllValuesType = ReadonlyArray<RouteNamesValueType>
