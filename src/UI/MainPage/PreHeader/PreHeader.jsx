import React from 'react'
import fire from '../../../assets/MainPage/fire.svg'
import ClassNames from './PreHeader.module.css'
export default function PreHeader() {
  return (
    <figure className={ClassNames.preheader}>
        <img
            className={ClassNames.preheader__image}
            src={fire}
            alt="Fire" 
        />
        <figcaption
            className={`${ClassNames.preheader__caption} fontNormal fontUppercase`}
        >
            future of esports
        </figcaption>
    </figure>
  )
}
