import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { PropertyCard } from "../components/PropertyCard";
import { Link } from "react-router";
import { FaEdit, FaInfoCircle, FaMapMarkerAlt, FaMoneyBillWave, FaTag, FaTrashAlt } from "react-icons/fa";


const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    fetch(`https://home-nest-server-lilac.vercel.app/my-properties?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
        setLoading(false);
      });
  }, [user]);


  // ✏️ Update handler
  const handleUpdate = (id) => {
    window.location.href = `/update-property/${id}`;
  };

  // 🗑️ Delete handler
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
    if (!confirmDelete) return;

    fetch(`https://home-nest-server-lilac.vercel.app/homes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success && result.result.deletedCount > 0) {
          setProperties((prev) => prev.filter((p) => p._id !== id));
        }
      })
      .catch((err) => console.error("Delete failed:", err));
  }

  if (loading) {
    return <div className="text-center py-10 text-lg font-medium">Please wait... Loading your properties...</div>;
  }

  return (
    <div className="px-4 py-6 md:mt-30 mt-90 mx-auto max-w-[1250px]">
      <h2 className="text-3xl font-bold mb-6 text-center text-secondary">My Property Listings</h2>
      {properties.length === 0 ? (
        <div className="text-center text-gray-500">You haven't added any properties yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((p) => (
            // <div key={p._id} className="border rounded-xl shadow-md p-4 space-y-2 bg-white">
            //   <h3 className="text-xl font-bold text-blue-600">{p.propertyName}</h3>
            //   <p className="text-sm text-gray-600">Category: {p.category}</p>
            //   <p className="text-sm text-gray-600">Location: {p.location}</p>
            //   <p className="text-sm text-gray-600">Price: ৳{p.price?.toLocaleString()}</p>
            //   <p className="text-xs text-gray-500">Posted: {new Date(p.createdAt).toLocaleDateString()}</p>

            //   <div className="flex justify-between mt-4">
            //     <button
            //       onClick={() => handleUpdate(p._id)}
            //       className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600"
            //     >
            //       Update
            //     </button>
            //     <button
            //       onClick={() => handleDelete(p._id)}
            //       className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
            //     >
            //       Delete
            //     </button>
            //     <Link
            //       to={`/property-details/${p._id}`}
            //       className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
            //     >
            //       View Details
            //     </Link>
            //   </div>
            // </div>


 <div
              key={p._id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Property Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={
                    p.image ||
                    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
                  }
                  alt={p.propertyName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Property Info */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {p.propertyName}
                </h3>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Category:</span> {p.category}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Location:</span> {p.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Price:</span> ৳
                  {p.price?.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Posted on: {new Date(p.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center p-4 border-t">
                <button
                  onClick={() => handleUpdate(p._id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>

                <Link
                  to={`/property-details/${p._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View
                </Link>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default MyProperties;
