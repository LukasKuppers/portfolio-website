import React from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const ContactPage = () => {
    return (
        <div className='page-contact'>
            <MenuBar fontColor={colors.dark} bgColor={colors.bg_light} />
            <SocialsMenu color={colors.dark} />
            <div className='contact-body'>
                <h1 className={colors.dark}>Contact</h1>
                <p className={colors.dark}>{text.contactBody}</p>
            </div>
        </div>
    );
};

export default ContactPage;
