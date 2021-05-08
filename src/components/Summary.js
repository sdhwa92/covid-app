import React, { useEffect, useState } from 'react'

import API from '../helpers/api';
import Flag from './Flag';
import Loading from './Loading';

const Summary = (props) => {

  const [updatedDate, setUpdatedDate] = useState();
  const [topTotalData, setTopTotalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    apiCalls();
  }, [props.countryCode]);

  const apiCalls = () => {
    setIsLoading(true);
    API.get('summary')
    .then((res) => {
      setTopTotalData(filterData(res.data.Countries));

      const dataDate = new Date(res.data.Date);
      const date = dataDate.getDate();
      const month = dataDate.getMonth() + 1;
      const year = dataDate.getFullYear();
      setUpdatedDate(`${date}/${month}/${year}`);

      setIsLoading(false);
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
    
    if (!top20Countries.find(item => item.Country === props.country)) {
      const selectedCountryData = processedData.find(item => item.Country === props.country);
      top20Countries = selectedCountryData ? [...top20Countries,selectedCountryData] : top20Countries;
    }

    return top20Countries;
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div style={{
      overflowX: "auto"
    }}>
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
              <tr className={data?.Country === props.country ? 'is-selected' : ''} key={data?.ID}>
                <td><strong>{data?.rank}</strong></td>
                <td><Flag countryCode={data?.CountryCode}></Flag></td>
                <td>{data?.Country}</td>
                <td>{data?.TotalConfirmed}</td>
                <td>{data?.TotalDeaths}</td>
                <td>{data?.TotalRecovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Summary
