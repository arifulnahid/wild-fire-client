import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFoundPage/NotFound";
import Login from "../layouts/Accounts/Login";
import SignUp from "../layouts/Accounts/SignUp";
import Blog from "../layouts/Blog/Blog";
import Home from "../layouts/Home/Home";
import Main from "../layouts/Main/Main";
import MyReviews from "../layouts/Reviews/MyReviews";
import EditProfile from "../layouts/Profile/EditProfile";
import Profile from "../layouts/Profile/Profile";
import AddService from "../layouts/Service/AddService";
import Service from "../layouts/Service/Service";
import ServiceDetails from "../layouts/Service/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Review from "../layouts/Reviews/Review";

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
                loader: () => fetch("https://wild-fire-server.vercel.app/service?limit=3")
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
                loader: () => fetch("https://wild-fire-server.vercel.app/service")
            },
            {
                path: "/add-service",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/service/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://wild-fire-server.vercel.app/service/${params.id}`)
            },
            {
                path: "/reviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            }
        ]
    }
]);