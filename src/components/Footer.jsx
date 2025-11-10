import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">

        {/* Logo and About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="https://www.shutterstock.com/image-vector/real-estate-logo-template-home-260nw-2485751935.jpg" alt="HomeNest Logo" className="w-14 h-14 rounded-full" />
            <h2 className="text-2xl font-bold text-blue-400">HomeNest</h2>
          </div>
          <p className="text-sm leading-relaxed">
            HomeNest is your trusted real estate partner — helping you buy, rent,
            and sell properties easily. Explore the best deals in your desired
            location with transparency and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/all-properties" className="hover:text-blue-400">All Properties</Link></li>
            <li><Link to="/add-property" className="hover:text-blue-400">Add Property</Link></li>
            <li><Link to="/my-properties" className="hover:text-blue-400">My Properties</Link></li>
            <li><Link to="/my-ratings" className="hover:text-blue-400">My Ratings</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MdEmail className="text-blue-400" /> support@homenest.com</li>
            <li className="flex items-center gap-2"><MdPhone className="text-blue-400" /> +880 1789-123456</li>
            <li className="flex items-center gap-2"><MdLocationPin className="text-blue-400" /> Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social + Terms */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition"><FaInstagram /></a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition"><FaXTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition"><FaLinkedinIn /></a>
          </div>

          <p className="text-sm mt-3">
            <Link to="/terms" className="hover:text-blue-400 underline">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">HomeNest</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
