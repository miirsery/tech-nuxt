import type { AvailableRouterMethod, NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import type { AsyncDataOptions } from 'nuxt/dist/app/composables/asyncData';
import {snakeToCamel} from "#shared/lib/utils";
import {useAsyncData} from "#app/composables/asyncData";

type ErrorType = {
  statusCode: number
  error: {
    type: string
    description: string
  }
}

type ResponseType<T> = {
  data: T
  errors: Array<Record<string, Array<string>>>
  messages: Array<string>
}

type FetchWrapOptionsType<T, U> = {
  url: string
  fetchOptions?: NitroFetchOptions<NitroFetchRequest & AvailableRouterMethod<string>>
  dataOptions?: AsyncDataOptions<ResponseType<T>, ResponseType<U>>
}

export default async <T, U = unknown>({ url, dataOptions = {}, fetchOptions = {} }: FetchWrapOptionsType<T, U>) => {
  // const runtimeConfig = useRuntimeConfig()
  const uniqueKey = url

  // const baseUrl =
  //   process.env.NODE_ENV === 'production' || process.server ? runtimeConfig.public.env.NUXT_VUE_APP_BASE_URI : ''

  return useAsyncData<ResponseType<T>, ErrorType>(
    uniqueKey,
    () =>
      $fetch<ResponseType<T>>(uniqueKey, {
        method: 'get',
        responseType: 'json',
        ...fetchOptions,
      }),
    {
      transform: (response): ResponseType<U> => snakeToCamel<ResponseType<T>>(response.data)
    }
  )
}
