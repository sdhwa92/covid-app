import React, { useEffect, useState } from 'react';
import '../styles/Header.scss';
import Modal from './Modal';

import API from '../helpers/api';

const Header = (props) => {
  const [countryData, setCountryData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  
  useEffect( async () => {
    getCountriesApiCall();
  }, []);

  const getCountriesApiCall = () => {
    API.get('countries')
    .then((res) => {
      const orderedData = res.data.sort((a, b) => a.Country > b.Country ? 1 : (b.Country > a.Country ? -1 : 0));
      setCountryData(orderedData);
    });
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
                <strong>{props.selectedCountry.country}</strong>
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