import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Main from "../layout/Main";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;