import React from 'react'
import { FaArrowRight, FaChartBar, FaRegNewspaper } from 'react-icons/fa6'
import { Link } from 'react-router'

const Blog = () => {
  return (
   <section className="mt-20 py-16 bg-gradient-to-br from-blue-50 to-cyan-50" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    
    <div className="flex flex-col lg:flex-row items-center gap-12">
      
      {/* Left Content */}
      <div className="lg:w-1/2">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
            <FaChartBar
             className="text-white text-sm" />
            <span className="text-white text-sm font-medium">MARKET INSIGHTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a56db] mb-6">
            Real Estate <span className="text-blue-600">Market Trends</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Stay informed with latest market data, price trends, and investment opportunities in Bangladesh's real estate sector.
          </p>
          
          <div className="space-y-6">
            {[
              { label: "Dhaka Property Prices", value: "+8.5%", trend: "up" },
              { label: "Rental Yield", value: "6.2%", trend: "stable" },
              { label: "New Developments", value: "150+", trend: "up" },
              { label: "Average Days on Market", value: "45", trend: "down" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="flex items-center gap-2">
                  <div className={`text-xl font-bold ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {stat.value}
                  </div>
                  {stat.trend === 'up' && <span className="text-green-500">↗</span>}
                  {stat.trend === 'down' && <span className="text-red-500">↘</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content - Blog/News */}
      <div className="lg:w-1/2">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <FaRegNewspaper className="text-2xl" />
              <h3 className="text-2xl font-bold">Latest News & Updates</h3>
            </div>
            <p className="text-blue-100">Stay updated with real estate news</p>
          </div>
          
          <div className="p-6 space-y-6">
            {[
              {
                title: "New Real Estate Regulations 2024",
                excerpt: "Government announces new policies affecting property registration and taxes...",
                date: "Dec 15, 2024",
                tag: "Policy"
              },
              {
                title: "Smart City Developments in Bangladesh",
                excerpt: "Major infrastructure projects transforming urban living spaces...",
                date: "Dec 10, 2024",
                tag: "Development"
              },
              {
                title: "Investment Opportunities in Commercial Real Estate",
                excerpt: "Growing demand for office spaces in major business districts...",
                date: "Dec 5, 2024",
                tag: "Investment"
              }
            ].map((news, index) => (
              <div key={index} className="group border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {news.tag}
                  </span>
                  <span className="text-gray-500 text-sm">{news.date}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">{news.excerpt}</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
                  Read More
                  <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              <span>View All Articles</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  )
}

export default Blog