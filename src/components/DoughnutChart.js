import React from 'react'
import { Doughnut } from "react-chartjs-2";
import Loading from './Loading';

const DoughnutChart = (props) => {
  const monthWords = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (props.isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <p className="title">{props.titleText}</p>
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
    </div>
  )
}

export default DoughnutChart
