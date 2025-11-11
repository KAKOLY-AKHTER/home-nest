
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const PropertyCard = ({ skill }) => {
  const {
    propertyName,
    image,
    category,
    shortDescription,
    _id,
   userName,
    createdAt,
    location,
    price,
  } = skill;

  return (
    <div className="relative  border border-white/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-white/50 hover:brightness-105  ">
      <figure className="h-52 overflow-hidden relative">
        <img
          src={image}
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
        <h2 className="text-lg font-semibold text-pink-300">{propertyName}</h2>
        <p className="text-sm bg-gradient-to-r from-black to-blue-300 bg-clip-text text-transparent line-clamp-2">{shortDescription}</p>
        <div className="flex justify-between text-xs bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          {/* <span>By: {userName}</span> */}
          <span  className="text-pink-400 font-bold text-md">{new Date(createdAt).toLocaleDateString()}</span>
           <span className="text-pink-400 font-bold text-lg">৳{price?.toLocaleString()}</span>
        </div>

        <div className=" w-full mt-4">
         
          <Link
            to={`/property-details/${_id}`}
            className="w-full block text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-600 hover:to-pink-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
