import React from 'react'

import { Grid, List } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { PageTitle } from '@/components/PageTitle'
import { MainOngoingProjects } from '@/pages/MainPage/MainOngoingProjects'
import { ProjectCreatingForm } from '@/pages/ProjectsPage/ProjectCreatingForm'

export const ProjectsPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle
        title={t('projects')}
        subtitle={t('hereYouCanCreateProjects')}
      />
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Block title={t('createNewProject') as any}>
            <ProjectCreatingForm />
          </Block>
        </Grid>
        <Grid item xs={7}>
          <Block title={t('onGoingProjects') as any}>
            <MainOngoingProjects showAll />
          </Block>
        </Grid>
      </Grid>
    </>
  )
}
