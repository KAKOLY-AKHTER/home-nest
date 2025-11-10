import { use, useContext } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const AddProperty = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      propertyName: e.target.propertyName.value,
      shortDescription: e.target.shortDescription.value,
      category: e.target.category.value,
      price: parseInt(e.target.price.value),
      location: e.target.location.value,
      image: e.target.image.value,
      createdAt: new Date(),
      userEmail: user.email,
      userName: user.displayName,
    };

    try {
      const res = await fetch("https://home-nest-server-lilac.vercel.app/homes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`, // if using verifyToken middleware
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Property added successfully!");
        e.target.reset();
      } else {
        toast.error("Failed to add property.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full  max-w-2xl mx-auto shadow-2xl rounded-lg md:mt-30 mt-90">
      <div className="card-body bg-sky-100 p-6 ">
        <h2 className=" text-center mb-6 text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent ">Add New Property</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Property Name */}
          <div>
            <label className="label font-medium">Property Name</label>
            <input
              type="text"
              name="propertyName"
              required
              className="input w-full rounded-full "
              placeholder="Luxury Lakeview Apartment"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="shortDescription"
              required
              rows="3"
              className="textarea w-full rounded-2xl h-[150px] "
              placeholder="Modern 3-bedroom apartment with lake view..."
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="label font-medium ">Category</label>
            <select
              name="category"
              required
              className="select w-full rounded-full  "
              defaultValue=""
            >
              <option value="" disabled className="">Select category</option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="label font-medium">Price (৳)</label>
            <input
              type="number"
              name="price"
              required
              className="input w-full rounded-full "
              placeholder="12000000"
            />
          </div>

          {/* Location */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full "
              placeholder="Banani, Dhaka"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full "
              placeholder="https://images.unsplash.com/photo.jpg"
            />
          </div>

          {/* User Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label font-medium">User Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="input w-full rounded-full"
              />
            </div>
            <div>
              <label className="label font-medium">User Name</label>
              <input

                type="text"
                value={user.displayName}
                readOnly
                className="input w-full rounded-full "
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
