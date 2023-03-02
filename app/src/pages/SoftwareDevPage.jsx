import React, { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import getSpreadsheetDataAsJson from '../util/GoogleSheets';

const colors = require('../colors.json');
const text = require('../textChunks.json');

const PROJECTS_SHEET_ID = 'technical-projects';

const SoftwareDevPage = () => {

    const [fetchedRows, setFetchedRows] = useState([]);

    useEffect(() => {
        const fetchRows = async () => {
            const rows = await getSpreadsheetDataAsJson(PROJECTS_SHEET_ID);
            setFetchedRows(rows);
        };
        fetchRows();
    }, []);

    return (
        <div className='page-home'>
            <MenuBar fontColor={colors.light} />
            <SocialsMenu color={colors.light} />
            <div className='dev-intro-section'>
                <h1 className={colors.light}>Technical Projects</h1>
                {JSON.stringify(fetchedRows)}
            </div>
        </div>
    );
};

export default SoftwareDevPage;
