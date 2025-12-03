import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import App from "../Pages/App";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorApp from "../Pages/ErrorApp";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";
import PremiumOfferPage from "../Pages/PremiumOfferPage";
import FreeTrialPage from "../Pages/FreeTrialPage";
import Bundel from "../Pages/Bundel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p></p>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('/socialAppData.json'),
                element: <Home></Home>
            },
            {
                path: "/app",
                element: <App></App>
            },
            {
                path: "/installation",
                element: <Installation></Installation>
            },
            {
                path: "/appdetailes/:id",
                element: <AppDetails></AppDetails>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
            {
                path: "/error",
                element: <ErrorApp></ErrorApp>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/support",
                element: <Support></Support>
            },
            {
                path: "/50-off",
                element: <PremiumOfferPage></PremiumOfferPage>
            },
            {
                path: "/free-trial",
                element: <FreeTrialPage />,
            },
            {
                path: "/bundle-deals",
                element: <Bundel />,
            },
        ]
    },


]);
export default router