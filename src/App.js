import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const history = useHistory();

  return (
    <BrowserRouter>
      <div className="App"> 
        <Switch>
          <Route exact path="/">
            <Redirect to="/summary/AU" />
          </Route>
          <Route path="/summary/:country">
            <Header />
            <Contents />  
          </Route>
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
