import { createBrowserRouter } from "react-router";

import AllProperties from "../pages/AllProperties";
import AddProperties from "../pages/AddProperties";
import PropertyDetails from "../pages/PropertyDetails";
import MyProperties from "../pages/MyProperties";
import UpdateProperties from "../pages/UpdateProperties";
import HomeLayout from "../layouts/HomeLayout";
import MyRatings from "../pages/MyRatings";
import Home from "../pages/Home";
import PrivateRoute from "../context/PrivateRoute";
import NotFoundPage from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout> ,
    children: [
      {
        path: "/",
        element:<Home></Home>,
       
      },
      {
        path: "/all-properties",
        element:<AllProperties></AllProperties>,
        loader: () => fetch('https://home-nest-server-lilac.vercel.app/homes')
      },
      
      {
        path: "/add-properties",
        element: (
          <PrivateRoute>
          <AddProperties></AddProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/property-details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },

       {
        path: "/my-properties",
        element: (
          <PrivateRoute>
           <MyProperties></MyProperties>
          </PrivateRoute>
        ),
      },

       {
        path: "/my-ratings",
        element: (
          <PrivateRoute>
        <MyRatings></MyRatings>
          </PrivateRoute>
        ),
      },
      


        {
        path: "/update-properties/:id",
        element: (
          <PrivateRoute>
        <UpdateProperties></UpdateProperties>
          </PrivateRoute>
        ),
         
      },


     
    ],
  },
  { path: "/login", element:<Login></Login> },
  { path: "/signup", element: <SignUp /> },


  { path: "*", element: <NotFoundPage /> }, 

]);
