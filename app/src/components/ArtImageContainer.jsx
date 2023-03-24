import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const colors = require('../colors.json');

const ArtImageContainer = ({ imageData }) => {

    const [mouseHover, setMouseHover] = useState(false);

    const customStyle = () => {
        return {
            backgroundImage: `url(${imageData.link})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
        };
    };

    return (
        <div className='art-image-container' style={customStyle()}
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}>
            <FontAwesomeIcon icon={solid('up-right-and-down-left-from-center')} size='xl'
                className={`art-expand-icon ${colors.accent} ${mouseHover ? '' : 'hidden'}`} />
        </div>
    );
};

export default ArtImageContainer;
