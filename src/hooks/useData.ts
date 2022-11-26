import { useDataContext } from '@/hooks/useDataProvider'
import { Data } from '@/types'

export const useData = (): Data => {
  const dataState = useDataContext()
  if (!dataState.data) {
    throw new Error('no data')
  }
  return dataState.data
}
