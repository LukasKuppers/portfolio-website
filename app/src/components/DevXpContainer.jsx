const colors = require('../colors.json');

const DevXpContainer = ({ xpData }) => {
    return (
        <div className='dev-xp-container'>
            <h1 className={colors.light}>{xpData.company} | {xpData.title}</h1>
            <span className={colors.accent}>{xpData.startDate} - {xpData.endDate}</span>
            <p className={colors.medium}>{xpData.desc}</p>
        </div>
    ); 
};

export default DevXpContainer;