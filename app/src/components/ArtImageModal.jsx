import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const colors = require('../colors.json');

const ArtImageModal = ({ imageData, onClickExit, onClickLeft, onClickRight }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    const renderLoadingSpinner = () => {
        return (
            <FontAwesomeIcon icon={solid('circle-notch')} size='2xl' 
                className={`art-modal-loading-icon ${colors.dark} ${imageLoaded ? 'disp-none' : ''}`}
                spin />
        );
    }
    
    return (
        <div className='art-modal'>
            <FontAwesomeIcon icon={solid('xmark')} size='2xl' 
                className={`art-modal-exit-icon ${colors.dark}`} 
                    onClick={onClickExit}/>
            <FontAwesomeIcon icon={solid('angle-left')} size='2xl'
                className={`art-modal-left-icon ${colors.dark}`}
                onClick={onClickLeft}/>
            <FontAwesomeIcon icon={solid('angle-right')} size='2xl'
                className={`art-modal-right-icon ${colors.dark}`}
                onClick={onClickRight}/>
            <div className='art-modal-header'>
                <h1 className={colors.dark}>{imageData.name}</h1>
            </div>
            <img src={imageData.link} alt=''
                className={`art-modal-image ${imageLoaded ? '' : 'disp-none'}`}
                onLoad={(e) => setImageLoaded(true)}/>
            { renderLoadingSpinner() }
        </div>
    );
    
};

export default ArtImageModal;