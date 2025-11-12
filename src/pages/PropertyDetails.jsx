import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import RatingsSection from "../components/RatingsSection";
import PropertyReviews from "../components/PropertyReview";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://home-nest-server-lilac.vercel.app/homes/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProperty(data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching property:", err);
        setLoading(false);
      });
  }, [id, user]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This property will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://home-nest-server-lilac.vercel.app/homes/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Property deleted successfully.");
            navigate("/my-properties");
          })
          .catch(() => toast.error("Failed to delete property."));
      }
    });
  };

  if (loading) {
    return <div className="text-center py-10 text-lg font-medium">Loading property details...</div>;
  }

  if (!property) {
    return <div className="text-center py-10 text-red-500">Property not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 md:mt-30 mt-90">
      <div className="card bg-sky-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="w-full md:w-1/2">
            <img
              src={property.image}
              alt={property.propertyName}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          </div>


          

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary">
              {property.propertyName}
            </h1>

            <div className="flex gap-3 flex-wrap">
              <span className="badge badge-lg badge-outline text-blue-600 border-blue-600 font-medium">
                {property.category}
              </span>
              <span className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium">
                ৳{property.price.toLocaleString()}
              </span>
              <span className="badge badge-lg badge-outline text-gray-600 border-gray-400 font-medium">
                {property.location}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {property.description || property.shortDescription}
            </p>


            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Posted by:</strong>{" "}
                {property.userName
                  ? `${property.userName} (${property.userEmail})`
                  : property.userEmail}
              </p>
              {property.createdAt && (
                <p>
                  <strong>Posted by:</strong>{" "}
                  {new Date(property.createdAt).toLocaleDateString()}
                </p>
              )}
            </div>

            <div className="flex gap-3 mt-6 flex-wrap">
              {user?.email === property.userEmail && (
                <>
                  <Link
                    to={`/update-properties/${property._id}`}
                    className=" text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-600 hover:to-pink-600 transition-colors"
                  >
                    Update Property
                  </Link>
                  <button
                    onClick={handleDelete}
                    className=" text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-600 hover:to-pink-600 transition-colors"
                  >
                    Delete
                  </button>

                </>
              )}
             
            </div> 

          </div>
        </div>
      </div>


      


<RatingsSection
  propertyId={property._id}
    propertyName={property.propertyName}
    propertyImage={property.image}
    user={user}
>
</RatingsSection>





<PropertyReviews  propertyId={property._id}></PropertyReviews>




    </div>
  );
};

export default PropertyDetails;

