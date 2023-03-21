import HomePage from "./pages/HomePage";
import SoftwareDevPage from "./pages/SoftwareDevPage";
import ContactPage from "./pages/ContactPage";
import ArtPage from "./pages/ArtPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";

const pageRouteMap =  {
    "/": <HomePage/>, 
    "/home": <HomePage/>, 
    "/software-projects": <SoftwareDevPage />, 
    "/contact": <ContactPage />, 
    "/art": <ArtPage />
}

export default pageRouteMap;
