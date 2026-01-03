import React from 'react'
import { FaCalendarAlt, FaDirections, FaMapMarkerAlt } from 'react-icons/fa'
import { FaCalendarCheck, FaClock } from 'react-icons/fa6'

const Upcoming = () => {
  return (
<section className="mt-12 py-10 bg-gradient-to-br from-gray-50 via-white to-gray-100" data-aos="fade-up">
  {/* Background Pattern - Subtle */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.2)_2px,transparent_1px)] bg-[length:40px_40px]"></div>
  </div>

  <div className="max-w-6xl mx-auto px-3 md:px-4 relative z-10">
    
    {/* Section Header - Professional */}
    <div className="text-center mb-8 md:mb-10">
      <div className="inline-block mb-3">
        <span className="text-[#1a56db] bg-blue-50 font-medium text-xs tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-100">
          <FaCalendarAlt className="inline mr-2" />
          OPEN HOUSE EVENTS
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-[#094ee5] mb-4">
        Upcoming Open Houses
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto px-2">
        Experience premium living firsthand. Private tours available upon request.
      </p>
    </div>

    {/* Grid Layout */}
    <div className="space-y-6 md:space-y-8">
      
      {/* Open House 1 */}
      <div className="group relative bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200">
        
        {/* Date & Time Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <div className="bg-gradient-to-br from-[#1a56db] to-[#3b82f6] text-white font-bold text-center py-2 px-4 rounded-lg shadow-sm">
              <div className="text-xs font-medium">SAT</div>
              <div className="text-base md:text-lg">DEC 25</div>
            </div>
            <div>
              <div className="text-gray-900 font-semibold text-sm md:text-base">CHEN HOUSE</div>
              <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                <FaClock className="text-gray-400" />
                <span>10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-[#1a56db] bg-blue-50 px-3 py-1 rounded-full text-xs font-medium">
              <FaMapMarkerAlt className="text-xs" />
              <span>GREEN CITY</span>
            </span>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-2/5">
            <div className="relative h-40 md:h-78 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=80" 
                alt="Modern Villa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <span className="bg-gradient-to-r from-sky-300 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                  AVAILABLE
                </span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-3/5 p-4">
            
            {/* Features Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { icon: "🛏️", value: "3", label: "BEDS", color: "text-blue-600" },
                { icon: "🚿", value: "2", label: "BATH", color: "text-blue-600" },
                { icon: "🚗", value: "1", label: "GARAGE", color: "text-blue-600" },
                { icon: "📐", value: "2300", label: "SQ FT", color: "text-blue-600" }
              ].map((feature, idx) => (
                <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-lg md:text-xl mb-1">{feature.icon}</div>
                  <div className={`text-base md:text-lg font-bold ${feature.color} font-mono`}>{feature.value}</div>
                  <div className="text-xs text-gray-500 uppercase mt-0.5">{feature.label}</div>
                </div>
              ))}
            </div>

            {/* Host Info & Price */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img 
                    src="https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw=" 
                    alt="Riyana Chowdhury"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500">HOSTED BY</div>
                  <div className="text-gray-900 font-semibold text-sm">Riyana Chowdhury</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">AVAILABLE FROM</div>
                <div className="text-gray-900 font-bold text-sm">12/2025</div>
              </div>
            </div>

            {/* Action Buttons - Matching your design */}
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-[#1a56db] to-[#3b82f6] text-white font-semibold py-2.5 md:py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow">
                <FaCalendarCheck className="text-sm" />
                <span>VIEW DETAILS</span>
              </button>
              <button className="flex-1 bg-white text-[#1a56db] font-semibold py-2.5 md:py-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                <FaDirections className="text-sm" />
                <span>GET DIRECTIONS</span>
              </button>
            </div>

            {/* URL */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="text-xs text-gray-500 text-center">
                FOR MORE INFO VISIT <span className="text-[#1a56db] font-medium">HOMENEST.COM/CHEN-HOUSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open House 2 */}
      <div className="group relative bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-emerald-200">
        
        {/* Date & Time Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <div className="bg-gradient-to-br from-[#1a56db] to-[#3b82f6] text-white font-bold text-center py-2 px-4 rounded-lg shadow-sm">
              <div className="text-xs font-medium">SUN</div>
              <div className="text-base md:text-lg">DEC 02</div>
            </div>
            <div>
              <div className="text-gray-900 font-semibold text-sm md:text-base">LAKEVIEW RESIDENCE</div>
              <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                <FaClock className="text-gray-400" />
                <span>11:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-sky-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-medium">
              <FaMapMarkerAlt className="text-xs" />
              <span>RIVERSIDE</span>
            </span>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-2/5">
            <div className="relative h-40 md:h-78 overflow-hidden">
              <img 
                src="https://www.hellolanding.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-hero-v2.b1e86bba.jpg&w=3840&q=75" 
                alt="Lakeview Apartment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <span className="bg-gradient-to-r from-sky-300 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                  AVAILABLE
                </span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-3/5 p-4">
            
            {/* Features Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { icon: "🛏️", value: "2", label: "BEDS", color: "text-sky-600" },
                { icon: "🚿", value: "2", label: "BATH", color: "text-sky-600" },
                { icon: "🚗", value: "1", label: "GARAGE", color: "text-sky-600" },
                { icon: "📐", value: "1500", label: "SQ FT", color: "text-sky-600" }
              ].map((feature, idx) => (
                <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-lg md:text-xl mb-1">{feature.icon}</div>
                  <div className={`text-base md:text-lg font-bold ${feature.color} font-mono`}>{feature.value}</div>
                  <div className="text-xs text-gray-500 uppercase mt-0.5">{feature.label}</div>
                </div>
              ))}
            </div>

            {/* Host Info & Price */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img 
                    src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" 
                    alt="Rafi Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500">HOSTED BY</div>
                  <div className="text-gray-900 font-semibold text-sm">Rafi Khan</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">AVAILABLE FROM</div>
                <div className="text-gray-900 font-bold text-sm">08/2025</div>
              </div>
            </div>

            {/* Action Buttons - Matching your design */}
            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-br from-[#1a56db] to-[#3b82f6] text-white font-semibold py-2.5 md:py-3 rounded-lg hover:from-sky-700 hover:to-sky-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow">
                <FaCalendarCheck className="text-sm" />
                <span>VIEW DETAILS</span>
              </button>
              <button className="flex-1 bg-white text-sky-600 font-semibold py-2.5 md:py-3 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                <FaDirections className="text-sm" />
                <span>GET DIRECTIONS</span>
              </button>
            </div>

            {/* URL */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="text-xs text-gray-500 text-center">
                FOR MORE INFO VISIT <span className="text-sky-600 font-medium">HOMENEST.COM/LAKEVIEW</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* CTA Section */}
    <div className="text-center mt-8 pt-6 border-t border-gray-200">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-200 rounded-xl px-4 md:px-6 py-4 mb-3 max-w-lg mx-auto w-full shadow-sm">
        <div className="text-left flex-1">
          <div className="text-gray-900 font-semibold text-sm md:text-base">Schedule a private tour</div>
          <div className="text-gray-500 text-xs md:text-sm">Available anytime at your convenience</div>
        </div>
        <button className="bg-gradient-to-r from-blue-700 to-sky-500 text-white font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-sm md:text-base shadow-sm hover:shadow">
          BOOK PRIVATE TOUR
        </button>
      </div>
      <p className="text-gray-400 text-xs md:text-sm">
        All properties professionally verified • HOMENEST.COM
      </p>
    </div>
  </div>
</section>


  )
}

export default Upcoming