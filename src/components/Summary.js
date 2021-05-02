import React, { useEffect, useState } from 'react'

import API from '../helpers/api';

const Summary = (props) => {

  const [summaryData, setSummaryData] = useState();
  const [updatedDate, setUpdatedDate] = useState();
  const [topTotalData, setTopTotalData] = useState([]);
  
  useEffect(() => {
    apiCalls();
  }, [props.selectedCountry]);

  const apiCalls = () => {
    API.get('summary')
    .then((res) => {
      // console.log(res);
      setSummaryData(res.data);
      setTopTotalData(filterData(res.data.Countries));


      const dataDate = new Date(res.data.Date);
      const date = dataDate.getDate();
      const month = dataDate.getMonth() + 1;
      const year = dataDate.getFullYear();
      setUpdatedDate(`${date}/${month}/${year}`);
    });
  };

  const filterData = (countriesData) => {
    const sortedData = countriesData.sort((a, b) => {
      if (a.TotalConfirmed > b.TotalConfirmed) {
        return -1;
      }
      else if (b.TotalConfirmed > a.TotalConfirmed) {
        return 1;
      }
      else {
        return 0;
      }
    });
    // console.log(sortedData);

    const processedData = sortedData.reduce((acc, cur, curIndex) => {
      // console.log(cur);
      const data = {
        ...cur,
        rank: curIndex + 1 
      };

      acc.push(data);

      return acc;
    }, []);

    let top20Countries = processedData.slice(0, 20);
    
    if (!top20Countries.find(item => item.Country === props.selectedCountry.country)) {
      // console.log("Not in top 20");

      const selectedCountryData = processedData.find(item => item.Country === props.selectedCountry.country);
      top20Countries = [
        ...top20Countries,
        selectedCountryData
      ];
    }

    return top20Countries;
  }

  return (
    <div>
      <p className="title">Covid Situation by Country on {updatedDate}</p>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Country</th>
              <th>Total Confirmed</th>
              <th>Total Deaths</th>
              <th>Total Recovered</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>#</th>
              <th></th>
              <th>Country</th>
              <th>Total Confirmed</th>
              <th>Total Deaths</th>
              <th>Total Recovered</th>
            </tr>
          </tfoot>
          <tbody>
            {topTotalData.map((data) => (
              <tr className={data.Country === props.selectedCountry.country ? 'is-selected' : ''} key={data.ID}>
                <td><strong>{data.rank}</strong></td>
                <td></td>
                <td>{data.Country}</td>
                <td>{data.TotalConfirmed}</td>
                <td>{data.TotalDeaths}</td>
                <td>{data.TotalRecovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Summary
