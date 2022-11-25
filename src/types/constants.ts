import { ProcessString } from '@/types/types'

export enum UserRole {
  User = 'user',
  TeamLead = 'teamLead',
}

export enum Endpoints {
  Todos = 'todos',
  Cache = 'cache',
  Admin = 'user',
}

export const MAP_ENDPOINT_TO_GET_URL: Record<Endpoints, ProcessString> = {
  [Endpoints.Todos]: (id: string) => `${Endpoints.Todos}/${id}`,
  [Endpoints.Cache]: () => Endpoints.Cache,
  [Endpoints.Admin]: () => Endpoints.Admin,
}

interface GetNavLink {
  mainPage: ProcessString
  projectsPage: ProcessString
  loginPage: ProcessString
}

export const GET_NAV_LINK: GetNavLink = {
  mainPage: () => '/',
  projectsPage: () => '/projects',
  loginPage: () => '/login',
}
