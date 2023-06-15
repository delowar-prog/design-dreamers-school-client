
import { createBrowserRouter, } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import DashboardHome from "../pages/Dashboard/Home/DashboardHome";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorRoutes from "./InstructorRoutes";
import AdminRoutes from "./AdminRoutes";
import ManageClassses from "../pages/Dashboard/ManageClasses/ManageClassses";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      //user dashboard route 
      {
        path:'home',
        element:<DashboardHome></DashboardHome>
      },
      {
        path: 'myClass',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'myEnroll',
        element:<MyEnrolledClass></MyEnrolledClass>,
      },
      //Admin dashboard route start
      {
        path:'manageUser',
        element:<AdminRoutes><ManageUser></ManageUser></AdminRoutes>
      },
      {
        path:'manageClass',
        element:<AdminRoutes><ManageClassses></ManageClassses></AdminRoutes>
      },
      //Instructor dashboard route start
      {
        path:'addClass',
        element:<InstructorRoutes><AddClass></AddClass></InstructorRoutes>
      },
      {
        path:'myAddedClass',
        element:<MyClass></MyClass>
      }
    ]
  }
]);


export default router