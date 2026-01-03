
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import RatingsSection from "../components/RatingsSection";
import PropertyReviews from "../components/PropertyReview";
import { PropertyCard } from "../components/PropertyCard";
import "swiper/css";

// New Icons Import
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaShareAlt,
  FaPrint,
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaCopy,
  FaEye
} from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [viewCount, setViewCount] = useState(0);

  // Fetch property details
  useEffect(() => {
    fetch(`https://home-nest-server-lilac.vercel.app/homes/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProperty(data.result);
          
          // Generate gallery images (for demo, using same image multiple times)
          // In real app, you would have multiple images array
          const images = [data.result.image, data.result.image, data.result.image];
          setGalleryImages(images);
          
          setLoading(false);
          
          // Increment view count
          fetch(`https://home-nest-server-lilac.vercel.app/homes/${id}/view`, {
            method: 'PUT'
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching property:", err);
        setLoading(false);
      });
  }, [id, user]);

  // Fetch related properties
  useEffect(() => {
    if (property?.category) {
      fetch(`https://home-nest-server-lilac.vercel.app/homes`)
        .then((res) => res.json())
        .then((data) => {
          const relatedData = data.filter(
            (p) => p.category === property.category && p._id !== property._id
          );
          setRelated(relatedData.slice(0, 3)); // Show only 3 related properties
        });
    }
  }, [property]);

  // Handle save property
  const handleSaveProperty = async () => {
    if (!user) {
      toast.error("Please login to save properties");
      return;
    }
    
    try {
      const res = await fetch('https://home-nest-server-lilac.vercel.app/save-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${user?.accessToken}`,
        },
        body: JSON.stringify({
          userId: user.uid,
          propertyId: property._id,
          propertyName: property.propertyName,
          propertyImage: property.image,
          price: property.price,
          location: property.location
        })
      });
      
      if (res.ok) {
        setIsSaved(true);
        toast.success('Property saved to favorites!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to save property');
    }
  };

  // Handle share property
  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out ${property.propertyName} - ${property.price}৳ at ${property.location}`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
        break;
      default:
        break;
    }
  };

  // Handle delete property
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This property will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      background: "#1e293b",
      color: "#f1f5f9",
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

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-xl">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Property Not Found</h2>
          <p className="text-gray-600 mb-4">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/all-properties" className="btn btn-primary">
            Browse All Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50 py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800 transition">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/all-properties" className="text-blue-600 hover:text-blue-800 transition">
                Properties
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-medium truncate max-w-xs">
              {property.propertyName}
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Property Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Property Images Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Main Image */}
              <div className="relative h-96 w-full">
                <img
                  src={galleryImages[activeImage] || property.image}
                  alt={property.propertyName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    {property.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={handlePrint}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition"
                    title="Print"
                  >
                    <FaPrint className="text-gray-700" />
                  </button>
                  <button
                    onClick={handleSaveProperty}
                    className={`p-2 ${isSaved ? 'bg-red-500' : 'bg-white/90'} backdrop-blur-sm rounded-full hover:bg-white transition`}
                    title={isSaved ? "Saved" : "Save Property"}
                  >
                    <FaHeart className={isSaved ? "text-white" : "text-gray-700"} />
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {galleryImages.length > 1 && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-4 gap-2">
                    {galleryImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`relative h-20 rounded-lg overflow-hidden transition-all ${activeImage === index ? 'ring-2 ring-blue-500 scale-105' : 'opacity-80 hover:opacity-100'}`}
                      >
                        <img
                          src={img}
                          alt={`Property ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {activeImage === index && (
                          <div className="absolute inset-0 bg-blue-500/20"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Property Info */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {property.propertyName}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaMapMarkerAlt className="mr-2" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-700">
                      ৳{property.price.toLocaleString()}
                    </div>
                    <div className="text-gray-500 text-sm">Total Price</div>
                  </div>
                </div>

                {/* Property Specifications Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <FaBed className="text-2xl text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">3</div>
                    <div className="text-gray-600 text-sm">Bedrooms</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <FaBath className="text-2xl text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">2</div>
                    <div className="text-gray-600 text-sm">Bathrooms</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <FaRulerCombined className="text-2xl text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">1,850</div>
                    <div className="text-gray-600 text-sm">Square Feet</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <FaCar className="text-2xl text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-gray-900">1</div>
                    <div className="text-gray-600 text-sm">Garage</div>
                  </div>
                </div>

                {/* Property Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {property.description || property.shortDescription || 
                    "This beautiful property offers modern amenities and a prime location. Perfect for families looking for comfort and convenience in a great neighborhood."}
                  </p>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Swimming Pool', 'Gym', 'Garden', 'Security', 'Parking', 'Elevator', 'Balcony', 'WiFi'].map((amenity) => (
                      <span key={amenity} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <button
                    onClick={() => setShowContact(true)}
                    className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-700 to-sky-500 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                   
                    Contact Seller  <FaPhone />
                  </button>
                  
                  {user?.email === property.userEmail && (
                    <>
                      <Link
                        to={`/update-properties/${property._id}`}
                        className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
                      >
                        Update Property
                      </Link>
                      <button
                        onClick={handleDelete}
                        className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
                      >
                        Delete Property
                      </button>
                    </>
                  )}
                </div>

                {/* Share Buttons */}
                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Share This Property</h4>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
                      title="Share on Facebook"
                    >
                      <FaFacebook size={20} />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="p-3 bg-sky-100 text-sky-500 rounded-full hover:bg-sky-200 transition"
                      title="Share on Twitter"
                    >
                      <FaTwitter size={20} />
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="p-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition"
                      title="Share on WhatsApp"
                    >
                      <FaWhatsapp size={20} />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition"
                      title="Copy Link"
                    >
                      <FaCopy size={20} />
                    </button>
                    <button className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition">
                      <FaShareAlt size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ratings & Reviews Section */}
            <RatingsSection
              propertyId={property._id}
              propertyName={property.propertyName}
              propertyImage={property.image}
              user={user}
            />

            {/* Property Reviews */}
            <PropertyReviews propertyId={property._id} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            
            {/* Seller Information Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seller Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {property.userName?.[0] || property.userEmail?.[0] || "U"}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{property.userName || "Property Owner"}</h4>
                    <p className="text-gray-600 text-sm">{property.userEmail}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>Member since: {new Date().getFullYear() - 2}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaEye className="mr-2" />
                    <span>Properties listed: 5</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <button
                    onClick={() => setShowContact(true)}
                    className="w-full py-3 bg-gradient-to-r from-blue-700 to-sky-500 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                  >
                    <FaEnvelope className="inline mr-2" />
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>

            {/* Property Facts Card */}
            <div className="bg-gradient-to-r from-blue-700 to-sky-500 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Property Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-100">Property ID</span>
                  <span className="font-semibold">{property._id?.slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Category</span>
                  <span className="font-semibold">{property.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Posted Date</span>
                  <span className="font-semibold">
                    {new Date(property.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Views</span>
                  <span className="font-semibold">{viewCount || 124}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Status</span>
                  <span className="font-semibold bg-green-500/20 px-3 py-1 rounded-full text-sm">Available</span>
                </div>
              </div>
            </div>

            {/* Mortgage Calculator (Optional) */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mortgage Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Down Payment (20%)
                  </label>
                  <div className="text-2xl font-bold text-blue-600">
                    ৳{(property.price * 0.2).toLocaleString()}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Payment (30 years)
                  </label>
                  <div className="text-2xl font-bold text-green-600">
                    ৳{Math.round(property.price * 0.006).toLocaleString()}
                  </div>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition">
                  Calculate Full Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Related Properties</h2>
              <Link 
                to="/all-properties" 
                className="bg-gradient-to-r from-blue-700 to-sky-500 hover:text-blue-200 font-semibold flex items-center gap-2"
              >
                View All Properties
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => (
                <PropertyCard key={p._id} skill={p} />
              ))}
            </div>
          </div>
        )}

        {/* Contact Modal */}
        {showContact && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-sky-500 text-white">Contact Seller</h3>
                <button
                  onClick={() => setShowContact(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {property.userName?.[0] || property.userEmail?.[0] || "U"}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{property.userName || "Property Owner"}</h4>
                    <p className="text-gray-600">{property.userEmail}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="I'm interested in this property and would like to know more details..."
                      defaultValue={`Hello, I'm interested in your property "${property.propertyName}" listed for ৳${property.price.toLocaleString()}. Could you please provide more details?`}
                    />
                  </div>
                  
                  <button
                    onClick={() => {
                      toast.success('Message sent successfully!');
                      setShowContact(false);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-blue-700 to-sky-500 text-white rounded-xl font-semibold hover:from-red-600 hover:to-orange-400 transition"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for Print */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            background: white !important;
          }
          
          .bg-gradient-to-br,
          .bg-blue-50,
          .bg-sky-100 {
            background: white !important;
          }
          
          .shadow-xl,
          .shadow-lg {
            box-shadow: none !important;
            border: 1px solid #e5e7eb !important;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PropertyDetails;






