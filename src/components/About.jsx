import React from 'react'
import { FaHandshake, FaHome, FaUsers } from 'react-icons/fa'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-30 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About HomeNest</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in finding the perfect home
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaHome className="text-2xl text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            At HomeNest, we believe everyone deserves to find their perfect home. 
            Our mission is to simplify the property search process by connecting buyers 
            with verified properties and trusted sellers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <FaUsers className="text-xl text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">For Buyers</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Verified property listings</li>
              <li>✓ Transparent pricing</li>
              <li>✓ Secure transactions</li>
              <li>✓ 24/7 support</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FaHandshake className="text-xl text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900">For Sellers</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Wide audience reach</li>
              <li>✓ Easy listing process</li>
              <li>✓ Professional photography</li>
              <li>✓ Marketing support</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Verified Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </div>
  )
}

export default About