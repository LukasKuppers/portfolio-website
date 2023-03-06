import React from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
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
                <div className='contact-row'>
                    <FontAwesomeIcon icon={brands('linkedin-in')} size='xl' className={colors.dark} />
                    <a href='https://www.linkedin.com/in/lukas-kuppers-a92469110/'
                        className={colors.accent}>&gt; LINKEDIN</a>
                </div>
                <div className='contact-row'>
                    <FontAwesomeIcon icon={solid('envelope')} size='xl' className={colors.dark} />
                    <a href='' className={colors.accent}>LKUPPERS11@GMAIL.COM</a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
