import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import './styles/Header.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Header/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
