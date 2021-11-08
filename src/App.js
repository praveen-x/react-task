import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header';
import './styles/Header.css';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
    <div className="App">
       <Switch>
          <Route path="/" exact>
            <Header/>
            <Home/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
