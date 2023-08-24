import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardHome from "../pages/Dashboard/Home/DashboardHome";
import PrivateRoutes from "./PrivateRoutes";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../layouts/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import Payment from '../pages/Dashboard/Payment/Payment';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';
import ManageClassses from "../pages/Dashboard/ManageClasses/ManageClassses";
import AdminRoutes from "./AdminRoutes";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorRoutes from "./InstructorRoutes";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";



export const router = createBrowserRouter([
    {
        path: "/",
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
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            //user dashboard routes
            {
                path: 'home',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'myClass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path:'myEnroll',
                element:<MyEnrolledClass></MyEnrolledClass>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },
            //Admin dashboard routes
            {
                path: 'manageUser',
                element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
            },
            {
                path: 'ManageClass',
                element: <AdminRoutes><ManageClassses></ManageClassses></AdminRoutes>
            },
            {
                path: 'addClass',
                element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
            }, 
            //Instructor dashboard routes
            {
                path: 'myAddedClass',
                element: <InstructorRoutes><MyClass></MyClass></InstructorRoutes>
            }
        ]
    }
]);
