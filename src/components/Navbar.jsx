import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaDashcube, FaEnvelope, FaHome, FaInfoCircle, FaRegStar } from "react-icons/fa";
import { MdAddHome, MdOutlineRealEstateAgent, MdMenu, MdClose, MdLightMode, MdDarkMode } from "react-icons/md";

import { RiBuilding2Line } from "react-icons/ri";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };



    useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  }

  const navLinks = (
    <>
      <li>
        <NavLink
         onClick={() => setMenuOpen(false)} 
         to="/" className={({ isActive }) => isActive ? "text-blue-800  underline  font-semibold" : "text-white"}>
          <FaHome className="inline mr-1" /> Home
        </NavLink>
      </li>

      <li>
        <NavLink 
        
         onClick={() => setMenuOpen(false)} 
         to="/all-properties" className={({ isActive }) => isActive ?   "text-blue-800  underline    font-semibold" : "text-white"}>
          <RiBuilding2Line className="inline mr-1" /> All Properties
        </NavLink>
      </li>


     
           <li>
        <NavLink
          onClick={() => setMenuOpen(false)}
          to="/about"
          className={({ isActive }) => isActive ? "text-blue-800 underline font-semibold" : "text-white"}
        >
          <FaInfoCircle className="inline mr-1" /> About
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => setMenuOpen(false)}
          to="/contact"
          className={({ isActive }) => isActive ? "text-blue-800 underline font-semibold" : "text-white"}
        >
          <FaEnvelope className="inline mr-1" /> Contact
        </NavLink>
      </li>

      

      {user && (
        <>

         <li>
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-blue-800 underline font-semibold" : "text-white"
              }
            >
              <FaDashcube className="inline mr-1"></FaDashcube> Dashboard
            </NavLink>
          </li>



         
           {/* <li>

            <NavLink
             onClick={() => setMenuOpen(false)} 
             to="/dashboard/add-properties" className={({ isActive }) => isActive ?  " underline text-blue-800 font-semibold" : "text-white"}>
              <MdAddHome className="inline mr-1" /> Add Properties
            </NavLink>
          </li> */}

         

          {/* <li>
            <NavLink
             onClick={() => setMenuOpen(false)} 
             to="/dashboard/my-ratings" className={({ isActive }) => isActive ?  "text-blue-800   underline    font-semibold" : "text-white"}>
              <FaRegStar className="inline mr-1" /> My Ratings
            </NavLink>
          </li>  */}

        
        </>
      )}
    </>
  );

  return (
    <header className="bg-base-100 py-2 bg-gradient-to-r from-blue-600  to-sky-400 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto max-w-[1250px] flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center">
          <img className="h-10 w-10 rounded-full" src="https://www.shutterstock.com/image-vector/real-estate-logo-template-home-260nw-2485751935.jpg" alt="HomeNest Logo" />
          <span className="font-bold text-xl text-white">Home <span className="text-[#ff6501] font-extrabold">Nest</span></span>
        </Link>
      

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">{navLinks}</ul>


        <div className="hidden md:flex items-center gap-3">

            <label className="flex items-center text-white gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="toggle toggle-secondary"
              onChange={(e) => handleTheme(e.target.checked)}
              defaultChecked={theme === "dark"}
            />
            <span className="text-sm">{theme === "dark" ? "Dark" : "Light"}</span>
          </label>



          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="flex items-center">
                <img
                  src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt="User"
                  className="w-9 h-9 rounded-full border-2 border-blue-400 cursor-pointer"
                  title={user.displayName || "User"}
                />
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52 mt-3">
                <li className="text-center font-semibold">{user.displayName || "User"}</li>
                <li className="text-center text-gray-500 text-sm">{user.email}</li>
                <div className="divider my-1"></div>
                <li>
                  <button onClick={handleLogout} className="btn btn-error btn-sm text-white w-full">
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="btn btn-outline btn-sm border-blue-500 text-white hover:text-blue-400"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-sm bg-blue-600 text-white hover:bg-blue-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-amber-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden base-100  shadow-md p-4">
          <ul className="space-y-3">{navLinks}</ul>

           <div className="flex items-center justify-between mt-4">
      <span className="text-sm font-medium">Theme:</span>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="toggle toggle-secondary"
          onChange={(e) => handleTheme(e.target.checked)}
          defaultChecked={theme === "dark"}
        />
        <span className="text-sm">{theme === "dark" ? "Dark" : "Light"}</span>
      </label>
    </div>

    <div className="mt-4"></div>


          <div className="mt-4">




            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-error btn-sm w-full text-white"
              >
                Log Out
              </button>
            ) : (
              <div className="flex gap-2 mt-2">
                <Link
                  to="/login"
                  className="btn btn-outline btn-sm border-blue-500 text-white hover:text-blue-500 w-1/2"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 w-1/2"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}