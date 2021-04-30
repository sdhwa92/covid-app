import React, { useEffect, useState } from 'react'

const Header = () => {
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("AU");

  useEffect( async () => {
    apiCall();
  }, []);

  const apiCall = () => {
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