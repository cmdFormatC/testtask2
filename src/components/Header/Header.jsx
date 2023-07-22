import React from 'react'
import Logo from '../../UI/Header/Logo/Logo'
import Navbar from '../../UI/Header/Navbar/Navbar'
import Cart from '../../UI/Header/Cart/Cart'
import Button from '../../UI/Header/Button/Button'
import ClassNames from './Header.module.css'
export default function Header() {
  return (
    <header className={`${ClassNames.header} contentWrapper`}>
        <Logo />
        <Navbar />
        <Cart count={0} />
        <Button />
    </header>
  )
}
