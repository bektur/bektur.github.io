import './App.css';
import React, { useEffect, useState } from 'react';
import DisplayPage from './components/DisplayPage';
import Details from './components/Details';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createBrowserHistory } from "history";


function App() {
  const [exchanges, setExchange] = useState([]);
  
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/exchanges')
    .then(response => response.json())
    .then((data) => {
      setExchange(data.slice(0, 10));
    })
  }, []);
    
  return (
    <Router history={createBrowserHistory()}>    
      <Routes>
        <Route exact path="/" element={<DisplayPage data={exchanges}/>} />   

        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </Router>    
  );
}

export default App;
