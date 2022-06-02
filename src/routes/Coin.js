import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import './Coin.css'

const Coin = () => {
  const [crypto, setCrypto] = useState({})
  const params = useParams()

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setCrypto(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }, [])
  return (
    <div>
      <div className='coin-container'>
        <div className='content'>
          <h1>{crypto.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'>Rank #{crypto.market_cap_rank}</span>
          </div>
          <div className='info'>
            <div className='coin-heading'>
              {crypto.image ? <img src={crypto.image.small} alt='crypto figure' /> : null}
              <p>{crypto.name}</p>
              {crypto.symbol ? <p>{crypto.symbol.toUpperCase()}/BRL</p> : null}
              
            </div>
            <div className='coin-price'>
              {crypto.market_data?.current_price ? <h1>R${crypto.market_data.current_price.brl.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>
        <div className='content'>
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{crypto.market_data?.price_change_percentage_1h_in_currency ? <p>{crypto.market_data.price_change_percentage_1h_in_currency.brl.toFixed(1)}%</p>  : null}</th>
                <th>{crypto.market_data?.price_change_percentage_24h_in_currency ? <p>{crypto.market_data.price_change_percentage_24h_in_currency.brl.toFixed(1)}%</p> : null}</th>
                <th>{crypto.market_data?.price_change_percentage_7d_in_currency ? <p>{crypto.market_data.price_change_percentage_7d_in_currency.brl.toFixed(1)}%</p> : null}</th>
                <th>{crypto.market_data?.price_change_percentage_14d_in_currency ? <p>{crypto.market_data.price_change_percentage_14d_in_currency.brl.toFixed(1)}%</p> : null}</th>
                <th>{crypto.market_data?.price_change_percentage_30d_in_currency ? <p>{crypto.market_data.price_change_percentage_30d_in_currency.brl.toFixed(1)}%</p> : null}</th>
                <th>{crypto.market_data?.price_change_percentage_1y_in_currency ? <p>{crypto.market_data.price_change_percentage_1y_in_currency.brl.toFixed(1)}%</p> : null}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='content'>
          <div className='stats'>
            <div className='left'>
              <div className='row'>
                <h4>24 Hour Low</h4>
                {crypto.market_data?.low_24h ? <p>R${crypto.market_data.low_24h.brl.toLocaleString()}</p> : null}
              </div>
              <div className='row'>
                <h4>24 Hour High</h4>
                {crypto.market_data?.high_24h ? <p>R${crypto.market_data.high_24h.brl.toLocaleString()}</p> : null}
              </div>
            </div>
            <div className='right'>
              <div className='row'>
                <h4>Market Cap</h4>
                {crypto.market_data?.market_cap ? <p>R${crypto.market_data.market_cap.brl.toLocaleString()}</p> : null}
              </div>
              <div className='row'>
                <h4>Circulating Supply</h4>
                {crypto.market_data ? <p>${crypto.market_data.circulating_supply}</p> : null}
              </div>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='about'>
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(crypto.description ? crypto.description.en : ''),
                        }}>
                        
                        </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin