import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const colors = require('../colors.json');
const text = require('../textChunks.json');

const ArtCommissionModal = ({ bgColor }) => {

    const [open, setOpen] = useState(true);

    const textColor = (backgroundColor) => {
        return backgroundColor === colors.bg_dark ? colors.light : colors.dark;
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <div className={`art-commission-modal ${bgColor} ${open ? '' : 'disp-none'}`}>
            <div className='art-commission-modal-header'>
                <h1 className={textColor(bgColor)}>{text.artCommissionPrompt}</h1>
                <FontAwesomeIcon 
                    icon={solid('circle-xmark')}
                    size='2xl'
                    className={`art-commission-modal-close-icon ${textColor(bgColor)}`}
                    onClick={closeModal}/>
            </div>
            <span className={textColor(bgColor)}>{text.artCommissionInfo}</span>
            <a href='contact' className={colors.accent}>&gt; CONTACT</a>
        </div>
    );
};

export default ArtCommissionModal;
