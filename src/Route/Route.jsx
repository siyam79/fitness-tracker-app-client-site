import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Pages/MainLayOute/MainLayOut";
import Home from "../Components/Home/Home";
import Gallery from "../Components/Gallery/Gallery";
import Trainer from "../Components/Trainer/Trainer";
import Classes from "../Components/Classes/Classes";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Community from "../Components/Community/Community";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Route = createBrowserRouter([
    {
        path : '/',
        element: <MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/trainer',
                element : <Trainer></Trainer>
            },
            {
                path:'/classes',
                element :<Classes></Classes>
            },
            {
                path:'/community',
                element :<Community></Community>
            },
            // {
            //     path:'/community',
            //     element :
            // },
            {
                path:'/login',
                element :<Login></Login>
            },
            {
                path:'/register',
                element :<Register></Register>
            },
        ]
    }
])
   

export default Route;