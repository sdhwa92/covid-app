import React from 'react'
import { useState, useEffect } from 'react';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import BarChart from './BarChart';

import API from '../helpers/api';
import Summary from './Summary';

const Contents = (props) => {

  const monthWords = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [confirmedData, setConfirmedData] = useState({});
  const [quarantinedData, setQuarantinedData] = useState({});
  const [summarisedData, setSummarisedData] = useState({});

  useEffect(() => {
    apiCalls();
  }, [props.selectedCountry]);

  const apiCalls = () => {
    API.get(`total/dayone/country/${props.selectedCountry.ISO2}`)
    .then((res) => {
      filterData(res.data);
    });
  };

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
  };

  return (
    <section className="section">
      {/* <h1 className="title is-2">COVID-19 Status</h1> */}
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">Cumulative Confirmed Cases Trend</p>
            <BarChart data={confirmedData} titleText={"Cumulative Confirmed Cases Trend"} legendPos={"bottom"} />
          </div>

          <div className="tile is-child box">
            <p className="title">Monthly Quarantined Cases</p>
            <LineChart data={quarantinedData} titleText={"Monthly Quarantined Cases"} legendPos={"bottom"} />
          </div>
          <div className="tile is-child box">
            <p className="title">Cumulative Confirmed, Recovered and Deaths Cases ({monthWords[new Date().getMonth()]})</p>
              <DoughnutChart data={summarisedData} titleText={`Cumulative Confirmed, Recovered and Deaths Cases (${monthWords[new Date().getMonth()]})`} legendPos={"bottom"} />
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
            <Summary selectedCountry={props.selectedCountry} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contents
