import React, { useEffect, useState } from "react";
import DisplayPage from "./components/DisplayPage";
import Details from "./components/Details";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import data from './data.json';

/**
 * Main application component 
 */
function App() {
  // Api request result will be saved for exchanges
  const [coins, setExchange] = useState([]);
  const [currency, setCurrency] = useState('USD');


    useEffect(() => {
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExchange(data.slice(0, 10));
      });
    }, []);

  return (
    <>
      <Header />
      <div style={{height: '50px'}}></div>
      
      <Router history={createBrowserHistory()}>
        <Routes>          
          <Route exact path="/" element={<DisplayPage data={coins} currency={currency}/>} />

          <Route exact path="/details/:id" element={<Details currency={currency} />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
