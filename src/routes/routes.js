import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFoundPage/NotFound";
import Login from "../layouts/Accounts/Login";
import SignUp from "../layouts/Accounts/SignUp";
import Blog from "../layouts/Blog/Blog";
import Home from "../layouts/Home/Home";
import Main from "../layouts/Main/Main";
import EditProfile from "../layouts/Profile/EditProfile";
import Profile from "../layouts/Profile/Profile";
import AddService from "../layouts/Service/AddService";
import Service from "../layouts/Service/Service";
import PrivateRoute from "./PrivateRoute";

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
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/service?limit=3")
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
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
                children: [
                    {
                        path: "edit-profile",
                        element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/service',
                element: <Service></Service>,
                loader: () => fetch("http://localhost:5000/service")
            },
            {
                path: "/add-service",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
]);