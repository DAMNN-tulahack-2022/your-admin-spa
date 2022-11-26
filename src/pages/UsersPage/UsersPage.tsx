import React from 'react'

import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { PageTitle } from '@/components/PageTitle'
import { UsersTable } from '@/pages/UsersPage/UsersTable'

export const UsersPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <PageTitle
        title={t('usersTable')}
        subtitle={t('hereYouCanManageUsers')}
      />
      <Block disablePadding>
        <UsersTable />
      </Block>
    </>
  )
}
