import React from 'react'
import cart from '../../../assets/Header/cart.svg'
import ClassNames from './cart.module.css'
export default function Cart({...props}) {
  return (
    <figure className={ClassNames.header__cart}>
        <img className={ClassNames.header__cartIcon} src={cart} alt="cart" />
        <figcaption className={ClassNames.header__cartCounter}>{props.count}</figcaption>
    </figure>
  )
}
