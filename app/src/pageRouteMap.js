import HomePage from "./pages/HomePage";
import SoftwareDevPage from "./pages/SoftwareDevPage";
import ContactPage from "./pages/ContactPage";

const pageRouteMap =  {
    "/": <HomePage/>, 
    "/home": <HomePage/>, 
    "/software-projects": <SoftwareDevPage />, 
    "/contact": <ContactPage />
}

export default pageRouteMap;
