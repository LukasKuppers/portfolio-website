import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const SocialsMenu = ({ color }) => {
    return (
        <div className='socials-menu'>
            <a href='https://www.linkedin.com/in/lukas-kuppers-a92469110/'>
                <FontAwesomeIcon icon={brands("linkedin-in")} size='2xl' 
                    className={`socials-icon ${color}`} />
            </a>
            <a href='https://github.com/LukasKuppers'>
                <FontAwesomeIcon icon={brands("github")} size='2xl'
                    className={`socials-icon ${color}`} />
            </a>
        </div>
    );
};

export default SocialsMenu;
