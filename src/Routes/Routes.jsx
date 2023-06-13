
import { createBrowserRouter, } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layouts/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import DashboardHome from "../pages/Dashboard/Home/DashboardHome";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorRoutes from "./InstructorRoutes";
import AdminRoutes from "./AdminRoutes";
import ManageClassses from "../pages/Dashboard/ManageClasses/ManageClassses";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      {
        path:'home',
        element:<DashboardHome></DashboardHome>
      },
      {
        path: 'myClass',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path:'manageUser',
        element:<AdminRoutes><ManageUser></ManageUser></AdminRoutes>
      },
      {
        path:'manageClass',
        element:<AdminRoutes><ManageClassses></ManageClassses></AdminRoutes>
      },
      {
        path:'addClass',
        element:<InstructorRoutes><AddClass></AddClass></InstructorRoutes>
      }
    ]
  }
]);


export default router