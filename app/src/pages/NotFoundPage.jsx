import MenuBar from "../components/MenuBar";
import SocialsMenu from "../components/SocailsMenu";
const colors = require('../colors.json');

const NotFoundPage = () => {
    return (
        <div className="page-not-found">
            <MenuBar fontColor={colors.dark} />
            <SocialsMenu color={colors.dark} />
            <div className="page-not-found-content">
                <h1 className={colors.dark}>404</h1>
                <span>The Page Doesn't Exist!</span>
                <a href="home" className={`page-not-found-link ${colors.dark} ${colors.outline_dark}`}>
                    &gt; GO HOME
                </a>
            </div>
        </div>
    )
}

export default NotFoundPage;
