import React from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const HomePage = () => {
    return (
        <div className='page-home'>
            <MenuBar fontColor={colors.light} />
            <SocialsMenu color={colors.light} />
            <div className='home-intro-section'>
                <span className={colors.accent}>Hi, I'm</span>
                <h1 className={colors.light}>Lukas Kuppers</h1>
                <p className={colors.medium}>{text.professionalIntro}</p>
                <p className={colors.medium}>{text.personalIntro}</p>
            </div>
        </div>
    );
};

export default HomePage;
