import React from "react";
import { Outlet, useNavigation } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const HomeLayout = () => {

  const {state}=useNavigation()
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
      {state == "loading" ?<Loading></Loading> : <Outlet />} 
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
