import { createBrowserRouter } from "react-router-dom";
import Courses from "../component/Courses";
import Home from "../component/Home";
import Login from "../component/Login";
import Register from "../component/Register";
import Main from "../layout/Main";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/courses',
            element: <Courses />
         }
      ]
   }
])

export default router;