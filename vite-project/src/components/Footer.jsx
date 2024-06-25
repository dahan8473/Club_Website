import React from 'react'
import './Footer.css'
import discord from '../assets/images/discord.png'
import instagram from '../assets/images/instagram.png'
import western from '../assets/images/western.png'

export default function Footer() {
    return (
        <footer>
            <img style = {{width: '75px', height: '75px'}} src={western}/>
            <h2 class="kanit-semibold">
                © UWO TSI 2024
            </h2>
            {/*insert logo here */}
            <div class="social-wrapper">
                <a href="https://discord.gg/CJVM8dsb" target="_blank">
                    <img class="social-logo" style = {{width: '45px', height: '35px'}} src={discord}/>
                </a>
                <a href="https://www.instagram.com/westerntsi/" target="_blank">
                    <img class="social-logo" style = {{width: '40px', height: '40px'}} src={instagram}/>
                </a>
            </div>
        </footer>
    )
}