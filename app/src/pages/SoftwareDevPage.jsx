import React from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const SoftwareDevPage = () => {
    return (
        <div className='page-home'>
            <MenuBar fontColor={colors.light} />
            <SocialsMenu color={colors.light} />
        </div>
    );
};

export default SoftwareDevPage;
