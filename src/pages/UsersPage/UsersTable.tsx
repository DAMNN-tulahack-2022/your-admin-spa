import React from 'react'

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Button,
  IconButton,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { DialogButton } from '@/components/DialogButton'
import { useData } from '@/hooks'
import {
  Endpoints,
  GET_NAV_LINK,
  MAP_ENDPOINT_TO_GET_URL,
} from '@/types/constants'

export const UsersTable: React.FC = () => {
  const { t } = useTranslation()
  const navige = useNavigate()
  const getGithubProfileUrl = MAP_ENDPOINT_TO_GET_URL[Endpoints.GithubProfile]
  const { users } = useData()

  return (
    <TableContainer component={Paper} sx={{ height: '80vh' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Stack direction="row" gap={0.5}>
                {t('login')} <GitHubIcon />
              </Stack>
            </TableCell>
            <TableCell>{t('FIO')}</TableCell>
            <TableCell>{t('grade')}</TableCell>
            <TableCell>{t('role')}</TableCell>
            <TableCell>{t('vacancy')}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={`${user.id}-${user.login}-${user.lastName}`}>
              <TableCell>
                <Link
                  underline="hover"
                  href={getGithubProfileUrl(user.login)}
                  target="_blank"
                >
                  {user.login}
                </Link>
              </TableCell>
              <TableCell>{`${user.lastName} ${user.firstName[0]} ${user.middleName[0]}`}</TableCell>
              <TableCell>{user.totalExperience}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>
                <DialogButton
                  title={t('deleteUser')}
                  renderContent={() => t('areYouSureWantDeleteUser')}
                  renderAction={() => (
                    // TODO: delete user
                    <Button color="error">{t('delete')}</Button>
                  )}
                  renderButton={handleClickOpen => (
                    <IconButton color="error" onClick={handleClickOpen}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  )}
                />
              </TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => navige(GET_NAV_LINK.userPage(user.id))}
                >
                  <ArrowForwardOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
