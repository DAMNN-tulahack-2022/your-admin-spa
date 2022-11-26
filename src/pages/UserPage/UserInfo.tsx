import React from 'react'

import { Chip, Link, ListItem, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Block } from '@/components/Block'
import { useData } from '@/hooks'
import { Children, User } from '@/types'
import { Endpoints, MAP_ENDPOINT_TO_GET_URL } from '@/types/constants'
import { getCurrentProjectByUser, getSkillByUser } from '@/utils'

interface RowProps {
  label: string
  renderValue: () => Children
  disableGutters?: boolean
}

const Row: React.FC<RowProps> = ({ label, renderValue, disableGutters }) => {
  return (
    <Stack
      gap={0.5}
      direction="row"
      alignItems="center"
      py={disableGutters ? 0 : 0.5}
    >
      <Typography fontWeight={700}>{label}: </Typography>
      {renderValue()}
    </Stack>
  )
}

interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const data = useData()
  const { t } = useTranslation()
  const getGithubProfileUrl = MAP_ENDPOINT_TO_GET_URL[Endpoints.GithubProfile]
  return (
    <Block sx={{ flexGrow: 1 }}>
      <Row
        label={t('FIO')}
        renderValue={() => (
          <Typography>{`${user.lastName} ${user.firstName} ${user.middleName}`}</Typography>
        )}
      />
      <Row
        label={t('login')}
        renderValue={() => (
          <Typography>
            <Link
              underline="hover"
              href={getGithubProfileUrl(user.login)}
              target="_blank"
            >
              {user.login}
            </Link>
          </Typography>
        )}
      />
      <Row
        label={t('skills')}
        renderValue={() => (
          <Stack
            direction="row"
            justifyContent="center"
            component="ul"
            gap={0.5}
          >
            {getSkillByUser(user, data).map(({ label: skillLabel }) => (
              <ListItem key={skillLabel} disableGutters>
                <Chip label={skillLabel} onDelete={() => {}} />
              </ListItem>
            ))}
          </Stack>
        )}
      />
      <Row
        label={t('currentProject')}
        renderValue={() => (
          <Typography>{getCurrentProjectByUser(user, data)?.title}</Typography>
        )}
      />
      <Row
        label={t('experience')}
        renderValue={() => <Typography>{user.totalExperience}</Typography>}
      />
    </Block>
  )
}
