import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header';
import './styles/Header.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
       <Switch>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
