import React from 'react'
import logo1 from '../assets/resources/logo-banco-falabella.png'
import logo2 from '../assets/resources/logo-responsive.jpg'
import menu from '../assets/resources/bars-solid.svg'

const menuHeader = () => (
    <section>
        <div className="menuHeader">
            <div className="menuButton">
                <img src={menu} className="menuButton" height="40" alt=""></img>
            </div>
            <div className="logoHeader">
                
                <div id="logo1"><center><img src={logo1} alt=""></img></center></div>
                <div id="logo2"><center><img src={logo2} width="250" alt=""></img></center></div>
            </div>
        </div>
    </section>
)

export default menuHeader