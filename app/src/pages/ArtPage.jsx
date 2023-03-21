import React, { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import getSpreadsheetDataAsJson from '../util/GoogleSheets';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const MISC_SPREADSHEET_ID = 'misc-info';

const ArtPage = () => {

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
        <div className='page-art'>
            <MenuBar fontColor={colors.dark} bgColor={colors.bg_light} />
            <SocialsMenu excludeExternalLinks={true} color={colors.dark} />
            <div className='art-body'>
                <h1 className={colors.dark}>Art</h1>
            </div>
        </div>
    );
};

export default ArtPage;
