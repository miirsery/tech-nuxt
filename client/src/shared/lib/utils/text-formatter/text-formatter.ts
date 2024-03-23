type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}`
  : Lowercase<S>;

/*
* Функция, которая преобразует snake_case в camelCase.
* Используется исключительно ради разбора функционала TS и useAsyncData.
*
* Использовать в production опасно для вашей жизни.
* */
export function changeSnakeCaseToCamel<
  T extends Record<string, any>,
  Output extends Record<string, any> = { [K in keyof T as SnakeToCamelCase<K & string>]: T[K] extends Record<string, any> ? ReturnType<typeof changeSnakeCaseToCamel> : T[K] }
>(obj: T): Output {
  if (Array.isArray(obj)) {
    return obj.map(item => changeSnakeCaseToCamel(item)) as any;
  }

  if (typeof obj === 'object' && obj !== null) {
    const newObj = {} as any;

    Object.keys(obj).forEach(key => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()) as keyof T & string;

      newObj[camelKey] = changeSnakeCaseToCamel(obj[key]);
    });

    return newObj;
  }

  return obj as Output;
}


type MarkTextOptionsType = {
  repString: string
  fullString: string
  tag?: 'strong' | 'span'
  options?: {
    class?: HTMLElement['className']
    style?: HTMLElement['style']
  }
}

export const markText = (params: MarkTextOptionsType) => {
  const {
    repString,
    fullString,
    tag = 'strong',
    options,
  } = params

  const regex = new RegExp(repString, 'gi')

  return fullString.replace(regex, (match) => `<${tag} class="${options?.class}">${match}</${tag}>`)
}
