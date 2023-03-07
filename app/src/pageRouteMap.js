import HomePage from "./pages/HomePage";
import SoftwareDevPage from "./pages/SoftwareDevPage";
import ContactPage from "./pages/ContactPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";

const pageRouteMap =  {
    "/": <HomePage/>, 
    "/home": <HomePage/>, 
    "/software-projects": <SoftwareDevPage />, 
    "/contact": <ContactPage />, 
    "/art": <UnderConstructionPage />
}

export default pageRouteMap;
