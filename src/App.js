import React from 'react';
import './App.css';
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header';
import './styles/Header.css';
import Home from './components/Home';
import Checkout from './components/Checkout';
=======
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import './styles/Header.css';
import Home from './components/Home';
>>>>>>> 09f43dbcb28a75b08e92923b1ce99432e1098d6c

function App() {
  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
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
=======
       <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Header/>}/>
          
        </Routes>
      </BrowserRouter>
>>>>>>> 09f43dbcb28a75b08e92923b1ce99432e1098d6c
    </div>
    </Router>
  );
}

export default App;
