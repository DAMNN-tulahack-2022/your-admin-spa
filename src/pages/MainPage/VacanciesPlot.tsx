import React from 'react'

import { useTranslation } from 'react-i18next'
import {
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from 'recharts'

import { useData } from '@/hooks'
import { getGradeByUser } from '@/utils'

const plotdata = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
]

export const VacanciesPlot: React.FC = () => {
  const data = useData()
  const { t } = useTranslation()
  // const usersCurrentGrades = data.users.map(
  //   user => getGradeByUser(user, data)?.label?.toLowerCase() || '',
  // )

  const vacanciesData = [
    {
      label: t('junior'),
      count: 4,
      // count: usersCurrentGrades.filter(grade => grade.includes('junior')),
    },
    {
      label: t('middle'),
      count: 12,
      // count: usersCurrentGrades.filter(grade => grade.includes('middle')),
    },
    {
      label: t('senior'),
      count: 6,
      // count: usersCurrentGrades.filter(grade => grade.includes('senior')),
    },
  ]

  return (
    <BarChart width={650} height={400} data={vacanciesData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  )
}
