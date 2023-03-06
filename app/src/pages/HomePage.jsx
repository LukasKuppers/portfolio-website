import React from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const HomePage = () => {
    return (
        <div className='page-home'>
            <MenuBar fontColor={colors.light} bgColor={colors.bg_dark} />
            <SocialsMenu color={colors.light} />
            <div className='home-intro-section'>
                <span className={colors.accent}>Hi, I'm</span>
                <h1 className={colors.light}>Lukas Kuppers</h1>
                <p className={colors.medium}>{text.professionalIntro}</p>
                <p className={colors.medium}>{text.personalIntro}</p>
                <div className='home-link-container'>
                    <a className={`home-cta-link ${colors.light} ${colors.outline_light}`}
                        href='software-projects'>&gt; SOFTWARE DEVELOPMENT</a>
                    <a className={`home-cta-link ${colors.light} ${colors.outline_light}`}
                        href='art'>&gt; ART</a>
                    <a className={`home-cta-link ${colors.light} ${colors.outline_light}`}
                        href='contact'>&gt; CONTACT</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
