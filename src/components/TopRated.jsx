import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaBuilding, FaStar, FaUserTie } from 'react-icons/fa6'

const TopRated = () => {
    return (

        <section className="mt-20 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-14">
                     <div className="inline-block mb-3">
                            <span className="text-[#1a56db] bg-blue-50 font-medium text-xs tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-100">
                              <FaStar className="inline mr-2" />
                             RATES
                            </span>
                          </div>
                    <h2 className="text-4xl drop-shadow-xl md:text-5xl font-bold text-[#094ee5] mb-4">
                        Top Rated Agents
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Meet our expert agents dedicated to finding your perfect home with personalized service.
                    </p>
                </div>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Agent 1 */}
                    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        {/* Agent Image */}
                        <div className="relative h-80 overflow-hidden">
                            <img
                                src="https://media.istockphoto.com/id/1705503967/photo/confident-businesswoman-in-modern-office.jpg?s=612x612&w=0&k=20&c=_f2sAtCUkBBgKK8oxDnzGs2CLvYBTN5jfOLl1glQ8yw="
                                alt="Alex Martin"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Experience Badge */}
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-sky-300 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                ⭐ 4.9 Rating
                            </div>
                            {/* Specialty Badge */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-700">
                                🏡 Luxury Homes
                            </div>
                        </div>

                        {/* Agent Info */}
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Riyana Chowdhury
                                    </h3>
                                    <p className="text-gray-500">Senior Property Consultant</p>
                                </div>
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <FaUserTie className="text-blue-600 text-2xl" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <div className="text-blue-700 font-bold text-lg">120+</div>
                                        <div className="text-gray-500 text-xs">Properties Sold</div>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <div className="text-blue-700 font-bold text-lg">98%</div>
                                        <div className="text-gray-500 text-xs">Client Satisfaction</div>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <div className="text-blue-700 font-bold text-lg">8yrs</div>
                                        <div className="text-gray-500 text-xs">Experience</div>
                                    </div>
                                </div>

                                {/* Contact Button */}
                                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    Contact Alex
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Agent 2 */}
                    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        {/* Agent Image */}
                        <div className="relative h-80 overflow-hidden">
                            <img
                                src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
                                alt="Rafi Khan"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Experience Badge */}
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-sky-300 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                ⭐ 4.8 Rating
                            </div>
                            {/* Specialty Badge */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-green-700">
                                🏢 Commercial Spaces
                            </div>
                        </div>

                        {/* Agent Info */}
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Rafi Khan</h3>
                                    <p className="text-gray-500">Commercial Real Estate Expert</p>
                                </div>
                                <div className="bg-green-100 p-3 rounded-full">
                                    <FaBuilding className="text-green-600 text-2xl" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-green-50 p-3 rounded-lg">
                                        <div className="text-sky-700 font-bold text-lg">85+</div>
                                        <div className="text-gray-500 text-xs">Commercial Deals</div>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-lg">
                                        <div className="text-sky-700 font-bold text-lg">96%</div>
                                        <div className="text-gray-500 text-xs">Success Rate</div>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-lg">
                                        <div className="text-sky-700 font-bold text-lg">6yrs</div>
                                        <div className="text-gray-500 text-xs">Experience</div>
                                    </div>
                                </div>

                                {/* Contact Button */}
                                <button className="w-full bg-gradient-to-r from-blue-700 to-sky-500 text-white py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    Contact Rafi
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Agent 3 */}
                    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        {/* Agent Image */}
                        <div className="relative h-80 overflow-hidden">
                            <img
                                src="https://mayaroy.com/assets/img/avatar.jpg"
                                alt="Maya Roy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Experience Badge */}
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-sky-300 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                ⭐ 4.7 Rating
                            </div>
                            {/* Specialty Badge */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-700">
                                🏘️ Apartments
                            </div>
                        </div>

                        {/* Agent Info */}
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Maya Roy</h3>
                                    <p className="text-gray-500">Residential Apartment Expert</p>
                                </div>
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <FaHome className="text-purple-600 text-2xl" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-purple-50 p-3 rounded-lg">
                                        <div className="text-blue-700 font-bold text-lg">200+</div>
                                        <div className="text-gray-500 text-xs">Rentals Managed</div>
                                    </div>
                                    <div className="bg-purple-50 p-3 rounded-lg">
                                        <div className="text-blue-700 font-bold text-lg">99%</div>
                                        <div className="text-gray-500 text-xs">Tenant Satisfaction</div>
                                    </div>
                                    <div className="bg-purple-50 p-3 rounded-lg">
                                        <div className="text-blue-700 font-bold text-lg">5yrs</div>
                                        <div className="text-gray-500 text-xs">Experience</div>
                                    </div>
                                </div>

                                {/* Contact Button */}
                                <button className="w-full bg-gradient-to-r from-blue-700 to-sky-500 text-white py-3 rounded-xl font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    Contact Maya
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View All Agents Button */}
                <div className="text-center mt-12">
                    <button className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-700 to-sky-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <span>Meet All Our Agents</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <p className="text-gray-500 text-sm mt-4">
                        Our agents have helped 2000+ clients find their dream homes
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TopRated