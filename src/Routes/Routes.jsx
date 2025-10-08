import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import App from "../Pages/App";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                index:true,
                path: "/home",
                element:Home
            },
            {
                path:"/app",
                element:<App></App>
            },
            {
                path:"/installation",
                element:<Installation></Installation>
            }
           
        ]
    },


]);
export default router