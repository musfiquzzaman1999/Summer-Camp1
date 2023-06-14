import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Shared/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/L&R/Login/Login";
import Register from "../pages/L&R/Register/Register";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../layouts/Dashboard";
import EnrolledClasses from "../pages/Dashboard/StudentHome/EnrolledClasses";
import SelectedClasses from "../pages/Dashboard/StudentHome/SelectedClasses";
import AddClass from "../pages/Dashboard/InistractorHome/AddClass";
import MyClasses from "../pages/Dashboard/InistractorHome/MyClasses";
import ManageClasses from "../pages/Dashboard/AdminHome/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminHome/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import Pay from "../pages/Dashboard/StudentHome/Pay";
import PaymentHistory from "../pages/Dashboard/StudentHome/PaymentHistory";
import DashboardHome from "../pages/Dashboard/Dashboard/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "enrolled",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "selected",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myclass",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "manageclass",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/pay/:id",
        element: <Pay></Pay>,
      },
    ],
  },
]);
export default router;
