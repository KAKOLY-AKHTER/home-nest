
import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { PropertyCard } from "../components/PropertyCard";

export default function AllProperties() {
  const loadedData = useLoaderData();
  const [properties, setProperties] = useState(loadedData);
  const [loading, setLoading] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({ 
    category: "", 
    location: "" 
  });
  const [sortOption, setSortOption] = useState("createdAt-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Fetch properties function
  const fetchProperties = async () => {
    setLoading(true);
    
    // Build query parameters
    const params = new URLSearchParams();
    
    if (searchText) {
      params.append("search", searchText);
    }
    
    if (filters.category) {
      params.append("category", filters.category);
    }
    
    if (filters.location) {
      params.append("location", filters.location);
    }
    
    // Add sort parameter
    params.append("sort", sortOption);
    
    // Pagination
    params.append("page", currentPage);
    params.append("limit", itemsPerPage);

    try {
      const response = await fetch(
        `https://home-nest-server-lilac.vercel.app/properties?${params.toString()}`
      );
      
      const data = await response.json();
      
      if (data.success) {
        setProperties(data.items);
        setTotalPages(data.totalPages);
      } else {
        // Fallback
        setProperties(loadedData);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Error:", error);
      setProperties(loadedData);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchProperties();
  }, [currentPage, sortOption, itemsPerPage]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchProperties();
  };

  // Handle filter apply
  const handleFilterApply = () => {
    setCurrentPage(1); // Reset to page 1 when applying filters
    fetchProperties(); // Call fetchProperties directly
  };

  // Handle filter change
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Handle reset all
  const handleReset = () => {
    setSearchText("");
    setFilters({ category: "", location: "" });
    setSortOption("createdAt-desc");
    setCurrentPage(1);
    setProperties(loadedData);
    setTotalPages(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
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
        <h2 className="text-3xl text-[#094ee5] font-bold">
          All Properties (<span>{properties.length}</span>)
        </h2>
        <Link 
          to="/" 
          className="text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-500 hover:to-orange-400 transition-colors"
        >
          Go to Home
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            placeholder="Search by Property Name..."
            className="input input-bordered w-full max-w-xs"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
            type="submit"
            className="text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-500 hover:to-orange-400 transition-colors"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {/* Filters */}
        <div className="flex gap-4 items-center">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="select select-bordered rounded-full text-blue-600"
          >
            <option value="">All Categories</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
            {/* Add more categories from your data */}
          </select>

          <select
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
            className="select select-bordered rounded-full text-blue-600"
          >
            <option value="">All Locations</option>
            <option value="Banani, Dhaka">Banani, Dhaka</option>
            <option value="Gulshan, Dhaka">Gulshan, Dhaka</option>
            <option value="Dhanmondi, Dhaka">Dhanmondi, Dhaka</option>
            {/* Add more locations from your data */}
          </select>

          <button
            onClick={handleFilterApply}
            className="px-6 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white rounded-full hover:from-red-500 hover:to-orange-400 transition-colors"
          >
          Filters
          </button>

          <button
            onClick={handleReset}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full hover:from-blue-700 hover:to-sky-500 transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Sort */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="select text-blue-600 select-bordered rounded-full"
        >
          <option value="createdAt-desc">Newest First</option>
          <option value="createdAt-asc">Oldest First</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="price-asc">Price (Low to High)</option>
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2">Loading properties...</p>
        </div>
      ) : (
        <>
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {properties.map((property) => (
              <PropertyCard key={property._id} skill={property} showOwner={true} />
            ))}
          </div>

          {/* Pagination - Only show if more than 1 page */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white rounded-full hover:from-red-500 hover:to-orange-400 transition-colors disabled:opacity-50"
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === pageNum
                      ? 'bg-gradient-to-r from-red-500 to-orange-400 text-white'
                      : 'bg-gradient-to-r from-blue-700 to-sky-500 text-white hover:from-red-500 hover:to-orange-400'
                  } transition-colors`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white rounded-full hover:from-red-500 hover:to-orange-400 transition-colors disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}















