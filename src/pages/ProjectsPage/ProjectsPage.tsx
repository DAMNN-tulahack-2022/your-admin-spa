import React from 'react'

import { useTranslation } from 'react-i18next'

import { PageTitle } from '@/components/PageTitle'
import { ProjectCreatingForm } from '@/pages/ProjectsPage/ProjectCreatingForm'

export const ProjectsPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle
        title={t('projects')}
        subtitle={t('hereYouCanCreateProjects')}
      />
      <ProjectCreatingForm />
    </>
  )
}
