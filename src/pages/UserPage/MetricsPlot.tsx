import React from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import { Block } from '@/components/Block'

const data = [
  {
    name: 'Nov, 28',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Nov, 29',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Nov, 30',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Dec, 1',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Dec, 2',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Dec, 3',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dec 4',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const MetricsPlot: React.FC = () => {
  return (
    <Block>
      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </Block>
  )
}
