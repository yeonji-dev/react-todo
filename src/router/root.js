import { createBrowserRouter } from "react-router-dom";
import {Suspense, lazy} from "react";

const Loading = <div>Loading...</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))

const root = createBrowserRouter([
    {
        path:"",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path:"about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    }
])

export default root;