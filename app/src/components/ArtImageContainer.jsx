import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const colors = require('../colors.json');

const ArtImageContainer = ({ imageData, onClick }) => {

    const [mouseHover, setMouseHover] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const customStyle = () => {
        const imgUrl = imageLoaded ? 
            imageData.link :
            (imageData.thumbnailLink ? imageData.thumbnailLink : imageData.link);

        return {
            backgroundImage: `url(${imgUrl})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
        };
    };

    return (
        <div className='art-image-container-outer'>
            <div className='art-image-container' 
                style={customStyle()}
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
                onLoad={(e) => setImageLoaded(true)}
                onClick={onClick}>
                <FontAwesomeIcon icon={solid('up-right-and-down-left-from-center')} size='xl'
                    className={`art-expand-icon ${colors.accent} ${mouseHover ? '' : 'hidden'}`} />
            </div>

            {/* check if image is loaded */}
            <img src={imageData.link} alt='' className='disp-none' 
                onLoad={(e) => setImageLoaded(true)}/>
        </div>
    );
};

export default ArtImageContainer;
