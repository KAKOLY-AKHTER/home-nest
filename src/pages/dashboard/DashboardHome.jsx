import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaBuilding, FaEye, FaHome, FaMoneyBillWave, FaStar, FaUser } from "react-icons/fa";
import { Link } from "react-router";


const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalProperties: 0,
    totalReviews: 0,
    totalViews: 0,
    totalEarnings: 0
  });
  const [recentProperties, setRecentProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch user's properties
        const propertiesRes = await fetch(
          `https://home-nest-server-lilac.vercel.app/my-properties?email=${user?.email}`
        );
        const properties = await propertiesRes.json();
        
        // Fetch user's ratings
        const ratingsRes = await fetch(
          `https://home-nest-server-lilac.vercel.app/my-ratings?email=${user?.email}`
        );
        const ratings = await ratingsRes.json();
        
        // Calculate stats
        const totalViews = properties.reduce((sum, prop) => sum + (prop.viewCount || 0), 0);
        const totalEarnings = properties.reduce((sum, prop) => sum + (prop.price || 0), 0);
        
        setStats({
          totalProperties: properties.length,
          totalReviews: ratings.length,
          totalViews,
          totalEarnings
        });
        
        // Get recent properties
        setRecentProperties(properties.slice(0, 3));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (user?.email) {
      fetchDashboardData();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.displayName || "User"}!</h1>
        <p className="text-blue-100">Here's what's happening with your properties today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Properties</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">{stats.totalProperties}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaBuilding className="text-2xl text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <Link to="/dashboard/my-properties" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View all →
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">{stats.totalReviews}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <FaStar className="text-2xl text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <Link to="/dashboard/my-ratings" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View all →
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Views</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">{stats.totalViews.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaEye className="text-2xl text-purple-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-sm">Across all properties</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Value</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">৳{stats.totalEarnings.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <FaMoneyBillWave className="text-2xl text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-sm">Properties worth</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/dashboard/add-property"
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FaHome className="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Add New Property</h3>
                <p className="text-gray-600 text-sm mt-1">List a new property for sale</p>
              </div>
            </div>
          </Link>

          <Link
            to="/dashboard/my-properties"
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <FaBuilding className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Manage Properties</h3>
                <p className="text-gray-600 text-sm mt-1">View and edit your listings</p>
              </div>
            </div>
          </Link>

          <Link
            to="/dashboard/profile"
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FaUser className="text-2xl text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Update Profile</h3>
                <p className="text-gray-600 text-sm mt-1">Edit your personal information</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Properties */}
      {recentProperties.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Properties</h2>
            <Link to="/dashboard/my-properties" className="text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-gray-600 font-medium">Property</th>
                  <th className="text-left py-3 text-gray-600 font-medium">Price</th>
                  <th className="text-left py-3 text-gray-600 font-medium">Location</th>
                  <th className="text-left py-3 text-gray-600 font-medium">Date</th>
                  <th className="text-left py-3 text-gray-600 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentProperties.map((property) => (
                  <tr key={property._id} className="border-b hover:bg-gray-50">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={property.image}
                          alt={property.propertyName}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{property.propertyName}</p>
                          <p className="text-sm text-gray-500">{property.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="font-bold text-gray-900">৳{property.price?.toLocaleString()}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-gray-600">{property.location}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-gray-600">
                        {new Date(property.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;