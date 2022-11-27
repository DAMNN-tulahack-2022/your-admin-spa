import React from 'react'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import {
  Box,
  Button,
  IconButton,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useAxios } from '@/hooks'
import { Vacancy as IVacancy } from '@/types'

interface Props {
  vacancy: IVacancy
  handleClick: (id: number) => void
  selected: boolean
}

export const Vacancy: React.FC<Props> = ({
  vacancy,
  handleClick,
  selected,
}) => {
  const { palette } = useTheme()

  const queryClient = useQueryClient()
  const axios = useAxios()
  const { mutate } = useMutation({
    mutationFn: (id: number) => axios.delete(`/data/vacancies/${id}/remove`),
    onSuccess: ({ id }: any) => {
      queryClient.setQueryData(['data'], (data: any) => ({
        ...data,
        vacancies: data.vacancies.filter((vacancy: any) => vacancy?.id !== id),
      }))
    },
  })

  return (
    <Box
      display="flex"
      sx={{ border: `1px solid ${palette.grey.A200}`, mb: 2, borderRadius: 2 }}
    >
      <ListItemButton
        onClick={() => handleClick(vacancy.id)}
        selected={selected}
      >
        <ListItemText>{vacancy.label}</ListItemText>
      </ListItemButton>
      <IconButton color="error" onClick={() => mutate(vacancy?.id)}>
        <DeleteOutlineIcon />
      </IconButton>
    </Box>
  )
}
