

import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { PropertyCard } from "../components/PropertyCard";

export default function AllProperties() {
  const loadedData = useLoaderData();
  const [properties, setProperties] = useState(loadedData);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value.trim();

    if (!searchText) return;

    setLoading(true);

    fetch(`https://home-nest-server-lilac.vercel.app/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleReset = () => {
    setProperties(loadedData);
  };

 
  if (!properties || properties.length === 0) {
    return (
      <div className="text-center md:py-60">
        <h2 className="text-2xl font-bold text-red-500">404 - No properties Found</h2>
        <Link to="/" className="btn btn-secondary mt-4">Go to Home</Link>
      </div>
    );
  }


  return (
    <div className="container mx-auto max-w-[1280px] md:py-30 py-20 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          All Properties (<span className="text-pink-400">{properties.length}</span>)
        </h2>
        <Link to="/" className="btn btn-outline  text-blue-600">Go to Home</Link>
      </div>


      <form onSubmit={handleSearch} className="flex gap-2 justify-center text-blue-600  mb-8">
        <input
          name="search"
          type="text"
          placeholder="Search by Property Name..."
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn bg-blue-500 text-white rounded-full">
          {loading ? "Searching..." : "Search"}
        </button>
        <button type="button" onClick={handleReset} className="btn btn-outline text-red-500">
          Reset
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property._id} skill={property} showOwner={true} />
        ))}
      </div>
    </div>
  );
}
