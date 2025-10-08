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
        hydrateFallbackElement:<p>Loading...</p>,
        children: [
            {
                index:true,
                path: "/",
                loader:()=>fetch('./socialAppData.json'),
                element:<Home></Home>
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