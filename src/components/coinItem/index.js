import React from 'react'
import '../coins/style.css'

function CoinItem(props) {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt='crypto figure'/>
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>R${props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(3)}%</p>
        <p className='hide-mobile'>R${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>R${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem