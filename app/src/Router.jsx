import React from "react";
import pageRouteMap from "./pageRouteMap";
import NotFoundPage from "./pages/NotFoundPage";

const Router = () => {

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
