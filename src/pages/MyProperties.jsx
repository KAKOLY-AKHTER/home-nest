




















import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    fetch(`https://home-nest-server-lilac.vercel.app/my-properties?email=${user.email}`, {
      // headers: {
      //   authorization: `Bearer ${user.accessToken}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
        setLoading(false);
      });
  }, [user]);


  const handleUpdate = (id) => {
    navigate(`/update-properties/${id}`);
  };

 
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This property will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://home-nest-server-lilac.vercel.app/homes/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success || result.result?.deletedCount > 0) {
              setProperties((prev) => prev.filter((p) => p._id !== id));
              Swal.fire("Deleted!", "Your property has been deleted.", "success");
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the property.", "error");
          });
      }
    });
  };

  if (loading) {
    return <div className="text-center py-10 text-lg font-medium">Please wait... Loading your properties...</div>;
  }

  return (
    <div className="px-4 py-6 md:mt-30 mt-40 mx-auto max-w-[1250px]">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#094ee5] ">My Property Listings</h2>

      {properties.length === 0 ? (
        <div className="text-center text-gray-500">You haven't added any properties yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((p) => (
            <div
              key={p._id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
             
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
                  <span className="font-medium">Price:</span> ৳{p.price?.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="font-medium">Posted on:</span>{" "}
                  {new Date(p.postedDate || p.createdAt).toLocaleDateString()}
                </p>
              </div>

          
              <div className="flex justify-between items-center p-4 border-t">
                <button
                  onClick={() => handleUpdate(p._id)}
                  className="text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-500 hover:to-orange-400  transition-colors"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(p._id)}
                  className=" text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-500 hover:to-orange-400  transition-colors"
                >
                  Delete
                </button>

                <Link
                  to={`/property-details/${p._id}`}
                  className=" text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-500 hover:to-orange-400  transition-colors"
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
