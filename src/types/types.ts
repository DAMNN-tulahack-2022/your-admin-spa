import React from 'react'

export type Children = React.ReactNode | React.ReactNode[]

export interface User {
  login: string
  id: string
}

export interface NavItem {
  to: string
  label: string
  icon: React.ElementType
}
