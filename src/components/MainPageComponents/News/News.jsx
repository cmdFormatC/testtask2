import React, { useState } from 'react'
import ClassNames from './News.module.css'
import PreHeader from '../../../UI/MainPage/PreHeader/PreHeader'
import NewsItem from '../../../UI/MainPage/NewsItem/NewsItem'
import firstNews from '../../../assets/News/firstNews.png'
import secondNews from '../../../assets/News/secondNews.png'
import thirdNews from '../../../assets/News/thirdNews.png'
import fourthNews from '../../../assets/News/fourthNews.png'
import fifthNews from '../../../assets/News/fifthNews.png'
export default function News() {
    const [cardInfo, setCardInfo] = useState([
        {
            header: 'Esports Group teams up with the Indianapolis Colts',
            date: 'April 2, 2021',
            imgSrc: firstNews,
            imgAlt: 'Esports Group teams up with the Indianapolis Colts',
            isFirst: true
        },
        {
            header: 'NAVI reveals s1mple fifth anniversary',
            date: 'April 2, 2021',
            imgSrc: secondNews,
            imgAlt: 'NAVI reveals s1mple fifth anniversary',
            isFirst: false
        },
        {
            header: 'A1esports Shares new picture',
            date: 'April 2, 2021',
            imgSrc: fourthNews,
            imgAlt: 'A1esports Shares new picture',
            isFirst: false
        },
        {
            header: 'T1 unveil partnership with Razer',
            date: 'April 2, 2021',
            imgSrc: thirdNews,
            imgAlt: 'T1 unveil partnership with Razer',
            isFirst: false
        },
        {
            header: 'RX secures content partnership with',
            date: 'April 2, 2021',
            imgSrc: fifthNews,
            imgAlt: 'RX secures content partnership with',
            isFirst: false
        },
    ])
    return (
        <section className={ClassNames.news}>
            <div className='contentWrapper'>
                <PreHeader />
                <div className={ClassNames.news__head}>
                    <h2 className={ClassNames.news__header}>Latest News & Articles</h2>
                    <button type='button' className={ClassNames.news__headButton}>Read More</button>
                </div>
                <div className={ClassNames.news__items}>
                    {
                        cardInfo.map((card) => 
                            <NewsItem
                                key={cardInfo.indexOf(card)}
                                image={card.imgSrc}
                                alt={card.imgAlt}
                                date={card.date}
                                header={card.header}
                                isFirst={card.isFirst}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}
