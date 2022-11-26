import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { UnauthLayout } from '@/layouts'
import { AuthLayout } from '@/layouts/AuthLayout'
import { LoginPage, MainPage } from '@/pages'
import { ProjectsPage } from '@/pages/ProjectsPage/ProjectsPage'
import { UsersPage } from '@/pages/UsersPage'
import { GET_NAV_LINK } from '@/types/constants'

export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={GET_NAV_LINK.mainPage()} element={<MainPage />} />
        <Route path={GET_NAV_LINK.projectsPage()} element={<ProjectsPage />} />
        <Route path={GET_NAV_LINK.usersPage()} element={<UsersPage />} />
      </Route>
      <Route element={<UnauthLayout />}>
        <Route path={GET_NAV_LINK.loginPage()} element={<LoginPage />} />
      </Route>
    </Routes>
  )
}
