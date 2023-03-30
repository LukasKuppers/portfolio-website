import React, { useEffect } from "react";
import pageRouteMap from "./pageRouteMap";
import NotFoundPage from "./pages/NotFoundPage";
const pageNameMap = require('./pageNameMap.json');

const Router = () => {

    useEffect(() => {
        const page = window.location.pathname;
        const pageName = page !== null ? `Lukas Kuppers | ${pageNameMap[page]}`: '';
        document.title = pageName;
    }, []);

    const getPage = () => {
        const page = pageRouteMap[window.location.pathname];
        return page ? page : <NotFoundPage/>
    }

    return (
        <div>
            {getPage()}
        </div>
    );
};

export default Router;
