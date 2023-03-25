import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const colors = require('../colors.json');

const ArtImageContainer = ({ imageData }) => {

    const [mouseHover, setMouseHover] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
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

    const openModal = () => {
        if (!modalOpen) {
            setImageLoaded(false);
            setModalOpen(true);
        }
    };

    const renderLoadingSpinner = () => {
        return (
            <FontAwesomeIcon icon={solid('circle-notch')} size='2xl' 
                className={`art-modal-loading-icon ${colors.dark} ${imageLoaded ? 'disp-none' : ''}`}
                spin />
        );
    }

    const renderModal = () => {
        return (
            <div className='art-modal'>
                <FontAwesomeIcon icon={solid('xmark')} size='2xl' 
                    className={`art-modal-exit-icon ${colors.dark}`} 
                        onClick={() => setModalOpen(false)} />
                <div className='art-modal-header'>
                    <h1 className={colors.dark}>{imageData.name}</h1>
                </div>
                <img src={imageData.link} alt=''
                    className={`art-modal-image ${imageLoaded ? '' : 'disp-none'}`}
                    onLoad={(e) => setImageLoaded(true)}/>
                { renderLoadingSpinner() }
            </div>
        );
    }

    return (
        <div className='art-image-container-outer'>
            <div className='art-image-container' 
                style={customStyle()}
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
                onLoad={(e) => setImageLoaded(true)}
                onClick={openModal}>
                <FontAwesomeIcon icon={solid('up-right-and-down-left-from-center')} size='xl'
                    className={`art-expand-icon ${colors.accent} ${mouseHover ? '' : 'hidden'}`} />
            </div>

            {/* check if image is loaded */}
            <img src={imageData.link} alt='' className='disp-none' 
                onLoad={(e) => setImageLoaded(true)}/>

            { modalOpen ? renderModal() : ''}
        </div>
    );
};

export default ArtImageContainer;
