import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const PropertyReviews = ({ propertyId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://home-nest-server-lilac.vercel.app/property-ratings/${propertyId}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, [propertyId]);

  if (loading) {
    return <div className="text-center py-6">Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="text-center text-gray-500">No reviews yet for this property.</div>;
  }

  return (
    <div className="mt-10 bg-slate-100 p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-black ">User Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review._id} className=" bg-base-100 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <strong>{review.reviewerName}</strong>
              <span className="text-xs text-gray-500">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <p className="mt-2 italic text-gray-700">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyReviews;
