import React from 'react'
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  const monthWords = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



  return (
    <Doughnut data={props.data} options={
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

export default DoughnutChart
