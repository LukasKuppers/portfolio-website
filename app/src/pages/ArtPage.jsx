import React, { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import ArtImageContainer from '../components/ArtImageContainer';
import getSpreadsheetDataAsJson from '../util/GoogleSheets';
const colors = require('../colors.json');
const text = require('../textChunks.json');

const MISC_SPREADSHEET_ID = 'static-art-images';

const ArtPage = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const miscData = await getSpreadsheetDataAsJson(MISC_SPREADSHEET_ID);
            if (miscData && miscData.length > 0) {
                setImages(miscData);
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
                <div className='art-images-container'>
                {images.map(imgData => <ArtImageContainer key={imgData.name} imageData={imgData} />)}
                </div>
            </div>
        </div>
    );
};

export default ArtPage;
