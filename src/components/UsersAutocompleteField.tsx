import React from 'react'

import { AutocompleteField } from '@/components/Fields'
import data from '@/mock/data.json'
import { UserOption } from '@/pages/ProjectsPage/UserOption'

interface Props {
  name: string
  label: string
  multiple?: boolean
}

export const UsersAutocompleteField: React.FC<Props> = ({
  name,
  label,
  multiple = false,
}) => {
  // TODO: fetch users
  const teamLeads = data.teamLeads.map(
    ({ avatarUrl, firstName, lastName, id, levelTitle }) => ({
      avatarUrl,
      firstName,
      lastName,
      id,
      levelTitle,
    }),
  )

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
