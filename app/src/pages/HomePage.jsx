import React from 'react';
import MenuBar from '../components/MenuBar';
const colors = require('../colors.json');

const HomePage = () => {
    return (
        <div className='page-home'>
            <MenuBar fontColor={colors.light}/>
        </div>
    );
};

export default HomePage;
