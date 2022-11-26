import React from 'react'

import { AutocompleteField } from '@/components/Fields'
import { useData } from '@/hooks'
import { UserOption } from '@/pages/ProjectsPage/UserOption'
import { UserRole } from '@/types/constants'

interface Props {
  filterByRole: UserRole
  name: string
  label: string
  multiple?: boolean
}

export const UsersAutocompleteField: React.FC<Props> = ({
  filterByRole,
  name,
  label,
  multiple = false,
}) => {
  const { users } = useData()
  const teamLeads = users.filter(user => user.role === filterByRole)

  return (
    <AutocompleteField
      multiple={multiple}
      name={name}
      label={label}
      options={teamLeads}
      getOptionLabel={option => `${option.lastName} ${option.firstName}`}
      renderOption={(props: any, option) => (
        <UserOption
          {...option}
          buttonProps={props}
          key={option.firstName + option.id}
        />
      )}
    />
  )
}
