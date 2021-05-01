import React from 'react'
import axios from 'axios';
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { useState, useEffect } from 'react';

const Contents = (props) => {

  const monthWords = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [confirmedData, setConfirmedData] = useState({});
  const [quarantinedData, setQuarantinedData] = useState({});
  const [summarisedData, setSummarisedData] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      const covidData = await axios.get(`https://api.covid19api.com/total/dayone/country/${props.selectedCountry.ISO2}`);
      // console.log(res);
      filterData(covidData.data);
    }

    const filterData = (items) => {
      const arr = items.reduce((acc, cur) => {

        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();
        const active = cur.Active;
        const confirmed = cur.Confirmed;
        const deaths = cur.Deaths;
        const recovered = cur.Recovered;

        const foundItem = acc.find((item) => item.year === year && item.month === month);

        if (!foundItem) {
          acc.push({year, month, date, active, confirmed, deaths, recovered});
        } 
        
        if (foundItem && foundItem.date < date) {
          foundItem.date = date;
          foundItem.active = active;
          foundItem.confirmed = confirmed;
          foundItem.deaths = deaths;
          foundItem.recovered = recovered;
        }
        
        // console.log(cur, curYear, curMonth, curDate);

        return acc;
      }, []);
      // console.log(arr);

      const labels = arr.map(a => `${monthWords[a.month]}-${a.year}`);
      setConfirmedData({
        labels,
        datasets: [
          {
            label: "Cumulative Confirmed Cases",
            backgroundColor: "salmon",
            fill: true,
            data: arr.map(a => a.confirmed)
          }
        ]
      });

      setQuarantinedData({
        labels,
        datasets: [
          {
            label: "Quarantined Cases",
            borderColor: "salmon",
            fill: false,
            data: arr.map(a => a.active)
          }
        ]
      });

      const lastData = arr[arr.length - 1];
      setSummarisedData({
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "Confirmed, Recovered, Deaths ratio",
            backgroundColor: ["#ff3d67", "#059bff", "#ffc233"],
            borderColor: ["#ff3d67", "#059bff", "#ffc233"],
            fill: false,
            data: [lastData?.confirmed, lastData?.recovered, lastData?.deaths]
          }
        ]
      });
    }

    fetchEvent();
  }, [props.selectedCountry]);

  return (
    <section className="section">
      {/* <h1 className="title is-2">COVID-19 Status</h1> */}
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">Cumulative Confirmed Cases Trend</p>
            <Bar data={confirmedData} options={
              {
                title: {
                  display: true,
                  text: "Cumulative Confirmed Cases Trend",
                  fontSize: 16
                }
              },
              {
                legend: {
                  display: true,
                  position: "bottom"
                }
              }
            } />
          </div>

          <div className="tile is-child box">
            <p className="title">Monthly Quarantined Cases</p>
            <Line data={quarantinedData} options={
              {
                title: {
                  display: true,
                  text: "Monthly Quarantined Cases",
                  fontSize: 16
                }
              },
              {
                legend: {
                  display: true,
                  position: "bottom"
                }
              }
            } />
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">Cumulative Confirmed, Recovered and Deaths Cases ({monthWords[new Date().getMonth()]})</p>
            <Doughnut data={summarisedData} options={
              {
                title: {
                  display: true,
                  text: `Cumulative Confirmed, Recovered and Deaths Cases (${monthWords[new Date().getMonth()]})`,
                  fontSize: 16
                }
              },
              {
                legend: {
                  display: true,
                  position: "bottom"
                }
              }
            } />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contents
