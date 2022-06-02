import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './style.css'


export const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1>Crypto<span className='purple'>Mania</span></h1>
        </div>
    </Link>
  )
}
