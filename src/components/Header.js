import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import API from '../helpers/api';
import '../styles/Header.scss';
import Flag from './Flag';

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

  return (
    <header className="header">
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="navbar-item">
            <strong style={{color: '#fff'}}>COVID-19 STATUS</strong>
          </h1>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-white" onClick={() => setIsModal(true)}>
                <span class="icon">
                  <Flag countryCode={props.selectedCountry.ISO2} />
                </span>
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