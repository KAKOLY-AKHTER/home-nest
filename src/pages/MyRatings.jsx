




import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    fetch(`https://home-nest-server-lilac.vercel.app/my-ratings?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRatings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching ratings:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div className="text-center py-10 text-lg font-medium">Loading your ratings...</div>;
  }

  return (
    <div className="px-4 py-6 md:mt-30 mt-90 max-w-[1250px] mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-secondary">My Property Ratings</h2>
      {ratings.length === 0 ? (
        <div className="text-center text-gray-500">You haven't rated any properties yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ratings.map((rating) => (
            <div key={rating._id} className=" rounded-lg shadow-2xl bg-sky-100 border-blue-600 p-4  flex flex-col gap-3">
              <img
                src={rating.propertyImage || "/placeholder.jpg"}
                alt={rating.propertyName}
                className="w-full h-40 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-sky-600">{rating.propertyName}</h3>

                 {/* Reviewer Name */}
                {rating.reviewerName && (
                  <p className="text-sm text-gray-600">
                    Reviewed by: {rating.reviewerName}
                  </p>
                )}




                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < rating.rating ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                {rating.comment && (
                  <p className="text-sm text-sky-400 mt-2 italic">"{rating.comment}"</p>
                )}
                <p className="text-xs text-blue-700 mt-2">
                Review Date: {new Date(rating.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRatings;
