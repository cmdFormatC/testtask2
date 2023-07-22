import React from 'react'
import ClassNames from './NewsItem.module.css'
export default function NewsItem({ ...props }) {
  return (
    <div className={`${ClassNames.item} ${props?.isFirst ? ClassNames.item_first : ''}`}>
        <img 
        className={`${ClassNames.item__image} ${props?.isFirst ? ClassNames.item__image_first : ''}`}
        src={props.image} 
        alt={props.alt} 
        />
        <span className={`${ClassNames.item__date} fontNormal  ${props?.isFirst ? ClassNames.item__date_first : ''}`}>
            {props.date}
        </span>
        <h3 className={`${ClassNames.item__header} fontNormal fontCapitalize ${props?.isFirst ? ClassNames.item__header_first : ''}`}>{props.header}</h3>
    </div>
  )
}
