import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const HomeLayout = () => {

  const {state}=useNavigation();
   const location = useLocation();
 const is404 = location.pathname === "/404" || location.pathname === "*";

   
  return (
    <div className="min-h-screen flex flex-col">
        {!is404 && <Navbar />}

      <main className="flex-1">
      {state === "loading" ?<Loading></Loading> : <Outlet />} 
      </main>
       {!is404 && <Footer />}

    </div>
  );
};

export default HomeLayout;
