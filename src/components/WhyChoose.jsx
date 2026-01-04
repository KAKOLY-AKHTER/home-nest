import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCalendarCheck, FaStar, FaUserTie } from 'react-icons/fa6'

const WhyChoose = () => {
  return (
  <section className="mt-16  bg-gradient-to-b from-white to-blue-50 overflow-hidden" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-6 relative">
    
  

    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold drop-shadow-xl text-[#094ee5] mb-4">Why choose us</h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Your Trusted Partner in Real Estate Success, With Expertise in Property and Investment,
        We're Here to Guide You Towards Your Dream Apartment.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Expertise */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
            <FaUserTie className="text-blue-600 text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Expertise</h3>
        <p className="text-gray-600 leading-relaxed">
          Benefit from our seasoned team's wealth of experience in real estate,
          ensuring precise guidance for your perfect apartment search.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <span className="text-sm text-blue-600 font-semibold">✓ 10+ Years Experience</span>
        </div>
      </div>

      {/* Personalized Service */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
            <FaSearch className="text-green-600 text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Service</h3>
        <p className="text-gray-600 leading-relaxed">
          Tailored apartment solutions crafted for your unique needs with
          individualized attention and goal-aligned strategies.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <span className="text-sm text-green-600 font-semibold">✓ Custom Matching</span>
        </div>
      </div>

      {/* Forward Thinking */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 text-[#094ee5]">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
            <FaStar className="text-[#094ee5] text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Forward Thinking</h3>
        <p className="text-gray-600 leading-relaxed">
          Access cutting-edge solutions and strategies to maximize your
          property potential in an ever-evolving real estate market.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <span className="text-sm text-[#094ee5] font-semibold">✓ Market Insights</span>
        </div>
      </div>

      {/* Proven Results */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
            <FaCalendarCheck className="text-orange-600 text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Results</h3>
        <p className="text-gray-600 leading-relaxed">
          Trust our track record of success with satisfied clients who
          achieved their apartment dreams through our professional guidance.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <span className="text-sm text-orange-600 font-semibold">✓ 98% Satisfaction</span>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <button className="px-8 py-4 bg-gradient-to-r from-blue-700 to-sky-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
        🏡 Start Your Apartment Search Today
      </button>
      <p className="text-gray-500 pb-5 mt-2 text-sm">
        Join thousands who found their dream home with us
      </p>
    </div>

  </div>
</section>
  )
}

export default WhyChoose