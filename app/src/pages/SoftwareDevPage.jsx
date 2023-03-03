import React, { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import SocialsMenu from '../components/SocailsMenu';
import DevXpContainer from '../components/DevXpContainer';
import getSpreadsheetDataAsJson from '../util/GoogleSheets';

const colors = require('../colors.json');
const text = require('../textChunks.json');

const EXPERIENCE_SHEET_ID = 'technical-experience';
const PROJECTS_SHEET_ID = 'technical-projects';

const XP_COL_THRESHOLD = 1400;

const SoftwareDevPage = () => {

    const [experienceData, setexperienceData] = useState([]);
    const [projectsData, setProjectsData] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // fetch data on initial render
    useEffect(() => {
        const fetchData = async () => {
            const fetchedExperienceData = await getSpreadsheetDataAsJson(EXPERIENCE_SHEET_ID);
            const fetchedProjectsData = await getSpreadsheetDataAsJson(PROJECTS_SHEET_ID);
            setexperienceData(fetchedExperienceData);
            setProjectsData(fetchedProjectsData);
        };
        fetchData();
    }, []);

    // update window width on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <div className='page-home'>
            <MenuBar fontColor={colors.light} />
            <SocialsMenu color={colors.light} />
            <div className='dev-body'>
                <h1 className={colors.light}>Industry Experience</h1>
                <div className={windowWidth < XP_COL_THRESHOLD ? 'flex-col' : 'flex-row'}>
                    {experienceData.map(xp => <DevXpContainer key={xp.company} xpData={xp} />)}
                </div>
                <h1 className={colors.light}>Technical Projects</h1>
            </div>
        </div>
    );
};

export default SoftwareDevPage;
