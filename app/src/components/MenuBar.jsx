import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const MenuBar = ({ fontColor }) => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="menu-bar">
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
                    <a className={`nav-link ${fontColor}`} href="blah">&gt; BLAH</a>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
