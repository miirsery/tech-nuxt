import type { AvailableRouterMethod, NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import type { AsyncDataOptions } from 'nuxt/dist/app/composables/asyncData';
import {snakeToCamel} from "#shared/lib/utils";
import {useAsyncData} from "#app/composables/asyncData";

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

export default async <
  T = unknown,
  U = unknown
>({
  url,
  dataOptions = {},
  fetchOptions = {}
}: FetchWrapOptionsType<T, U>) => {
  // const runtimeConfig = useRuntimeConfig()
  const uniqueKey = url

  // const baseUrl =
  //   process.env.NODE_ENV === 'production' || process.server ? runtimeConfig.public.env.NUXT_VUE_APP_BASE_URI : ''

  return useAsyncData<ResponseType<T>, ResponseType<T>, ResponseType<U>>(
    uniqueKey,
    () =>
      $fetch<ResponseType<T>>(uniqueKey, {
        method: 'get',
        responseType: 'json',
        ...fetchOptions,
      }),
    {
      transform: (response) => snakeToCamel<ResponseType<T>, ResponseType<U>>(response.data as ResponseType<T>),
      ...(dataOptions ? dataOptions : {})
    }
  )
}
