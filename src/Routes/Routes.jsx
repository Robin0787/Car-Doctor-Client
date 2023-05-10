import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";


const routes = createBrowserRouter([
    {
        path : '/',
        element: <Main />,
        children : [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '*',
        element: <p className="text-3xl text-center mt-5">Not Found!!! <Link className="text-blue-500 font-bold block pt-5" to={'/'}>Go Home</Link></p>
    }
])

export default routes;