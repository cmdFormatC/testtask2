import React from 'react'
import classNames from './Navbar.module.css'
export default function Navbar() {
  return (
    <nav className={classNames.header__navLinks}>
        <a
            className={`${classNames.header__navLink} ${classNames.header__navLink_active}`}
            href="#"
        >
            Home
        </a>
        <a className={classNames.header__navLink} href="#">About</a>
        <a className={classNames.header__navLink} href="#">Team</a>
        <a className={classNames.header__navLink} href="#">Shop</a>
        <a className={classNames.header__navLink} href="#">Pages</a>
    </nav>
  )
}
