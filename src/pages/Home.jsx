
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay,  Pagination } from "swiper/modules";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaSearch,
  FaSignInAlt,
  FaCalendarCheck,
  FaStar,
  FaUserTie,
  FaShieldAlt,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { PropertyCard } from "../components/PropertyCard";
import { useEffect, useState } from "react";
import WhyChoose from "../components/WhyChoose";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import { FaArrowRight, FaEnvelope, FaPaperPlane, FaRocket } from "react-icons/fa6";
import Partner from "../components/Partner";
import Blog from "../components/Blog";


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
        ? [...data].reverse().slice(0, 8)
        : [];
      setProperty(sorted);
    })
    .catch((err) => console.error(err));
}, []);

  return (
    <div className="container mx-auto mt-10 max-w-[1280px] px-4 md:py-20 py-30">
     



      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md">
        {/* Left: Text + Swiper text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-bold drop-shadow-lg leading-tight">
            <span className="text-4xl md:text-6xl  text-[#ff6501]">Find &</span>
            <br />
            <span className="text-4xl md:text-6xl text-blue-600">
              Invest Smartly
            </span>
          </h2>
         

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500 }}
            loop={true}
              
            className="  mt-4"
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

           <Link
            to="/all-properties"
            className="inline-block mt-6 px-6 py-4 bg-gradient-to-r from-blue-700 to-sky-500 text-white rounded-full  hover:from-red-500 hover:to-orange-400 transition"
          >
            Explore Properties
          </Link>

          {/* Scroll Hint */}
          <div className="mt-8 ml-10">
   <button
    onClick={() =>
      window.scrollTo({
        top: window.innerHeight, 
        behavior: "smooth",      
      })
    }
    className="h-13 w-13 flex items-center justify-center 
               bg-gradient-to-r from-blue-600 to-sky-400 
               rounded-full animate-bounce shadow-lg cursor-pointer"
  >
    <span className="text-white text-xl">↓</span>
  </button>

</div>

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
                  className="w-full h-[65vh] object-cover"
                  alt={`Slide ${i + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

     

      {/* Featured Properties */}
      <section className="mt-16">
         <div className="text-center mb-10">
    <h2 className="text-5xl font-bold drop-shadow-xl text-[#094ee5] mb-4">
      Featured Properties
    </h2>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
      Discover premium apartments and homes that match your lifestyle. 
      Each property is carefully selected for quality, location, and value.
    </p>
  </div>
        
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
          <Link to="/all-properties" className=" text-center px-4 py-2 bg-gradient-to-r from-blue-700 to-sky-500 text-white text-sm rounded-full hover:from-red-500 hover:to-orange-400 transition-colors">
            Show All Properties
          </Link>
        </div>

      </section>


<div className="mt-10 text-center justify-center flex">
  <button
    onClick={() =>
      document.getElementById("section1").scrollIntoView({
        behavior: "smooth",
      })
    }
    className="h-12 animate-spin w-12 flex items-center justify-center 
               bg-gradient-to-r from-blue-600 to-sky-400 
               rounded-full shadow-lg cursor-pointer"
  >
    <span className="text-white text-xl">↓</span>
  </button>
</div>


     <WhyChoose></WhyChoose>
<TopRated></TopRated>
<Upcoming></Upcoming>
<Testimonial></Testimonial>
<Partner></Partner>
<Blog></Blog>
<Faq></Faq>

<section className="mt-20 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" data-aos="fade-up">
  <div className="max-w-4xl mx-auto px-4 md:px-6">
    <div className="text-center">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-6">
        <FaEnvelope
         className="text-white text-sm" />
        <span className="text-white text-sm font-medium">NEWSLETTER</span>
      </div>
      
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
        Stay <span className="text-sky-400">Updated</span>
      </h2>
      
      {/* Description */}
      <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Subscribe to get the latest property listings, market insights, and exclusive offers directly in your inbox.
      </p>
      
      {/* Subscription Form */}
      <div className="relative max-w-xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
        <form className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-1">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
                  required
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <FaPaperPlane className="text-sm" />
              <span>Subscribe Now</span>
            </button>
          </div>
        </form>
        
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { icon: "🔒", text: "No spam" },
            { icon: "📈", text: "Market trends" },
            { icon: "🏠", text: "New listings" },
            { icon: "🎁", text: "Exclusive offers" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trust Badge */}
      <div className="mt-10 pt-8 border-t border-slate-700">
        <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
          <FaShieldAlt className="text-sky-400" />
          <span>Your email is secure. We respect your privacy.</span>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Ready to Find Your Dream Home - CTA Section */}
<section className="mt-20 py-20 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden" data-aos="fade-up">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_2px,transparent_1px)] bg-[length:40px_40px]"></div>
  </div>
  
  <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
    <div className="text-center">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
        <FaHome className="text-white text-sm" />
        <span className="text-white text-sm font-medium">GET STARTED</span>
      </div>
      
      {/* Main Title */}
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Ready to Find Your<br />
        <span className="text-yellow-300">Dream Home</span>?
      </h2>
      
      {/* Description */}
      <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Join <span className="font-bold text-yellow-300">10,000+</span> happy clients who found their perfect home with HomeNest. 
        Start your journey today!
      </p>
      
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { number: "5,000+", label: "Properties Listed" },
          { number: "98%", label: "Client Satisfaction" },
          { number: "24/7", label: "Support Available" },
          { number: "50+", label: "Expert Agents" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
            <div className="text-white/80 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Link 
          to="/signup" 
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
        >
          <FaRocket className="text-lg" />
          <span>Get Started Free</span>
          <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link 
          to="/all-properties" 
          className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
        >
          <FaSearch className="text-lg" />
          <span>Browse Properties</span>
        </Link>
      </div>
      
      {/* Testimonial */}
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
            <img 
              src="https://img.freepik.com/premium-photo/personal-professional-success-is-my-daily-motivation-studio-portrait-attractive-confident-young-businesswoman-posing-against-dark-blue-background_590464-67340.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Happy Client"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="text-white font-semibold">Sarah Johnson</div>
            <div className="text-white/80 text-sm">Found her dream apartment</div>
            <div className="flex text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-sm" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-white/90 italic text-sm">
          "HomeNest made finding my perfect apartment so easy! The process was smooth and professional."
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
