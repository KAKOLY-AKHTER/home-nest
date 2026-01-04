import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FaCamera, FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhone, FaSave, FaTimes, FaUser } from "react-icons/fa";


const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    photoURL: ""
  });
  const [loading, setLoading] = useState(false);

  // Initialize form data from user and localStorage
  useEffect(() => {
    if (user) {
      // Get additional user data from localStorage
      const storedUserData = JSON.parse(localStorage.getItem('userProfileData') || '{}');
      
      setFormData({
        displayName: user.displayName || storedUserData.displayName || "",
        email: user.email || storedUserData.email || "",
        phone: storedUserData.phone || "",
        address: storedUserData.address || "",
        bio: storedUserData.bio || "",
        photoURL: user.photoURL || storedUserData.photoURL || ""
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // 1. Update Firebase Auth profile
      const updateData = {};
      
      if (formData.displayName !== user.displayName) {
        updateData.displayName = formData.displayName;
      }
      
      // Only update photoURL if it's different
      if (formData.photoURL && formData.photoURL !== user.photoURL) {
        updateData.photoURL = formData.photoURL;
      }
      
      // Update Firebase profile
      await updateUserProfile(updateData);
      
      // 2. Save additional data to localStorage (for demo)
      const userProfileData = {
        displayName: formData.displayName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        bio: formData.bio,
        photoURL: formData.photoURL || user.photoURL,
        updatedAt: new Date().toISOString()
      };
      
      localStorage.setItem('userProfileData', JSON.stringify(userProfileData));
      
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600">Please login to view profile</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600">Manage your personal information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            <div className="text-center mb-6">
              <div className="relative inline-block mb-4">
                {formData.photoURL ? (
                  <img 
                    src={formData.photoURL} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-4"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                  </div>
                )}
                
                {isEditing && (
                  <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
                    <FaCamera className="text-lg" />
                  </button>
                )}
              </div>
              
              <h2 className="text-xl font-bold text-gray-900">{formData.displayName || "User"}</h2>
              <p className="text-gray-600">{user.email}</p>
              
              <div className="mt-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  Premium Member
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Member Since</span>
                <span className="font-semibold">
                  {user.metadata?.creationTime 
                    ? new Date(user.metadata.creationTime).toLocaleDateString() 
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Login</span>
                <span className="font-semibold">
                  {user.metadata?.lastSignInTime 
                    ? new Date(user.metadata.lastSignInTime).toLocaleDateString() 
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Properties Listed</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Reviews</span>
                <span className="font-semibold">8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Edit Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FaEdit /> Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  >
                    <FaTimes /> Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    <FaSave /> {loading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="inline mr-2 text-blue-500" />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-gray-50 rounded-lg">{formData.displayName || "Not set"}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2 text-blue-500" />
                    Email Address
                  </label>
                  <p className="px-4 py-3 bg-gray-50 rounded-lg">{formData.email}</p>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaPhone className="inline mr-2 text-blue-500" />
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-gray-50 rounded-lg">{formData.phone || "+8801965583729"}</p>
                  )}
                </div>

                {/* Profile Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCamera className="inline mr-2 text-blue-500" />
                    Profile Image URL
                  </label>
                  {isEditing ? (
                    <input
                      type="url"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://example.com/photo.jpg"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-gray-50 rounded-lg truncate">
                      {formData.photoURL ? "Image uploaded" : "No image"}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-blue-500" />
                    Address
                  </label>
                  {isEditing ? (
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="2"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your address"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-gray-50 rounded-lg min-h-[60px]">
                      {formData.address || "Dhaka,Bangladesh"}
                    </p>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg min-h-[120px]">
                    {formData.bio || "I'm passionate about real estate and helping people find their perfect home. With experience in property investment, I focus on matching families with properties that suit their needs and budget."}
                  </p>
                )}
              </div>

              {/* Profile Image Preview */}
              {isEditing && formData.photoURL && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Preview:
                  </label>
                  <div className="flex items-center gap-4">
                    <img 
                      src={formData.photoURL} 
                      alt="Preview" 
                      className="w-20 h-20 rounded-full object-cover border"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span class="text-red-500">Invalid image URL</span>';
                      }}
                    />
                    <p className="text-sm text-gray-600">
                      Enter a valid image URL (e.g., from imgur, cloudinary, etc.)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;











// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhone, FaSave, FaTimes, FaUser } from "react-icons/fa";

// const Profile = () => {
//   const { user, updateUserProfile } = useContext(AuthContext);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     displayName: "",
//     email: "",
//     phone: "",
//     address: "",
//     bio: ""
//   });
//   const [loading, setLoading] = useState(false);

//   // Initialize form data from user
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         displayName: user.displayName || "",
//         email: user.email || "",
//         phone: user.phoneNumber || "",
//         address: "",
//         bio: ""
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSave = async () => {
//     setLoading(true);
//     try {
//       await updateUserProfile(formData.displayName, user.photoURL);
//       toast.success("Profile updated successfully!");
//       setIsEditing(false);
//     } catch (error) {
//       toast.error("Failed to update profile");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-gray-600">Please login to view profile</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
//         <p className="text-gray-600">Manage your personal information and preferences</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Column - Profile Card */}
//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
//             <div className="text-center mb-6">
//               <div className="relative inline-block">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
//                   {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
//                 </div>
//                 <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg">
//                   <FaEdit className="text-blue-600" />
//                 </button>
//               </div>
//               <h2 className="text-xl font-bold text-gray-900">{user.displayName || "User"}</h2>
//               <p className="text-gray-600">{user.email}</p>
//               <div className="mt-2">
//                 <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
//                   Premium Member
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Member Since</span>
//                 <span className="font-semibold">
//                   {new Date(user.metadata?.creationTime).toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Last Login</span>
//                 <span className="font-semibold">
//                   {new Date(user.metadata?.lastSignInTime).toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Properties Listed</span>
//                 <span className="font-semibold">12</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Reviews</span>
//                 <span className="font-semibold">8</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Edit Form */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-2xl shadow-lg p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
//               {!isEditing ? (
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                 >
//                   <FaEdit /> Edit Profile
//                 </button>
//               ) : (
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setIsEditing(false)}
//                     className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//                   >
//                     <FaTimes /> Cancel
//                   </button>
//                   <button
//                     onClick={handleSave}
//                     disabled={loading}
//                     className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
//                   >
//                     <FaSave /> {loading ? "Saving..." : "Save Changes"}
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <FaUser className="inline mr-2" />
//                     Full Name
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name="displayName"
//                       value={formData.displayName}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Enter your full name"
//                     />
//                   ) : (
//                     <p className="px-4 py-3 bg-gray-50 rounded-lg">{user.displayName || "Not set"}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <FaEnvelope className="inline mr-2" />
//                     Email Address
//                   </label>
//                   <p className="px-4 py-3 bg-gray-50 rounded-lg">{user.email}</p>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <FaPhone className="inline mr-2" />
//                     Phone Number
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Enter phone number"
//                     />
//                   ) : (
//                     <p className="px-4 py-3 bg-gray-50 rounded-lg">{formData.phone || "Not set"}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <FaMapMarkerAlt className="inline mr-2" />
//                     Address
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Enter your address"
//                     />
//                   ) : (
//                     <p className="px-4 py-3 bg-gray-50 rounded-lg">{formData.address || "Not set"}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Bio
//                 </label>
//                 {isEditing ? (
//                   <textarea
//                     name="bio"
//                     value={formData.bio}
//                     onChange={handleChange}
//                     rows="4"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Tell us about yourself..."
//                   />
//                 ) : (
//                   <p className="px-4 py-3 bg-gray-50 rounded-lg min-h-[120px]">
//                     {formData.bio || "No bio added yet."}
//                   </p>
//                 )}
//               </div>

              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;