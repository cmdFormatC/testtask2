import React from 'react'
import headerLogo from '../../../assets/Header/headerLogo.svg'
import classNames from './logo.module.css'
export default function Logo() {
  return (
    <img 
        height='48px' 
        width='170px'
        className={classNames.header__logo} 
        src={headerLogo} 
        alt="Logo" 
    />
  )
}
