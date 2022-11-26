import { ProcessString } from '@/types/types'

export enum UserRole {
  User = 'user',
  TeamLead = 'teamLead',
}

export enum Endpoints {
  Users = 'users',
  GithubProfile = 'https://github.com',
}

export const MAP_ENDPOINT_TO_GET_URL: Record<Endpoints, ProcessString> = {
  [Endpoints.Users]: (id?: string) => {
    return id ? `/users/${id}` : '/users'
  },
  [Endpoints.GithubProfile]: (login: string) =>
    `${Endpoints.GithubProfile}/${login}`,
}

interface GetNavLink {
  mainPage: ProcessString
  projectsPage: ProcessString
  loginPage: ProcessString
  usersPage: ProcessString
  userPage: ProcessString
}

export const GET_NAV_LINK: GetNavLink = {
  mainPage: () => '/',
  projectsPage: () => '/projects',
  loginPage: () => '/login',
  usersPage: () => '/users',
  userPage: (id?: string) => {
    return id ? `/users/${id}` : '/users/:id'
  },
}
