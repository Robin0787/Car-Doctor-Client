import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import Bookings from "../Pages/Bookings/Bookings";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const routes = createBrowserRouter([
    {
        path : '/',
        element: <Main />,
        children : [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path:'/checkout/:id',
                element: <Checkout />,
                loader: ({params}) => fetch(`http://localhost:2000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings /></PrivateRoute>
            }
        ]
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <p className="text-3xl text-center mt-5">Not Found!!! <Link className="text-blue-500 font-bold block pt-5" to={'/'}>Go Home</Link></p>
    }
])

export default routes;