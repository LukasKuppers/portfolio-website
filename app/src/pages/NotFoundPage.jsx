import MenuBar from "../components/MenuBar";
const colors = require('../colors.json');

const NotFoundPage = () => {
    return (
        <div className="page-not-found">
            <MenuBar fontColor={colors.dark}/>
            <h1>Page Doesn't Exist!</h1>
        </div>
    )
}

export default NotFoundPage;
