export type AuthorizationPayloadType = {
  email: string
  password: string
  staySignedIn: boolean
}

// DEBT: Скорее всего, придется разбивать на два типа
// fullName на клиенте и в API - full_name
export type RegistrationPayloadType = {
  fullName: string
  email: string
  password: string
}
