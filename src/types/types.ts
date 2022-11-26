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

export interface User {
  id: string
  login: string
  viewedPostsIds: string[]
  firstName: string
  lastName: string
  middleName: string
  avatarUrl: string
  currentProjectId: string
  completedProjectsIds: string[]
  skillsIds: string[]
  role: UserRole
  totalExperience: number
  vacancyId: string
}

export interface Article {
  title: string
  description: string
  id: string
  authorId: string
  totalViewed: number
  skills_ids: string[]
  experience: number
}

export interface Project {
  title: string
  id: string
  desciption: string
  teamLeadId: string
  skillsIds: string[]
  usersIds: string[]
  experience: number
}

export interface VacancyProgress {
  gradesIds: string[]
  vacancyId: string
  id: string
}

export interface Grade {
  label: string
  description: string
  experience: number
  needsApproval: string
  id: string
}

export interface Skill {
  label: string
  id: string
}

export interface Vacancy {
  label: string
  id: string
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
