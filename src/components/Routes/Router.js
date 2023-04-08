import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Client from "../Client/Client";
import Contacts from "../Contacts/Contacts";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import OurWorks from "../OurWorks/OurWorks";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contacts></Contacts>
            },
            {
                path: '/client',
                element: <Client></Client>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/works',
                element: <OurWorks></OurWorks>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }

        ]
    }
])

export default router;