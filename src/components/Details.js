import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { currencySymbolMap } from "currency-symbol-map";
import webIcon from '../static/media/web.png';

/**
 * Display details about specific exchange
 */
function Details(props) {
  /**  exchange contains details about certain exchange */
  const { currency } = props;
  const [coin, setCoin] = useState({});
  const { id } = useParams();
  const SI = ["", "k", "M", "B", "T", "P", "E"];
  Chart.register(...registerables);

  /** fetch details only once for specific exchange */
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCoin(data);
        var desc = document.getElementById('desc');
        desc.innerHTML = '<p>'+ data.description['en'] +'</p>';
      });      
  }, [id]);

  function formatNumber(number) {
    // what tier? (determines SI symbol)
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    const suffix = SI[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  }

  if (! coin.market_data) {
    return <div />;
  }

  const { description, market_data, market_cap_rank, symbol, links: { homepage } } = coin;
  const { 
    current_price, 
    ath,
    price_change_percentage_24h, 
    market_cap, 
    circulating_supply, 
    price_change_percentage_1h_in_currency, 
    price_change_percentage_7d 
  } = market_data;

  console.log(coin);
  return (
    <>    
    <section className="section-table">
      <div className="section-left">
        <Line 
          datasetIdKey="id"
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                id: 1,
                label: coin.name,
                data: [
                  // coin.market_data.current_price.currency - coin.market_data.price_change_percentage_1y_in_currency.currency, 
                  // coin.market_data.current_price.currency
                ],
              }
            ]
          }}
        />
      </div>
    </section>
    <section className="section-table">
      <div className="section-left">
        <div className="section-info">
          <h4>Market Stats</h4>
          <div className="subsection-info">
            <div>
              <div>Market Cap</div>
              <div><strong>{`${currencySymbolMap[currency]}${formatNumber(market_cap[currency.toLowerCase()])}`}</strong></div>
            </div>
            <div>
              <div>Volume(24h)</div>
              <div><strong>{`${currencySymbolMap[currency]}`}</strong></div>
            </div>
            <div>
              <div>Circulating supply</div>
              <div><strong>{`${formatNumber(circulating_supply)} ${symbol.toUpperCase()}`}</strong></div>
            </div>
            <div>
              <div>Typical hold time</div>
              <div><strong>Typical</strong></div>
            </div>
          </div>
          <div className="subsection-info">
            <div>
              <div>Trading activity</div>    
              <div><strong>62% buy 38% sell</strong></div>        
            </div>
            <div>
              <div>Popularity</div>
              <div><strong>#{market_cap_rank}</strong></div>
            </div>
            <div></div>
          </div>
          <div className="subsection-info">
            <div>
              <div>All time high</div>
              <div><strong>{`${currencySymbolMap[currency]}${formatNumber(ath[currency.toLowerCase()])}`}</strong></div>
            </div>
            <div>
              <div>Price change (1h)</div>
              <div><strong>{`${Number.parseFloat(price_change_percentage_1h_in_currency[currency.toLowerCase()]).toFixed(2)}%`}</strong></div>
            </div>
            <div>
              <div>Price change (24h)</div>
              <div><strong>{`${Number.parseFloat(price_change_percentage_24h).toFixed(2)}%`}</strong></div>
            </div>
            <div>
              <div>Price change (7d)</div>
              <div><strong>{`${Number.parseFloat(price_change_percentage_7d).toFixed(2)}%`}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-table">
      <div className="section-left">
        <div className="section-info">
          <h3>About Bitcoin</h3>
          <div className="subsection-info" id="desc">
            
          </div>
          <div className="subsection-info links">
            <div>Resources</div> 
            <div><img src={webIcon} className="icon"/><a href={homepage[0]}>Official website</a></div>            
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Details;
