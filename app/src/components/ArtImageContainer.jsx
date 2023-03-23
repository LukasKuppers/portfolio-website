import React from "react";

const ArtImageContainer = ({ imageData }) => {

    const customStyle = () => {
        return {
            backgroundImage: `url(${imageData.link})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
        };
    };

    return (
        <div className='art-image-container' style={customStyle()}>
            
        </div>
    );
};

export default ArtImageContainer;
