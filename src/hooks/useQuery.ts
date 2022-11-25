import { useQuery as useReactQuery } from '@tanstack/react-query'
import {
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query/src/types'

import { useAxios } from '@/hooks/useAxios'
import { Endpoints, MAP_ENDPOINT_TO_GET_URL } from '@/types/constants'

export interface useQueryConfig {
  params?: any
  options?: UseQueryOptions
}

export const useQuery = <TData>(
  endpoint: Endpoints,
  config?: useQueryConfig,
): UseQueryResult<TData, any> => {
  const axios = useAxios()
  const getUrl = MAP_ENDPOINT_TO_GET_URL[endpoint]

  return useReactQuery<TData, any, any, any>({
    queryKey: [endpoint],
    queryFn: () => axios.get(getUrl(config?.params)).then(response => response),
    ...config?.options,
  })
}
