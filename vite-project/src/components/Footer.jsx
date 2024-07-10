import React from 'react'
import './Footer.css'
import discord from '../assets/images/discord.png'
import instagram from '../assets/images/instagram.png'
import western from '../assets/images/western.png'
import linkedin from '../assets/images/linkedin.png'

export default function Footer() {
    return (
        <footer>
            <img className="western-logo" src={western} alt="Western logo"/>
            <h2 className="kanit-semibold">
                © UWO TSI 2024
            </h2>
            <div className="social-wrapper">
                <a href="https://discord.gg/CJVM8dsb" target="_blank" rel="noopener noreferrer">
                    <img className="social-logo" src={discord} alt="Discord"/>
                </a>
                <a href="https://www.instagram.com/westerntsi/" target="_blank" rel="noopener noreferrer">
                    <img className="social-logo" src={instagram} alt="Instagram"/>
                </a>
                <a href="https://www.linkedin.com/company/techforsocialimpact/mycompany/" target="_blank" rel="noopener noreferrer">
                    <img className="social-logo" src={linkedin} alt="LinkedIn"/>
                </a>
            </div>
        </footer>
    )
}