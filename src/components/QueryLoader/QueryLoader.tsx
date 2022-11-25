import React from 'react'

import {
  DefaultEmpty,
  DefaultError,
  DefaultLoading,
} from '@/components/QueryLoader/DefaultComponents'
import { useQuery, useQueryConfig } from '@/hooks'
import { Endpoints } from '@/types/constants'

interface Props<T> {
  endpoint: Endpoints
  renderData: (data: T) => React.ReactNode
  config?: useQueryConfig
  LoadingComponent?: React.ElementType
  ErrorComponent?: React.ElementType
  EmptyComponent?: React.ElementType
}

export const QueryLoader = <T,>({
  endpoint,
  config,
  renderData,
  LoadingComponent = DefaultLoading,
  ErrorComponent = DefaultError,
  EmptyComponent = DefaultEmpty,
}: Props<T>) => {
  const queryResult = useQuery<T>(endpoint, config)
  const { data, isLoading, isError } = queryResult

  if (isLoading) {
    return <LoadingComponent />
  }

  if (isError) {
    return <ErrorComponent />
  }

  if (!data) {
    return <EmptyComponent />
  }

  return renderData(data) as any
}
