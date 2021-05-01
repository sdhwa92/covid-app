import React, { useState } from 'react';
import '../styles/Modal.scss';

const Modal = (props) => {

  const [selectedCountry, setSelectedCountry] = useState(props.selectedCountry);

  const submitCountry = () => {
    // console.log(selectedCountry);
    props.onSelectCountry(selectedCountry);
    props.onToggleModal(false);
  }

  return (
    <div className={`modal ${props.isModal ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Choose Country</p>
          <button className="delete" aria-label="close" onClick={() => props.onToggleModal(false)}></button>
        </header>
        <section className="modal-card-body">
          <div className="panel">
            {props.countryOptions.map(item => (
              <a className={`panel-block ${item.ISO2 === selectedCountry.ISO2 ? 'is-active' : ''}`} 
                  key={item.ISO2} 
                  onClick={() => {setSelectedCountry({ISO2: item.ISO2, country: item.Country})}}>
                    {item.Country}
              </a>
            ))}
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={submitCountry}>Select</button>
          <button className="button" onClick={() => props.onToggleModal(false)}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

export default Modal
