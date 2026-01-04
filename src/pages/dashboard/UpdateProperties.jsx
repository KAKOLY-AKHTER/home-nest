// import {  useContext, useEffect, useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";
// import { AuthContext } from "../src/context/AuthContext";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const UpdateProperties = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

        if (!user?.accessToken) return;

    fetch(`https://home-nest-server-lilac.vercel.app/homes/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProperty(data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching property:", err);
        setLoading(false);
      });
  }, [id, user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedData = {
      propertyName: e.target.propertyName.value,
      shortDescription: e.target.shortDescription.value,
      category: e.target.category.value,
      price: parseInt(e.target.price.value),
      location: e.target.location.value,
      image: e.target.image.value,
    };

    fetch(`https://home-nest-server-lilac.vercel.app/homes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Property updated successfully!");
 navigate(`/property-details/${id}`);

        } else {
         Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Please try again later.",
        });
        }
      })
      .catch((err) => {
        console.error("Update error:", err);
        Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please check your connection and try again.",
      });

      });
  };

  if (loading || !property) {
    return <div className="text-center py-10 text-lg font-medium">Loading property details...</div>;
  }

  return (
    <div className=" px-4 py-6 card border bg-sky-200 border-gray-200  w-full  max-w-2xl mx-auto shadow-2xl rounded-lg mt-30 md:mt-7">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#094ee5] ">Update Property</h2>
      <form onSubmit={handleUpdate} className="space-y-4 ">
        <div>
          <label className="label font-medium">Property Name</label>
          <input
            type="text"
            name="propertyName"
            defaultValue={property?.propertyName || ""}
            required
            className="input w-full rounded-full"
          />
        </div>

        <div>
          <label className="label font-medium">Description</label>
          <textarea
            name="shortDescription"
            defaultValue={property?.shortDescription || ""}
            required
            rows="3"
            className="textarea w-full rounded-2xl h-[150px]"
          ></textarea>
        </div>

        <div>
          <label className="label font-medium">Category</label>
          <select
            name="category"
            defaultValue={property?.category || "rent"}
            required
            className="select w-full rounded-full"
          >
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>
        </div>

        <div>
          <label className="label font-medium">Price (৳)</label>
          <input
            type="number"
            name="price"
            defaultValue={property?.price || ""}
            required
            className="input w-full rounded-full"
          />
        </div>

        <div>
          <label className="label font-medium">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={property?.location || ""}
            required
            className="input w-full rounded-full"
          />
        </div>

        <div>
          <label className="label font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            defaultValue={property?.image || ""}
            required
            className="input w-full rounded-full"
          />
        </div>

         <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label font-medium">User Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input w-full rounded-full"
            />
          </div>
          <div>
            <label className="label font-medium">User Name</label>
            <input
              type="text"
              value={user?.displayName || "anonymous"}
              readOnly
              className="input w-full rounded-full"
            />
          </div>
        </div>



        <button
          type="submit"
          className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700"
        >
          Update Property
        </button>
        
      </form>
    </div>
  );
};

export default UpdateProperties;
