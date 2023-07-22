import React from 'react'
import ClassNames from './About.module.css'
import characters from '../../../assets/About/Characters.svg'
import lineAccent from '../../../assets/About/lineAccent.svg'
import PreHeader from '../../../UI/MainPage/PreHeader/PreHeader'
export default function About() {
  return (
    <section className={ClassNames.about}>
      <div className={ClassNames.about__backgroundRectangle}></div>
      <div className={ClassNames.about__socialLinks}>
          <a className={`${ClassNames.about__socialLink} fontNormal fontUppercase`} href="#">facebook</a>
          <a className={`${ClassNames.about__socialLink} fontNormal fontUppercase`} href="#">instagram</a>
          <a className={`${ClassNames.about__socialLink} fontNormal fontUppercase`} href="#">twich</a>
        </div>
      <div className={`${ClassNames.about__content} contentWrapper`}>
        <div className={ClassNames.about__info}>
          <PreHeader />
          <h1 className={`${ClassNames.about__header} fontNormal`}>
            Unleash the Next 
            <span>
              &nbsp;Generation 
              <img className={ClassNames.about__accent} src={lineAccent} alt="Line accent" /> 
            </span>
            of Gaming
          </h1>
          
          <p className={`${ClassNames.about__description} fontNormal`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
          <div className={ClassNames.about__buttons}>
            <button className={`${ClassNames.about__buttonColored} fontNormal fontCapitalize`} type='button'>Explore More</button>
            <button className={`${ClassNames.about__buttonTransparent} fontNormal`} type='button'>View our team</button>
          </div>
        </div>
        
        <img className={ClassNames.about__image} src={characters} alt="Characters" />
      </div>
    </section>
  )
}
