
import React from 'react'
import ClassNames from './Footer.module.css'
import logo from '../../assets/Header/headerLogo.svg'
export default function Footer() {
    return (
        <footer className={`${ClassNames.footer} contentWrapper`}>
            <div className={ClassNames.footer__infoColumn}>
                <img className={ClassNames.footer__logo} src={logo} alt="Лого" />
                <p className={ClassNames.footer__infoText}>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
            </div>
            <div className={ClassNames.footer__links}>
                <h4 className={`${ClassNames.footer__linksHeader} fontNormal fontCapitalize`}>Menu Items</h4>
                <a className={`${ClassNames.footer__link} fontNormal fontCapitalize`} href="#">About</a>
                <a className={`${ClassNames.footer__link} fontNormal fontCapitalize`} href="#">Blog</a>
                <a className={`${ClassNames.footer__link} fontNormal fontCapitalize`} href="#">Shop</a>
                <a className={`${ClassNames.footer__link} fontNormal fontCapitalize`} href="#">Contact us</a>
            </div>
            <div className={ClassNames.footer__links}>
                <h4 className={`${ClassNames.footer__linksHeader} fontNormal fontCapitalize`}>Other Pages</h4>
                <a className={`${ClassNames.footer__link} fontNormal fontCapitalize`} href="#">Styleguide</a>
                <a className={`${ClassNames.footer__link} fontNormal fontCapitalize`} href="#">Changelog</a>
                <a className={`${ClassNames.footer__link} fontNormal fontCapitalize`} href="#">licenses</a>
                <a className={`${ClassNames.footer__link} fontNormal fontCapitalize`} href="#">Team</a>
            </div>
        </footer>
    )
}
