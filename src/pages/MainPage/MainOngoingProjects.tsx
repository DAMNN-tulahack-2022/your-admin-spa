import React from 'react'

import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useData } from '@/hooks'
import { User } from '@/types'
import { GET_NAV_LINK } from '@/types/constants'
import { getGradeByUser } from '@/utils'

export const MainOngoingProjects: React.FC = () => {
  const navigate = useNavigate()
  const data = useData()
  const ongoing = data.projects.filter((project: any) => !project?.completed)
  const mainOngoing = ongoing.slice(0, 3)

  return (
    <List>
      {mainOngoing.map(ongoingProject => {
        const teamLead = data.users.find(
          ({ id }) => ongoingProject.teamleadId === id,
        ) as User
        return teamLead ? (
          <ListItem
            key={ongoingProject.title}
            sx={{
              border: '2px solid #E0D8EA',
              borderRadius: 2,
              mb: 2,
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography fontWeight={700} gutterBottom>
                  {ongoingProject.title}
                </Typography>
              }
              secondary={
                <ListItemButton
                  onClick={() => navigate(GET_NAV_LINK.userPage(teamLead.id))}
                >
                  <ListItemIcon>
                    <Avatar
                      alt="team lead"
                      src={teamLead?.avatarUrl}
                      sx={{ width: 36, height: 36 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${teamLead.lastName} ${teamLead.firstName}`}
                    secondary={getGradeByUser(teamLead, data)?.label}
                  />
                </ListItemButton>
              }
            />
          </ListItem>
        ) : null
      })}
    </List>
  )
}
