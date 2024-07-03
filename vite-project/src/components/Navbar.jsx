import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react';
import "./Navbar.css"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    return (
        <nav class={`nav ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}>
            <div class="toggle-button">
                <a href="#" onClick={toggleMobileMenu}>
                    <span class="bar"/>
                    <span class="bar"/>
                    <span class="bar"/>
                </a>
            </div>
            <div class="pages">
                <ul>
                    <CustomLink to="/" class="kanit-semibold">Home</CustomLink>
                    <CustomLink to="/about" class="kanit-semibold">About</CustomLink>
                    <CustomLink to="/projects" class="kanit-semibold">Projects</CustomLink>
                    <CustomLink to="/team" class="kanit-semibold">Team</CustomLink>
                </ul>
            </div>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return ( 
        <li className={ isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}