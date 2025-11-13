

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


   const handleSort = (value) => {
    if (!value) return;
    setLoading(true);
   const [sortField, sortOrder] = value.split("-");
    fetch(`https://home-nest-server-lilac.vercel.app/sorted-properties?sort=${sortField}&order=${sortOrder}`)
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
    <div className="container mx-auto max-w-[1280px] md:py-30 py-40 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          All Properties (<span className="text-pink-400">{properties.length}</span>)
        </h2>
        <Link to="/" className=" text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-600 hover:to-pink-600 transition-colors">Go to Home</Link>
      </div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

  
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
        <button type="button" onClick={handleReset} className=" text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-600 hover:to-pink-600 transition-colors">
          Reset
        </button>
      </form>
      <select
          onChange={(e) => handleSort(e.target.value)}
          className="select text-blue-600 select-bordered rounded-full"
        >
          <option value="">Sort By</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="createdAt-desc">Newest First</option>
          <option value="createdAt-asc">Oldest First</option>
        </select>

</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property._id} skill={property} showOwner={true} />
        ))}
      </div>
    </div>
  );
}
