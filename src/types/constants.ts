export enum Endpoints {
  Todos = 'todos',
  Cache = 'cache',
  User = 'user',
}

export const MAP_ENDPOINT_TO_GET_URL: Record<
  Endpoints,
  (...values: any) => string
> = {
  [Endpoints.Todos]: (id: string) => `${Endpoints.Todos}/${id}`,
  [Endpoints.Cache]: () => Endpoints.Cache,
  [Endpoints.User]: () => Endpoints.User,
}
