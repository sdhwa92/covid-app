import './App.scss';
import Header from './components/Header';
import Contents from './components/Contents';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [selectedCountry, setSelectedCountry] = useState({country: "Australia", ISO2: "AU"});

  return (
    <div className="App"> 
      <Header selectedCountry={selectedCountry} onSelectCountry={(select) => {setSelectedCountry(select)}} />
      <Contents selectedCountry={selectedCountry} /> 
      <Footer />
    </div>
  );
}

export default App;
