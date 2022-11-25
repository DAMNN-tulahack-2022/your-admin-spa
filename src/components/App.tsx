import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { UnauthLayout } from '@/layouts'
import { AuthLayout } from '@/layouts/AuthLayout'
import { LoginPage, MainPage } from '@/pages'

export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route element={<UnauthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}
