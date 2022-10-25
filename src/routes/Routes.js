import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Login from "../component/login/Login";
import Main from "../layout/Main";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;