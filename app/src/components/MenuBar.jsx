import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const colors = require('../colors.json');

const MenuBar = ({ fontColor }) => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="menu-bar">
            <h1 className={fontColor}>LUKAS K.</h1>
            <FontAwesomeIcon 
                icon={solid('bars')} 
                className={`menu-icon ${fontColor}`} size="xl"
                onClick={() => setNavOpen(!navOpen)} />
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
