import React from 'react'
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {
  return (
    <Bar data={props.data} options={
      {
        title: {
          display: true,
          text: props.titleText,
          fontSize: 16
        }
      },
      {
        legend: {
          display: true,
          position: props.legendPos
        }
      }
    } />
  )
}

export default BarChart
