import React from 'react'
import ClassNames from './Character.module.css'
import PreHeader from '../../../UI/MainPage/PreHeader/PreHeader'
import mainCharacter from '../../../assets/Characters/character_main.png'
import card1 from '../../../assets/Characters/card_1.png'
import card2 from '../../../assets/Characters/card_2.png'
import card3 from '../../../assets/Characters/card_3.png'
export default function Character() {
  return (
    <section className={`${ClassNames.character}`}>
        <img
            className={ClassNames.character__img}
            src={mainCharacter}
            alt="character" 
        />
        <div className={`${ClassNames.character__content}`}>
            <PreHeader />
            <h2 className={`${ClassNames.character__header} fontNormal`}>
                Customize your Own Character
            </h2>
            <p className={`${ClassNames.character__description} fontNormal`}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
            <div className={`${ClassNames.character__card} ${ClassNames.character__card_active}`}>
                <img
                    className={ClassNames.character__cardImg}
                    src={card1}
                    alt="character 1" 
                />
            </div>
            <div className={ClassNames.character__card}>
                <img
                    className={ClassNames.character__cardImg}
                    src={card2}
                    alt="character 2"
                />
            </div>
            <div className={ClassNames.character__card}>
                <img
                    className={ClassNames.character__cardImg}
                    src={card3}
                    alt="character 3"
                />
            </div>
        </div>
    </section>
  )
}
