import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const MenuBar = ({ fontColor, bgColor }) => {

    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        window.navOpen = navOpen;
    }, [navOpen]);

    return (
        <div className={`menu-bar${bgColor && bgColor != '' ? ' ' + bgColor : ''}`}>
            <div className="menu-content">
                <a href="home" className="nav-link">
                    <h1 className={fontColor}>LUKAS_K.</h1>
                </a>
                <FontAwesomeIcon 
                    icon={solid("angles-down")}
                    className={`menu-icon ${navOpen ? ' fa-rotate-180': ''} ${fontColor}`} size="2xl"
                    onClick={() => setNavOpen(!navOpen)} />
            </div>
            <div className={`menu-nav${navOpen ? ' show-menu-nav' : ''}`}>
                <div className='menu-nav-list'>
                    <a className={`nav-link ${fontColor}`} href="home">&gt; HOME</a>
                    <a className={`nav-link ${fontColor}`} href="software-projects">&gt; SOFTWARE DEV</a>
                    <a className={`nav-link ${fontColor}`} href="art">&gt; ART</a>
                    <a className={`nav-link ${fontColor}`} href="contact">&gt; CONTACT</a>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
