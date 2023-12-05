import {Suspense, lazy} from "react";
import {Navigate} from "react-router-dom";

const Loading = <div>Loading...</div>
const TodoList = lazy(() => import("../pages/todo/ListPage"))

const todoRouter = () => {
    return [
        {
            path:"list",
            element: <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {
            path: "",
            element: <Navigate replace to="list"></Navigate>
        },
    ]
}

export default todoRouter;