import React from 'react'
import { Line } from 'react-chartjs-2';
import Loading from './Loading';

const LineChart = (props) => {

  if (props.isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <p className="title">{props.titleText}</p>
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
    </div>
  )
}

export default LineChart
