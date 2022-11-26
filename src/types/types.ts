import React from 'react'

import { UserRole } from '@/types/constants'

export type Children = React.ReactNode | React.ReactNode[]

export interface Admin {
  login: string
  id: number
}

export interface NavItem {
  to: string
  label: string
  icon: React.ElementType
}

export type ProcessString = (...values: any) => string

export interface User {
  id: number
  login: string
  viewedPostsIds: number[]
  firstName: string
  lastName: string
  middleName: string
  avatarUrl: string
  currentProjectId: number
  completedProjectsIds: number[]
  skillsIds: number[]
  role: UserRole
  totalExperience: number
  vacancyId: number
}

export interface Article {
  title: string
  description: string
  id: number
  authorId: number
  totalViewed: number
  skillsIds: number[]
  experience: number
}

export interface Project {
  title: string
  id: number
  desciption: string
  teamLeadId: number
  skillsIds: number[]
  usersIds: number[]
  experience: number
}

export interface VacancyProgress {
  gradesIds: number[]
  vacancyId: number
  id: number
}

export interface Grade {
  label: string
  description: string
  experience: number
  needsApproval: string
  id: number
}

export interface Skill {
  label: string
  id: number
}

export interface Vacancy {
  label: string
  id: number
}

export interface Data {
  users: User[]
  projects: Project[]
  skills: Skill[]
  vacanciesProgresses: VacancyProgress[]
  vacancies: Vacancy[]
  articles: Article[]
  grades: Grade[]
}
