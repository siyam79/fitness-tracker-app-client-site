import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Pages/MainLayOute/MainLayOut";
import Home from "../Components/Home/Home";
import Gallery from "../Components/Gallery/Gallery";
import Trainer from "../Components/Trainer/Trainer";
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
import PrivateRoute from "./PrivateRoute";
import Pyment from "../Pages/Pyment/Pyment";
import AddForum from "../Pages/Dashboard/AddForum/AddForum";
import ManageSolt from "../Trainer/ManageSolt/ManageSolt";
import ManagMember from "../Trainer/ManageMember/ManagMember";
import AddClass from "../Trainer/AddClass/AddClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Balance from "../Pages/Dashboard/Balance/Balance";
import ActiveLog from "../Member/ActiveLog/ActiveLog";
import Profile from "../Pages/Member/Profile/Profile";
import AdminRoute from "../Pages/Dashboard/AdminRoute/AdminRoute";
import TrainerRoute from "../TrainerRoute/TrainerRoute";
import DualRoute from "../DualRoute/DualRoute";
import TrainerBoking from "../Pages/TreinerBoking/TrainerBoking";
import Payment from "../Payment/Payment";
import Classes from "../Components/Classes/Classes";
import ProfileUpdate from "../Pages/Member/ProfileUpdate/ProfileUpdate";
import RecomentClass from "../Pages/Member/RecomentClass/RecomentClass";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/updateProFile/:id',
                element: <ProfileUpdate></ProfileUpdate>
            },
            {
                path: '/trainer',
                element: <Trainer></Trainer>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            },
            {
                path: '/trainer',
                element: <Trainer></Trainer>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/trainerboking/:timeSlot/:trainerName',
                element: <PrivateRoute><TrainerBoking></TrainerBoking></PrivateRoute>,
                // loader : ({params})=> fetch(`https://n-three-vert.vercel.app/class/${params.id}`)
            },

            // {
            //     path:'/class/:id',
            //     element :<ClassDetails></ClassDetails>,
            //     loader : ({params})=> fetch(`https://n-three-vert.vercel.app/class/${params.id}`)
            // },

            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/trainer/:id',
                element: <TrainerDetails></TrainerDetails>,
                loader: ({ params }) => fetch(`https://n-three-vert.vercel.app/trainers/${params.id}`)
            },
            {
                path: '/beATainer',
                element: <PrivateRoute><BeATainer></BeATainer></PrivateRoute>
            },
           
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'allSubscribers',
                element: <AdminRoute><AllSubscibers></AllSubscibers></AdminRoute>
            },
            {
                path: 'allTrainers',
                element: <AdminRoute><AllTrainers></AllTrainers></AdminRoute>
            },
            {
                path: 'balance',
                element: <AdminRoute><Balance></Balance></AdminRoute>
            },
            {
                path: 'appliedTrainers',
                element: <AppliedTrainer></AppliedTrainer>
            },
            {
                path: '/dashboard/pyment/:_id/:salary/:status',
                element:<AdminRoute><Pyment></Pyment></AdminRoute>
            },
            
            {
                path: 'paymentHistory',
                element:<AdminRoute> <PaymentHistory></PaymentHistory></AdminRoute>
            },

            //  trainer route 
            {
                path: 'manageMember',
                element: <TrainerRoute><ManagMember></ManagMember></TrainerRoute>
            },
            {
                path: 'addForum',
                element:<DualRoute><AddForum></AddForum></DualRoute> ,
            },
            {
                path: 'manageSlot',
                element:<TrainerRoute><ManageSolt></ManageSolt></TrainerRoute>,
            },
            {
                path: 'addClass',
                element:<TrainerRoute><AddClass></AddClass></TrainerRoute>,
            },

            //   Member  route 
            {
                path: 'activeLog',
                element:<ActiveLog></ActiveLog>
            },
            {
                path: 'profile',
                element:<Profile></Profile>
            },
            {
                path: 'recoment',
                element:<RecomentClass></RecomentClass>
            },
        ]
    },
    

])


export default Route;