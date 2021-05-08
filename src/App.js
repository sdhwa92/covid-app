import './App.scss';
import Header from './containers/Header';
import Contents from './containers/Contents';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App"> 
      <Header />
      <Contents /> 
      <Footer />
    </div>
  );
}

export default App;
