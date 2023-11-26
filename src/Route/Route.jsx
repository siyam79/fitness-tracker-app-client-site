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
import BeATainer from "../Pages/BeATrainer/BeATainer";
import TrainerDetails from "../Components/Trainer/TrainerDetails";
import Dashboard from "../Pages/MainLayOute/Dashboard";
import AllSubscibers from "../Pages/Dashboard/AllSubscribers/AllSubscibers";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";
import AppliedTrainer from "../Pages/Dashboard/AppliedTrainer/AppliedTrainer";
// import ClassDetails from "../Components/Classes/ClassDetails";
// import Member from "../Pages/Member/Member";
// import NewsLetter from "../Pages/NewsLetter/NewsLetter";
// import PrivateRoute from "../Provider/PrivateRoute";

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
                element :<Classes></Classes>,
                // loader : ({params})=> fetch(`http://localhost:5000/class/${params.id}`)
            },
            
            // {
            //     path:'/class/:id',
            //     element :<ClassDetails></ClassDetails>,
            //     loader : ({params})=> fetch(`http://localhost:5000/class/${params.id}`)
            // },

            {
                path:'/community',
                element :<Community></Community>
            },
            {
                path:'/trainer/:id',
                element : <TrainerDetails></TrainerDetails>,
                loader : ({params})=> fetch(`http://localhost:5000/trainers/${params.id}`)
            },
            {
                path:'/beATainer',
                element :<BeATainer></BeATainer>
            },
            // {
            //     path:'/member/:id',
            //     element :<Member></Member>,
            //     loader : ({params})=> fetch(`http://localhost:5000/trainers/${params.id}`)
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
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'allSubscribers',
                element:<AllSubscibers></AllSubscibers>
            },
            {
                path:'allTrainers',
                element:<AllTrainers></AllTrainers>
            },
            {
                path:'appliedTrainers',
                element:<AppliedTrainer></AppliedTrainer>
            }
        ]
    }

])
   

export default Route;