import React, { useEffect, useState } from 'react';
import Modal from '../containers/Modal';
import Flag from '../containers/Flag';
import API from '../helpers/api';
import '../styles/Header.scss';

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
                  <Flag />
                </span>
                <strong>{props.country}</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Modal 
        isModal={isModal} 
        onToggleModal={(isModal) => {setIsModal(isModal)}}
        countryOptions={countryData} />
    </header>
  )
}

export default Header;