import React, { createContext } from 'react'

import { useQuery } from '@tanstack/react-query'

import { useAxios } from '@/hooks/useAxios'
import { Children, Data } from '@/types'

export interface IDataContext {
  isLoading: boolean
  hasError: boolean
  data: Data
}

export const DataContext = createContext<IDataContext | null>(null)

export const DataProvider: React.FC<{ children: Children }> = ({
  children,
}) => {
  const axios = useAxios()
  const queryResult = useQuery<Data, any, any, any>({
    queryKey: ['data'],
    queryFn: () => axios.get<Data>('data').then(data => data),
  })
  return (
    <DataContext.Provider
      value={{
        isLoading: queryResult.isLoading,
        hasError: !!queryResult.error,
        data: queryResult.data,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
