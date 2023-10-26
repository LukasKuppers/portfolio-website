import React, { useEffect, useRef } from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import headshot from '../headshot.png';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const HomePage = () => {

    const imageRef = useRef(null);
    const textContainerRef = useRef(null);

    useEffect(() => {
        const resizeProfileImage = () => {
            const textContainerHeight = textContainerRef.current.clientHeight;
            // Set headshot height to match text containers height:
            imageRef.current.style.height = `${textContainerHeight}px`;
        };

        resizeProfileImage();

        window.addEventListener('resize', resizeProfileImage);

        // cleanup
        return () => window.removeEventListener('resize', resizeProfileImage);
    }, []);

    return (
        <div className='page-home'>
            <MenuBar fontColor={colors.light} bgColor={colors.bg_dark} />
            <SocialsMenu color={colors.light} />
            <div className='home-intro-section'>
                <div className='home-header-container'> 
                    <div className='home-header-img' ref={imageRef}>
                        <img src={headshot} alt='profile headshot' />
                    </div>
                    <div className='home-header-text' ref={textContainerRef}>
                        <span className={colors.accent}>👋 Hi, I'm</span>
                        <h1 className={colors.light}>Lukas Kuppers</h1>
                    </div>
                </div>
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
