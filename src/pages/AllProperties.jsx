// import React from "react";
// import { useLoaderData } from "react-router";
// import { Link } from "react-router-dom";
// import { PropertyCard } from "../components/PropertyCard";



import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { PropertyCard } from "../components/PropertyCard";

export default function AllProperties() {
  const properties = useLoaderData();

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center md:py-60 ">
        <h2 className="text-2xl font-bold text-red-500">404 - No properties Found</h2>
        <Link to="/" className="btn btn-secondary mt-4">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-[1280px] md:py-30 py-96 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold  bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          All Properties (<span className="text-pink-400">{properties.length}</span>)
        </h2>
        <Link to="/" className="btn btn-outline bg-cyan-200 text-blue-800">Go to Home</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} showOwner={true} />
        ))}
      </div>
    </div>
  );
}
