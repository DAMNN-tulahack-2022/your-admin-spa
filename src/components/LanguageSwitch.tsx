import React from 'react'

import { Switch } from '@mui/material'
import { useTranslation } from 'react-i18next'

enum Languages {
  en = 'en',
  ru = 'ru',
}

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language as Languages

  const swtichLanguage = async () => {
    await i18n.changeLanguage(
      currentLang === Languages.ru ? Languages.en : Languages.ru,
    )
  }

  return (
    <Switch checked={currentLang === Languages.ru} onChange={swtichLanguage} />
  )
}
