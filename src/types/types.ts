import React from 'react'

import { UserRole } from '@/types/constants'

export type Children = React.ReactNode | React.ReactNode[]

export interface Admin {
  login: string
  id: string
}

export interface NavItem {
  to: string
  label: string
  icon: React.ElementType
}

export type ProcessString = (...values: any) => string

export interface Project {
  id: string
  title: string
  desciption: string
  teamLeadId: string
  technologies: string[]
}

export interface User {
  id: string
  login: string
  firstName: string
  lastName: string
  middleName: string
  avatarUrl: string
  viewedPostsId: string[]
  currentProjectId: string
  completedProjectsId: string[]
  grade: string
  technologiesId: string[]
  role: UserRole
  vacancy: string
}
