import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const colors = require('../colors.json');

const MenuBar = ({ fontColor }) => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="menu-bar">
            <div className="menu-content">
                <h1 className={fontColor}>LUKAS K.</h1>
                <FontAwesomeIcon 
                    icon={solid("angles-down")}
                    className={`menu-icon ${navOpen ? ' fa-rotate-180': ''} ${fontColor}`} size="2xl"
                    onClick={() => setNavOpen(!navOpen)} />
            </div>
            <div className={`menu-nav${navOpen ? ' show-menu-nav' : ''} ${colors.bg_accent}`}>
                <ul className='menu-nav-list'>
                    <li><a className="nav-link" href="home">HOME</a></li>
                    <li><a className="nav-link" href="blah">BLAH</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MenuBar;
