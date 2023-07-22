import React from 'react'
import About from '../components/MainPageComponents/About/About'
import classNames from '../components/MainPageComponents/MainPage.module.css'
import Character from '../components/MainPageComponents/Character/Character'
import News from '../components/MainPageComponents/News/News'
export default function MainPage() {
  return (
    <>
        <About />
        <Character />
        <News />
    </>
  )
}
