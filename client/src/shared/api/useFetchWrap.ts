import type { AvailableRouterMethod, NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import type { AsyncDataOptions } from 'nuxt/dist/app/composables/asyncData';
import {changeSnakeCaseToCamel} from "#shared/lib/utils";
import {useAsyncData} from "#app/composables/asyncData";

type ResponseType<T> = {
  data: T
  errors: Array<Record<string, Array<string>>>
  messages: Array<string>
}

type FetchWrapOptionsType<T> = {
  url: string
  fetchOptions?: NitroFetchOptions<NitroFetchRequest & AvailableRouterMethod<string>>
  dataOptions?: AsyncDataOptions<ResponseType<T>>
}

export default async <
  T extends Record<string, any> = Record<string, any>
>({
  url,
  dataOptions = {},
  fetchOptions = {}
}: FetchWrapOptionsType<T>) => {
  // const runtimeConfig = useRuntimeConfig()
  const uniqueKey = url

  // const baseUrl =
  //   process.env.NODE_ENV === 'production' || process.server ? runtimeConfig.public.env.NUXT_VUE_APP_BASE_URI : ''

  return useAsyncData<ResponseType<T>, ResponseType<T>, ResponseType<T>>(
    uniqueKey,
    () =>
      $fetch<ResponseType<T>>(uniqueKey, {
        method: 'get',
        responseType: 'json',
        ...fetchOptions,
      }),
    {
      transform: (response): ResponseType<T> => {
        return {
          data: changeSnakeCaseToCamel(response.data as T),
          errors: response.errors,
          messages: response.messages,
        };
      },
      ...(dataOptions ? dataOptions : {}),
    }
  )
}
