import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFoundPage/NotFound";
import Login from "../layouts/Accounts/Login";
import SignUp from "../layouts/Accounts/SignUp";
import Blog from "../layouts/Blog/Blog";
import Home from "../layouts/Home/Home";
import Main from "../layouts/Main/Main";
import Service from "../layouts/Service/Service";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/*',
                element: <NotFound></NotFound>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/service',
                element: <Service></Service>
            }
        ]
    }
]);