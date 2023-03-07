import MenuBar from "../components/MenuBar";
import SocialsMenu from "../components/SocailsMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid  } from "@fortawesome/fontawesome-svg-core/import.macro";
const colors = require('../colors.json');
const text = require('../textChunks.json');

const UnderConstructionPage = () => {
    return (
        <div className="page-construction">
            <MenuBar fontColor={colors.dark} />
            <SocialsMenu color={colors.dark} />
            <div className="page-not-found-content">
                <FontAwesomeIcon icon={solid('person-digging')} size='9x' 
                    className={`construction-icon ${colors.dark}`} />
                <span className={colors.dark}>{text.constructionMsg}</span>
                <a href="home" className={`page-not-found-link ${colors.dark} ${colors.outline_dark}`}>
                    &gt; GO HOME
                </a>
            </div>
        </div>
    )
}

export default UnderConstructionPage;
