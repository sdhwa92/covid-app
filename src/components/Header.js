import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';

const Header = () => {
  const { country } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(country);
  const history = useHistory();
  
  useEffect( async () => {
    getCountriesApiCall();
  }, []);

  useEffect(() => {
    history.push(`/summary/${selectedCountry}`);
  }, [selectedCountry]);

  const getCountriesApiCall = () => {
    fetch("https://api.covid19api.com/countries")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      const orderedData = data.sort((a, b) => a.Country > b.Country ? 1 : (b.Country > a.Country ? -1 : 0));
      setCountryData(orderedData);
    })
  }; 

  const changeCountry = (e) => {
    // console.log(e.target.value);
    setSelectedCountry(e.target.value);
  }

  return (
    <header className="header">
      <h1>COVID-19</h1>
      <select value={selectedCountry} onChange={changeCountry}>
        {countryData.map(item => (
          <option key={item.ISO2} value={item.ISO2}>{item.Country}</option>
        ))}
      </select>
    </header>
  )
}

export default Header;