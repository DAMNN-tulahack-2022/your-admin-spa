import { useCallback } from 'react'

import { useSnackbar, VariantType } from 'notistack'

type UseSendToSnackbar = (options: Options) => void

interface Options {
  message: string
  variant: VariantType
}

export const useSendToShackbar = (): UseSendToSnackbar => {
  const { enqueueSnackbar } = useSnackbar()

  return useCallback<UseSendToSnackbar>(
    (options: Options) => {
      enqueueSnackbar(options.message, { variant: options.variant })
    },
    [enqueueSnackbar],
  )
}
