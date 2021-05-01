import React, { useEffect, useState } from 'react';
import '../styles/Header.scss';
import Modal from './Modal';

const Header = (props) => {
  const [countryData, setCountryData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  
  useEffect( async () => {
    getCountriesApiCall();
  }, []);

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

  // @TODO: Context를 사용하여 flag 불러오기

  return (
    <header className="header">
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="navbar-item">
            COVID-19 STATUS
          </h1>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" onClick={() => setIsModal(true)}>
                <strong>Choose Country</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Modal 
        isModal={isModal} 
        onToggleModal={(isModal) => {setIsModal(isModal)}}
        countryOptions={countryData} 
        selectedCountry={props.selectedCountry} 
        onSelectCountry={props.onSelectCountry} />
    </header>
  )
}

export default Header;