import React from 'react'
import '../components/Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Header
