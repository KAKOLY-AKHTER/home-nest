import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { PropertyCard } from "../components/PropertyCard";


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
          {properties.map((property) => (
            <PropertyCard key={property._id} skill={property}  />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProperties;
