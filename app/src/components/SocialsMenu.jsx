import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const SocialsMenu = ({ excludeExternalLinks, color }) => {
    return (
        <div className='socials-menu'>
            {
                excludeExternalLinks ? '' :
                (
                <a href='https://www.linkedin.com/in/lukas-kuppers-a92469110/'>
                    <FontAwesomeIcon icon={brands("linkedin-in")} size='2xl' 
                        className={`socials-icon ${color}`} />
                </a>
                )
            }
            
            {/*
                excludeExternalLinks ? '' :
                (
                <a href='https://twitter.com/luksups'>
                    <FontAwesomeIcon icon={brands("x-twitter")} size='2xl' 
                        className={`socials-icon ${color}`} />
                </a>
                )
            */}
            
            {
                excludeExternalLinks ? '' :
                (
                <a href='https://medium.com/@lkuppers11'>
                    <FontAwesomeIcon icon={brands("medium")} size='2xl' 
                        className={`socials-icon ${color}`} />
                </a>
                )
            }

            {
                excludeExternalLinks ? '' :
                (
                <a href='https://github.com/LukasKuppers'>
                    <FontAwesomeIcon icon={brands("github")} size='2xl'
                        className={`socials-icon ${color}`} />
                </a>
                )
            }
            <a href='contact'>
                <FontAwesomeIcon icon={solid("envelope")} size='2xl'
                    className={`socials-icon ${color}`} />
            </a>
        </div>
    );
};

export default SocialsMenu;
