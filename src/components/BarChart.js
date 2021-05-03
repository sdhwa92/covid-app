import React from 'react'
import { Bar } from 'react-chartjs-2';
import Loading from './Loading';

const BarChart = (props) => {

  if (props.isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <p className="title">{props.titleText}</p>
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
    </div>
    
  )
}

export default BarChart
