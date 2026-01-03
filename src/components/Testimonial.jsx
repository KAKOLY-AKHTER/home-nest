import React from 'react'
import { FaHome, FaPenAlt, FaSmile } from 'react-icons/fa'
import { FaBuilding, FaCheck, FaHeadset, FaStar, FaUser } from 'react-icons/fa6'

const Testimonial = () => {
  return (
    
<section className="mt-16 py-16 bg-gradient-to-b from-white to-blue-50" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    
    {/* Section Header */}
    <div className="text-center mb-12">
      <div className="inline-block mb-3">
                                 <span className="text-[#1a56db] bg-blue-50 font-medium text-xs tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-100">
                                   <FaStar className="inline mr-2" />
                                  TESTIMONIALS
                                 </span>
                               </div>
      <h2 className="text-4xl md:text-5xl font-bold text-[#094ee5] mb-4">
        What Our Clients Say
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Hear from happy homeowners who found their dream homes with HomeNest
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Testimonial 1 */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-blue-100 text-5xl">
          "
        </div>
        
        {/* Client Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" 
              alt="Tanvir Hasan"
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 bg-sky-500 text-white p-1 rounded-full">
              <FaCheck className="text-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Tanvir Hasan</h3>
            <p className="text-gray-500 text-sm">Software Engineer</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 leading-relaxed mb-6 italic">
          "Found my dream home with zero hassle! The entire process was seamless. 
          HomeNest's agents were incredibly professional and helped me negotiate 
          the perfect price for my new apartment."
        </p>

        {/* Property Info */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaHome className="text-blue-500" />
              <span className="text-sm text-gray-600">3-Bed Apartment</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">CLOSED</div>
              <div className="text-sm font-semibold text-sky-500">May 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-blue-100 text-5xl">
          "
        </div>
        
        {/* Client Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&auto=format&fit=crop&q=80" 
              alt="Rima Akter"
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 bg-sky-500 text-white p-1 rounded-full">
              <FaCheck className="text-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Rima Akter</h3>
            <p className="text-gray-500 text-sm">Doctor</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 leading-relaxed mb-6 italic">
          "Their agents were super helpful and guided me through every step of 
          the process. As a first-time buyer, I was nervous, but HomeNest made 
          everything so simple and transparent."
        </p>

        {/* Property Info */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaHome className="text-purple-500" />
              <span className="text-sm text-gray-600">2-Bed Condo</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">CLOSED</div>
              <div className="text-sm font-semibold text-sky-600">March 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-blue-100 text-5xl">
          "
        </div>
        
        {/* Client Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" 
              alt="Shuvo Roy"
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 bg-sky-500 text-white p-1 rounded-full">
              <FaCheck className="text-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Shuvo Roy</h3>
            <p className="text-gray-500 text-sm">Business Owner</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 leading-relaxed mb-6 italic">
          "Very professional service and transparent deals. I was able to find 
          a commercial space for my business within my budget. Highly recommend 
          HomeNest for anyone looking for property!"
        </p>

        {/* Property Info */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaBuilding className="text-orange-500" />
              <span className="text-sm text-gray-600">Commercial Space</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">CLOSED</div>
              <div className="text-sm font-semibold text-sky-600">January 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="mt-16 grid  grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { number: "4.9/5", label: "Average Rating", icon: <FaStar className="text-yellow-400" /> },
        { number: "500+", label: "Happy Clients", icon: <FaUser className="text-blue-500" /> },
        { number: "98%", label: "Satisfaction Rate", icon: <FaSmile className="text-green-500" /> },
        { number: "24/7", label: "Support", icon: <FaHeadset className="text-purple-500" /> }
      ].map((stat, idx) => (
        <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">{stat.number}</div>
          <div className="text-gray-600 text-sm mb-2 font-bold">{stat.label}</div>
          <div className="flex justify-center">{stat.icon}</div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-12 text-center">
      <button className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-700 to-sky-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <FaPenAlt />
        <span>Share Your Experience</span>
      </button>
      <p className="text-gray-500 text-sm mt-4">
        Join our community of satisfied homeowners
      </p>
    </div>
  </div>
</section>
  )
}

export default Testimonial