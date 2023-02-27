import React from 'react';
import MenuBar from '../components/MenuBar';
const colors = require('../colors.json');

const HomePage = () => {
    return (
        <div className='page-home'>
            <MenuBar fontColor={colors.light}/>
            <div className='home-intro-section'>
                <span className={colors.accent}>Hi, I'm</span>
                <h1 className={colors.medium}>Lukas Kuppers</h1>
            </div>
        </div>
    );
};

export default HomePage;
