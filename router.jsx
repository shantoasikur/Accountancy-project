import {
    createBrowserRouter,
} from "react-router-dom";
import Error from './src/pages/Error'
import Home from './src/pages/Home'
import Aboutus from "./src/pages/Aboutus";
import Mission from "./src/pages/Mission";
import Services from "./src/pages/Services";
import Contactus from "./src/pages/Contactus";
import Feedback from "./src/pages/Feedback";
import Login from "./src/Auth/Login";
import Register from "./src/Auth/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/aboutus",
        element: <Aboutus></Aboutus>,
    },
    {
        path: "/mission",
        element: <Mission></Mission>,
    },
    {
        path: "/services",
        element: <Services></Services>,
    },
    {
        path: "/contactus",
        element: <Contactus></Contactus>,
    },
    {
        path: "/feedback",
        element: <Feedback></Feedback>,
    },
    {
        path: "/auth/login",
        element: <Login></Login>,
    },
    {
        path: "/auth/register",
        element: <Register></Register>,
    },
    
    
    {
        path: "*",
        element: <Error></Error>,
    },
]);

export default router;