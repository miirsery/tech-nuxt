import type { AvailableRouterMethod, NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import type { AsyncDataOptions } from 'nuxt/dist/app/composables/asyncData';
import {useAsyncData} from "#imports";

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

type FetchWrapOptionsType<T> = {
  url: string
  fetchOptions?: NitroFetchOptions<NitroFetchRequest & AvailableRouterMethod<string>>
  dataOptions?: AsyncDataOptions<T>
}

export default async <T = unknown>({ url, dataOptions, fetchOptions }: FetchWrapOptionsType<T>) => {
  // const runtimeConfig = useRuntimeConfig()
  const uniqueKey = url
  //
  // const baseUrl =
  //   process.env.NODE_ENV === 'production' || process.server ? runtimeConfig.public.env.NUXT_VUE_APP_BASE_URI : ''

  return useAsyncData<ResponseType<T>, ResponseType<[]>>(
    uniqueKey,
    () =>
      $fetch<T>(uniqueKey, {
        method: 'get',
        responseType: 'json',
        ...fetchOptions,
      }),
    {
      ...dataOptions,
    }
  )
}
