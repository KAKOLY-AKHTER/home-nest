import { createBrowserRouter } from "react-router";
import AllProperties from "../pages/AllProperties";
import PropertyDetails from "../pages/PropertyDetails";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import PrivateRoute from "../context/PrivateRoute";
import NotFoundPage from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Terms from "../components/Terms";
import MyProperties from "../pages/dashboard/MyProperties";
import AddProperties from "../pages/dashboard/AddProperties";
import UpdateProperties from "../pages/dashboard/UpdateProperties";
import MyRatings from "../pages/dashboard/MyRatings";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Profile from "../pages/dashboard/Profile";
import About from "../components/About";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/all-properties",
        element: <AllProperties></AllProperties>,
        loader: () => fetch('https://home-nest-server-lilac.vercel.app/homes')
      },

      // {
      //   path: "/add-properties",
      //   element: (
      //     <PrivateRoute>
      //       <AddProperties></AddProperties>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/property-details/:id",
        element: (

          <PropertyDetails></PropertyDetails>

        ),
      },
/*
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

          <MyRatings></MyRatings>

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

      */

      { path: "/about", element: <About></About> },
{ path: "/contact", element: <Contact></Contact> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp /> },
      { path: "/terms", element: <Terms></Terms> },


      { path: "*", element: <NotFoundPage /> },

    ],
  },

  
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "/dashboard/my-properties", element: <MyProperties /> },
      { path: "/dashboard/add-properties", element: <AddProperties /> },
      { path: "/dashboard/update-properties/:id", element: <UpdateProperties /> },
      { path: "/dashboard/my-ratings", element: <MyRatings /> },
      { path: "/dashboard/profile", element: <Profile /> },
    ],
  },



]);
