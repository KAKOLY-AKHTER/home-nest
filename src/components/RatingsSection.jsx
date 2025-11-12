import { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const RatingsSection = ({ propertyId, propertyName, propertyImage, user }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !comment.trim()) {
      return toast.error("Please provide both rating and comment.");
    }

    const reviewData = {
      propertyId,
      propertyName,
      propertyImage,
      rating,
      comment,
      reviewerName: user.displayName,
      reviewerEmail: user.email,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("https://home-nest-server-lilac.vercel.app/add-rating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(reviewData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Review submitted!");
        setRating(0);
        setComment("");
      } else {
        toast.error("Failed to submit review.");
      }
      window.location.reload()
    } catch (err) {

      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="mt-10 bg-sky-100 p-6 rounded-xl shadow-2xl">
      <h3 className="text-2xl font-bold mb-4 text-secondary">Rate & Review This Property</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-2xl cursor-pointer ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="3"
          className="textarea w-full rounded-xl"
          placeholder="Write your feedback..."
          required
        ></textarea>
        <button
          type="submit"
          className="  text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-600 hover:to-pink-600 transition-colors"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default RatingsSection;
