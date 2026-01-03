import React from 'react'
import { FaArrowRight, FaHandshake } from 'react-icons/fa6'
import { Link } from 'react-router'

const Partner = () => {
  return (

<section className="mt-20 py-16 bg-gradient-to-b from-white to-slate-50" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    
    {/* Section Header */}
    <div className="text-center mb-12">
      {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4">
        <FaHandshake
         className="text-white text-sm" />
        <span className="text-white text-sm font-medium">TRUSTED PARTNERS</span>
      </div> */}

      <div className="inline-block mb-3">
                                            <span className="text-[#1a56db] bg-blue-50 font-medium text-xs tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-100">
                                              <FaHandshake className="inline mr-2" />
                                          TRUSTED PARTNERS
                                            </span>
                                          </div>
      <h2 className="text-4xl md:text-5xl font-bold text-[#1a56db] mb-4">
        Trusted by Industry Leaders
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        We partner with leading banks, developers, and service providers to offer you the best real estate experience
      </p>
    </div>

    {/* Partners Grid with Real Logos */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
      {/* Partner 1 - bKash */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-100 group">
        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          bK
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">bKash</h3>
        <p className="text-gray-500 text-sm text-center">Payment Partner</p>
        <div className="mt-3 text-xs text-green-600 font-medium">Digital Payments</div>
      </div>

      {/* Partner 2 - City Bank */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-100 group">
        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          CB
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">City Bank</h3>
        <p className="text-gray-500 text-sm text-center">Banking Partner</p>
        <div className="mt-3 text-xs text-blue-600 font-medium">Home Loans</div>
      </div>

      {/* Partner 3 - Basundhara Group */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-100 group">
        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          BG
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Basundhara Group</h3>
        <p className="text-gray-500 text-sm text-center">Developer Partner</p>
        <div className="mt-3 text-xs text-orange-600 font-medium">Real Estate</div>
      </div>

      {/* Partner 4 - Rangs Properties */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-100 group">
        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          RP
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Rangs Properties</h3>
        <p className="text-gray-500 text-sm text-center">Agency Partner</p>
        <div className="mt-3 text-xs text-purple-600 font-medium">Property Agency</div>
      </div>

      {/* Partner 5 - Square Group */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-100 group">
        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          SG
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Square Group</h3>
        <p className="text-gray-500 text-sm text-center">Corporate Partner</p>
        <div className="mt-3 text-xs text-teal-600 font-medium">Development</div>
      </div>
    </div>

    {/* Additional Partners Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {[
        { name: "DBL Group", type: "Textile & Real Estate", color: "from-blue-700 to-blue-900" },
        { name: "ACI Limited", type: "Pharmaceutical & Housing", color: "from-green-600 to-emerald-700" },
        { name: "Bengal Group", type: "Steel & Construction", color: "from-gray-700 to-gray-900" },
        { name: "Navana Group", type: "Automotive & Realty", color: "from-red-500 to-orange-600" }
      ].map((partner, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-lg flex items-center justify-center text-white font-bold`}>
            {partner.name.split(' ').map(w => w[0]).join('')}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{partner.name}</h4>
            <p className="text-gray-500 text-xs">{partner.type}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Trust Badges */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {[
        {
          icon: "🏆",
          title: "Award Winning Platform",
          description: "Best Real Estate Platform 2024 - Bangladesh Business Awards",
          award: "Excellence Award"
        },
        {
          icon: "🔒",
          title: "Secure Transactions",
          description: "Partnered with leading banks for secure payment processing",
          partners: "10+ Banking Partners"
        },
        {
          icon: "🤝",
          title: "Verified Partners",
          description: "All partners undergo strict verification and background checks",
          verified: "100% Verified"
        }
      ].map((badge, index) => (
        <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-5xl mb-4">{badge.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
          <p className="text-gray-600 mb-4">{badge.description}</p>
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
            {badge.award || badge.partners || badge.verified}
          </div>
        </div>
      ))}
    </div>

    {/* Partnership Benefits */}
    <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#1a56db] mb-4">Benefits of Our Partnerships</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">Our strategic partnerships enable us to offer exclusive benefits to our clients</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Special Home Loan Rates",
            description: "Get up to 0.5% lower interest rates through our banking partners",
            partner: "City Bank, HSBC, Standard Chartered"
          },
          {
            title: "Developer Discounts",
            description: "Exclusive discounts on properties from partner developers",
            partner: "Basundhara, Rangs, Navana Realty"
          },
          {
            title: "Fast Payment Processing",
            description: "Instant payment processing through digital payment partners",
            partner: "bKash, Nagad, Rocket"
          }
        ].map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 text-2xl mb-3">
              {index === 0 ? "💰" : index === 1 ? "🏗️" : "⚡"}
            </div>
            <h4 className="font-bold text-[#4478e8] text-lg mb-2">{benefit.title}</h4>
            <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
            <div className="text-xs text-gray-500">
              <span className="font-medium">Partners:</span> {benefit.partner}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}

export default Partner