import React, { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import DynamicData from '../util/DynamicData';

const colors = require('../colors.json');
const text = require('../textChunks.json');

const SoftwareDevPage = () => {

    const [fetchedRows, setFetchedRows] = useState([]);

    useEffect(() => {
        const fetchRows = async () => {
            const rows = await DynamicData.getTechnicalProjectsData();
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
                {fetchedRows}
            </div>
        </div>
    );
};

export default SoftwareDevPage;
