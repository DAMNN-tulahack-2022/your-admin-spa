import React, { Component } from 'react'

import { Alert } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { CenterContent } from '@/components/CenterContent'
import { LanguageSwitch } from '@/components/LanguageSwitch'

interface Props {
  children?: React.ReactNode
}

interface State {
  hasError: boolean
}

const ErrorMessage: React.FC = () => {
  const { t } = useTranslation()
  return <Alert severity="error">{t('genericError')}</Alert>
}

export default class ErrorBoundry extends Component<Props, State> {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <CenterContent>
          <ErrorMessage />
          <LanguageSwitch />
        </CenterContent>
      )
    }

    return this.props.children
  }
}
