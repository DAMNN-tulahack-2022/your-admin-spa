import { useContext } from 'react'

import { DataContext, IDataContext } from '@/components/DataProvider'

export const useDataContext = (): IDataContext => {
  const dataContext = useContext(DataContext)
  if (!dataContext) {
    throw new Error('no context')
  }
  return dataContext
}
