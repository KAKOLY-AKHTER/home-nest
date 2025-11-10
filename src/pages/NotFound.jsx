import React from "react";
import { FaSpinner } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700 px-4">
      <FaSpinner className="animate-spin text-5xl text-red-500 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-500 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFoundPage;
