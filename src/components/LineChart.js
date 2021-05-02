import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
  return (
    <Line data={props.data} options={
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

export default LineChart
