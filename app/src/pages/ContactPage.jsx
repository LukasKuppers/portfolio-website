import React, { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import getSpreadsheetDataAsJson from '../util/GoogleSheets';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const MISC_SPREADSHEET_ID = 'misc-info';

const ContactPage = () => {

    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const miscData = await getSpreadsheetDataAsJson(MISC_SPREADSHEET_ID);
            if (miscData && miscData.length > 0) {
                const emailRaw = miscData[0].email;
                setEmail(emailRaw.toUpperCase());
            }
        };
        fetchData();
    }, []);

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
                    <a href='contact' className={colors.accent}>{email}</a>
                </div>
                <br/>
                <p className={colors.dark}>{text.contactBody2}</p>
                {/*<div className='contact-row'>
                    <FontAwesomeIcon icon={brands('x-twitter')} size='xl' className={colors.dark} />
                    <a href='https://twitter.com/luksups'
                        className={colors.accent}>&gt; TWITTER</a>
                </div>*/}
                <div className='contact-row'>
                    <FontAwesomeIcon icon={brands('medium')} size='xl' className={colors.dark} />
                    <a href='https://medium.com/@lkuppers11'
                        className={colors.accent}>&gt; MEDIUM</a>
                </div>
                <div className='contact-row'>
                    <FontAwesomeIcon icon={brands('stack-overflow')} size='xl' className={colors.dark} />
                    <a href='https://stackoverflow.com/users/18508382/lukas-kuppers'
                        className={colors.accent}>&gt; STACK OVERFLOW</a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
