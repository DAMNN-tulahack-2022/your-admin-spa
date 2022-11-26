import React, { useState } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Children } from '@/types'

interface Props {
  title: string
  renderButton: (handleClickOpen: () => void) => React.ReactNode
  renderContent: () => Children
  renderAction: () => React.ReactNode
  handleSubmit?: (values: any) => void
}

export const DialogButton: React.FC<Props> = ({
  title,
  renderButton,
  renderContent,
  renderAction,
  handleSubmit = () => {},
}) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      {renderButton(handleClickOpen)}
      <Dialog onClose={handleClose} open={open}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{renderContent()}</DialogContent>
          <DialogActions onClick={handleClose}>
            <Button>{t('cancel')}</Button>
            {renderAction()}
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}
