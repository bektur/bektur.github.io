import React from "react";
import { Table } from "react-bootstrap";
import { Chart } from "chart.js";
import IntroSection from "./IntroSection";

/**
 * Display home page, list of exchanges 
 */
function DisplayPage(props) {
  /** data contains list of exchanges, passed from App.js */
  const { data, currency } = props;

  function handleOnClick(id) {    
  }

  function renderChart(id) {
    const ctx = document.getElementById('myChart-'+ id).getContext('2d');
    console.log(ctx);
    var chart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          data: [0, 0],
        }, {
            data: [0, 1]
        }, {
            data: [1, 0],
            showLine: true // overrides the `line` dataset default
        }, {
            type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'
            data: [1, 1]
        }]
      }
    });
    chart.destroy();
  }

  return (
      <>
        <IntroSection />      
        <section className="section-table">        
          <Table className="table">
            <thead>
              <tr>
                <th className="center">#</th>
                <th className="align-left">Name</th>
                <th className="align-left">Price</th>
                <th className="align-left">Change</th>
                <th className="align-left">Chart</th>
                <th className="align-left">Trade</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((index) => (
                <tr key={data[index].id}>
                  <td className="center">{data[index].market_cap_rank}</td>
                  <td className="align-left">
                    <img style={{ width: "30px" }} src={data[index].image} />
                    <a href={`/details/${data[index].id}`} style={{textDecoration: 'unset'}}>
                      <span className="name">
                          {`${data[index].name} ${data[index].symbol.toUpperCase()}`}                    
                      </span>
                    </a>                  
                  </td>
                  <td className="align-left"><span className="price">{`${currency} ${new Intl.NumberFormat().format(Number.parseFloat(data[index].current_price).toFixed(2))}`}</span></td>
                  <td className="align-left"><span className="percentage">{`${Number.parseFloat(data[index].price_change_percentage_24h).toFixed(2)}%`}</span></td>
                  <td className="align-left"><canvas id={`myChart-${data[index].id}`} width="60" height="30"></canvas></td>
                  <td className="align-left"><a href={`/details/${data[index].id}`}><button className="buy-button"><span style={{color: 'white'}}>Buy</span></button></a></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </>
  );
}

export default DisplayPage;
