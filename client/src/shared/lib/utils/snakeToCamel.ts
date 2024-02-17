type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}`
  : Lowercase<S>;

export function snakeToCamel<T extends Record<string, any>>(obj: T): { [K in keyof T as SnakeToCamelCase<K & string>]: T[K] extends Record<string, any> ? ReturnType<typeof snakeToCamel> : T[K] } {
  if (Array.isArray(obj)) {
    return obj.map(item => snakeToCamel(item)) as any;
  }

  if (typeof obj === 'object' && obj !== null) {
    const newObj = {} as any;

    Object.keys(obj).forEach(key => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()) as keyof T & string;

      newObj[camelKey] = snakeToCamel(obj[key]);
    });

    return newObj;
  }

  return obj;
}
