
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaSearch,
  FaSignInAlt,
  FaCalendarCheck,
  FaStar,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { PropertyCard } from "../components/PropertyCard";
import { useEffect, useState } from "react";


export default function Home() {
  // const properties = useLoaderData();
// const popular = Array.isArray(properties) ? properties.slice(0, 6) : [];
 const [property, setProperty] = useState([]);

  

useEffect(() => {
  fetch("https://home-nest-server-lilac.vercel.app/latest-homes")
    .then((res) => res.json())
    .then((data) => {
      // Sort by createdAt or _id if available, then slice last 6
      const sorted = Array.isArray(data)
        ? [...data].reverse().slice(0, 6)
        : [];
      setProperty(sorted);
    })
    .catch((err) => console.error(err));
}, []);

  return (
    <div className="container mx-auto mt-10 max-w-[1280px] px-4 md:py-20 py-90">
      {/* 🌇 Hero Banner Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md">
        {/* Left: Text + Swiper text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-bold leading-tight">
            <span className="text-4xl md:text-6xl text-secondary">Find &</span>
            <br />
            <span className="text-4xl md:text-6xl text-blue-600">
              Invest Smartly
            </span>
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="w-full max-w-md mt-4"
          >
            {[
              "Find your dream home easily with top real estate agents.",
              "Discover beautiful properties in your favorite locations.",
              "Buy or rent verified listings with full transparency.",
            ].map((text, i) => (
              <SwiperSlide key={i}>
                <p className="text-base text-gray-700 font-medium">{text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right: Image Slider */}
        <div className="w-full md:w-1/2 mx-auto rounded-3xl overflow-hidden mt-6 md:mt-0">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-3xl"
          >
            {[
              "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  className="w-full h-[350px] object-cover"
                  alt={`Slide ${i + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 🏡 Featured Properties */}
      <section className="mt-16">
        <h2 className="text-4xl font-bold mb-6 text-secondary text-center">
          Featured Properties
        </h2>
        
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {property.length > 0 ? (
      property.map((p) => (
        <PropertyCard key={p._id} skill={p}></PropertyCard>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-full">
        No properties available.
      </p>
    )}
  </div>

        <div className="text-center mt-8">
          <Link to="/all-properties" className="btn btn-outline text-blue-600">
            Show All Properties
          </Link>
        </div>

      </section>

     
     <section className="mt-20 bg-gradient-to-r from-purple-700 to-cyan-600 py-16 text-white" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {[
      { icon: <FaSearch />, title: "Browse Properties", desc: "Explore thousands of listings from verified owners." },
      { icon: <FaSignInAlt />, title: "Login to View Details", desc: "Sign in for complete property information & pricing." },
      { icon: <FaCalendarCheck />, title: "Book or Contact", desc: "Schedule visits or directly contact the property owner." },
    ].map((item, i) => (
      <div key={i} className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 hover:scale-105 transition transform duration-300">
        <div className="text-5xl text-purple-700 mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>



      {/* Top Rated Agents */}
     <section className="mt-20 bg-gray-100 py-16" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center text-secondary mb-12">Top Rated Agents</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {[
      { name: "Alex Martin", skill: "Luxury Homes", rating: 4.9 },
      { name: "Rafi Khan", skill: "Commercial Spaces", rating: 4.8 },
      { name: "Maya Roy", skill: "Apartments", rating: 4.7 },
    ].map((agent, i) => (
      <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border-t-4 border-cyan-500">
        <div className="flex items-center gap-3 mb-3 text-cyan-600">
          <FaUserTie className="text-3xl" />
          <h3 className="text-lg font-bold">{agent.name}</h3>
        </div>
        <p className="text-gray-600">Specialty: {agent.skill}</p>
        <p className="text-yellow-500 flex items-center gap-1 mt-2"><FaStar /> {agent.rating}</p>
      </div>
    ))}
  </div>
</section>


      {/* 📅 Upcoming Open Houses */}
     <section className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-500 py-16 text-white" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center mb-10">Upcoming Open Houses</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
    {[
      { title: "Green Villa", date: "Nov 25", host: "Alex Martin" },
      { title: "Lakeview Apartment", date: "Dec 02", host: "Rafi Khan" },
    ].map((house, i) => (
      <div key={i} className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transform transition duration-300">
        <h3 className="text-2xl font-semibold text-cyan-700 mb-3">{house.title}</h3>
        <p className="flex items-center gap-2"><FaCalendarAlt className="text-cyan-600" /> {house.date}</p>
        <p className="flex items-center gap-2 mt-1"><FaChalkboardTeacher className="text-cyan-600" /> Hosted by {house.host}</p>
      </div>
    ))}
  </div>
</section>

      {/* 💬 Testimonials */}
     <section className="mt-20 bg-gray-50 py-20 px-6" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center text-secondary mb-12">What Our Clients Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      { name: "Tanvir Hasan", feedback: "Found my dream home with zero hassle! Great service.", image: "https://i.pravatar.cc/150?img=12" },
      { name: "Rima Akter", feedback: "Their agents were super helpful and guided me through the process.", image: "https://i.pravatar.cc/150?img=47" },
      { name: "Shuvo Roy", feedback: "Very professional service and transparent deals.", image: "https://i.pravatar.cc/150?img=33" },
    ].map((user, i) => (
      <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center border-t-4 border-purple-600">
        <img src={user.image} alt={user.name} className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-cyan-500 object-cover" />
        <h3 className="text-lg font-semibold text-cyan-700">{user.name}</h3>
        <p className="text-gray-600 italic mt-3">“{user.feedback}”</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
