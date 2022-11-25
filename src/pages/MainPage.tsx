import React from 'react'

import { Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { QueryLoader } from '@/components/QueryLoader'
import { Endpoints } from '@/types/constants'

interface TodoItem {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const MainPage: React.FC = () => (
  <QueryLoader<TodoItem>
    endpoint={Endpoints.Todos}
    config={{
      params: 1,
    }}
    renderData={todoItem => (
      <Stack>
        <Typography gutterBottom>{todoItem.title}</Typography>
        <Typography>{todoItem.userId}</Typography>
        <NavLink to="/login">на страницу логина</NavLink>
        <Typography gutterBottom>{todoItem.title}</Typography>
        <Typography>{todoItem.userId}</Typography>
        <NavLink to="/login">на страницу логина</NavLink>
      </Stack>
    )}
  />
)
