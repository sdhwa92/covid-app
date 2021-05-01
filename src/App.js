import './App.scss';
import Header from './components/Header';
import Contents from './components/Contents';
import { useState } from 'react';

function App() {

  const [selectedCountry, setSelectedCountry] = useState({country: "Australia", ISO2: "AU"});

  return (
    <div className="App"> 
      <Header selectedCountry={selectedCountry} onSelectCountry={(select) => {setSelectedCountry(select)}} />
      <Contents selectedCountry={selectedCountry} /> 
    </div>
  );
}

export default App;
