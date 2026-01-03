
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const PropertyCard = ({ skill }) => {
  const {
    propertyName,
    image,
    category,
    shortDescription,
    _id,
    createdAt,
    location,
    price,
     status = "Available",
    rating = 4.5,  
  } = skill;

  return (
    <div className="relative  border border-white/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white hover:scale-[1.03] hover:border-white/50 hover:brightness-105  ">
      <figure className="h-52 overflow-hidden relative">
        <img
          src={image || "https://via.placeholder.com/400x300"}
          alt={propertyName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 left-2 bg-gradient-to-r from-sky-300 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {category}
        </div>
        <div className="absolute bottom-2 right-2 z-10 bg-black/60 text-white text-xs px-2 py-1 flex gap-2 rounded">
        <FaMapMarkerAlt className="text-white text-sm" />
  {location}
        </div>
      </figure>

      <div className="p-4 space-y-2 relative z-0">
        <h2 className="text-md font-semibold text-black ">{propertyName}</h2>
        <p className="text-sm bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent line-clamp-2">{shortDescription?.slice(0, 400)}...
</p>

 <div className="flex justify-between items-center text-xs mt-2">
          <span className={`font-semibold ${status === "Available" ? "text-green-600" : "text-red-600"}`}>
            {status}
          </span>
          <span className="flex items-center gap-1 text-yellow-500">
            <FaStar /> {rating}
          </span>
        </div>


        <div className="flex justify-between text-xs ">
        
          <span  className=" font-bold text-md text-black">{new Date(createdAt).toLocaleDateString()}</span>
           <span className=" font-bold text-lg text-black">৳{price?.toLocaleString()}</span>
        </div>

       




        <div className=" w-full mt-4">
         
          <Link
            to={`/property-details/${_id}`}
            className="w-full block text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-500 hover:to-orange-400 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
