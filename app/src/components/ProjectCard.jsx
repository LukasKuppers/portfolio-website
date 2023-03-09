import React, { useState } from "react";
const colors = require('../colors.json');

const sizeToIntMap = {
    's': 30, 
    'm': 30, 
    'l': 60
};

const ProjectCard = ({ project, smallScreen }) => {

    const [mouseHover, setMouseHover] = useState(false);

    const customStyle = () => {
        const width = smallScreen ? 90 : sizeToIntMap[project.width];
        return {
            backgroundImage: `url(${project.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            width: `${width}%`
        };
    };

    const getTextColor = () => {
        return project.textShade === '0' ? colors.light : colors.dark;
    };

    return (
        <div className='project-card' style={customStyle()}>
            <div className={`${mouseHover && !window.navOpen ? '' : 'hidden'} project-card-content`}
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}>
                <h1 className={getTextColor()}>{project.title}</h1>
                <div className='project-card-util-bar'>
                    <span className={colors.accent}>{project.date}</span>
                    {project.githubLink ? <a href={project.githubLink} className={colors.accent}>&gt; GITHUB</a> : ''}
                    {project.liveLink ? <a href={project.liveLink} className={colors.accent}>&gt; LIVE SITE</a> : ''}
                </div>
                <p className={getTextColor()}>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
