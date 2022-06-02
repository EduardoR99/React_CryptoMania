import React from 'react'
import CoinItem from '../coinItem';
import Coin from '../../routes/Coin';
import './style.css'
import { Link } from 'react-router-dom';

const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>
            {props.coins.map(coins =>{
              return (
                <Link to={`/coin/${coins.id}`} key={coins.id}  element={<Coin/>}>
                 <CoinItem  coins={coins}/>
                </Link>
                
              );
            })}
        </div>
    </div>
  )
}

export default Coins