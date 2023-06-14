import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

import './index.css'
import Main from './LayOut/Main';
import Home from './Pages/Home/Home/Home';
import InstructorsPage from './Pages/Instractor/InstructorsPage';
import AuthProvider from './providers/AuthProvider';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import Classes from './Pages/Classes/Classes';
import Dashboard from './LayOut/DashBoard';
import AllUsers from './Pages/dashboard/AllUsers/AllUsers';
import AddClass from './Pages/dashboard/AddClass';
import ManageClasses from './Pages/dashboard/ManageClasses';
import InstructorClassesPage from './Pages/dashboard/InstructorClassesPage';

import MyCart from './Pages/dashboard/MyCart';

import Error from './ErrorPages/Error';
import Payment from './Pages/dashboard/Payment/Payment';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instractor",
        element: <InstructorsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard",
    element:<Dashboard></Dashboard>,
    errorElement: <Error />,
    children:[
      
      {
        path:'allusers',
        element:<AllUsers></AllUsers>
      },
      {
        path:'addclass',
        element:<AddClass></AddClass>
      },
      {
        path:'manageclass',
        element:<ManageClasses></ManageClasses>
      },
      {
        path:'myclass',
        element:<InstructorClassesPage></InstructorClassesPage>
      },
      {
        path:'selected',
        element:<MyCart></MyCart>  
      },
      {
        path:'payment/:id',
        element:<Payment></Payment>,  
       
      },
      
      
    ]
    
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
        <QueryClientProvider client={queryClient}>
          <div >
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      
    </AuthProvider>
  </React.StrictMode>,
)
