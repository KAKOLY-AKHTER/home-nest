import { useState } from "react";
import { FaCheckCircle, FaHome, FaQuestionCircle, FaSearch, FaShieldAlt, FaSyncAlt } from "react-icons/fa";
import { FaArrowRight, FaBuilding, FaClock, FaDollarSign, FaFileContract, FaHeadset, FaUsers, FaWhatsapp } from "react-icons/fa6";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      id: 0,
      icon: <FaSearch className="text-blue-600 text-lg" />,
      color: "blue",
      question: "How do I search for properties?",
      subtitle: "Property search guide",
      answer: "Use our advanced search filters to find properties by location, price range, number of bedrooms, property type, and amenities. You can also save your searches and get notifications for new listings that match your criteria.",
      details: [
        "Advanced filter options available",
        "Save searches for quick access",
        "Get email notifications for new matches"
      ]
    },
    {
      id: 1,
      icon: <FaDollarSign className="text-green-600 text-lg" />,
      color: "green",
      question: "What are the payment methods?",
      subtitle: "Payment & pricing",
      answer: "We accept various payment methods including bKash, Nagad, bank transfer, and credit cards. Payment terms vary by property - some require deposit, others full payment. All transactions are secure and protected.",
      details: [
        "bKash & Nagad supported",
        "Secure online transactions",
        "Flexible payment plans"
      ]
    },
    {
      id: 2,
      icon: <FaHome className="text-purple-600 text-lg" />,
      color: "purple",
      question: "How do I schedule a property visit?",
      subtitle: "Viewing appointments",
      answer: "Click 'Schedule Visit' on any property listing, choose your preferred date and time, and our agent will confirm within 24 hours. You can also request virtual tours for properties you can't visit in person.",
      details: [
        "Schedule visits online",
        "Virtual tour options",
        "Agent confirmation within 24h"
      ]
    },
    {
      id: 3,
      icon: <FaFileContract className="text-orange-600 text-lg" />,
      color: "orange",
      question: "What documents do I need?",
      subtitle: "Legal requirements",
      answer: "For buying: NID, TIN certificate, proof of income, and bank statements. For renting: NID, employment letter, and reference letter. Our agents will guide you through the entire documentation process.",
      details: [
        "Buyer/renter documentation checklist",
        "Agent guidance available",
        "Legal verification assistance"
      ]
    },
    {
      id: 4,
      icon: <FaUsers className="text-red-600 text-lg" />,
      color: "red",
      question: "How do agents get verified?",
      subtitle: "Agent verification",
      answer: "All HomeNest agents undergo a strict verification process including background checks, license verification, and customer reviews. Only verified agents with good ratings can list properties on our platform.",
      details: [
        "Background checks conducted",
        "License verification required",
        "Customer review based rating"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:text-blue-700', border: 'border-blue-500' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:text-green-700', border: 'border-green-500' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:text-purple-700', border: 'border-purple-500' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:text-orange-700', border: 'border-orange-500' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:text-red-700', border: 'border-red-500' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="mt-16 py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header - Like Other Sections */}
        <div className="text-center mb-12">
           <div className="inline-block mb-3">
                                      <span className="text-[#1a56db] bg-blue-50 font-medium text-xs tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-100">
                                        <FaCheckCircle className="inline mr-2" />
                                       FAQ
                                      </span>
                                    </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#094ee5] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get answers to common questions about buying, renting, and selling properties
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column - Main FAQ Details */}
          <div className="lg:w-1/2">
            {/* Expanded FAQ Item */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-4 mb-6">
                <div className={`${getColorClasses(faqItems[openIndex].color).bg} p-3 rounded-full`}>
                  {faqItems[openIndex].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {faqItems[openIndex].question}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 text-sm">
                    <FaClock />
                    <span>Updated: December 2024</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {faqItems[openIndex].answer}
              </p>
              
              {/* Details List */}
              <div className="space-y-3 mb-6">
                {faqItems[openIndex].details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`${getColorClasses(faqItems[openIndex].color).bg} p-2 rounded-full`}>
                      <FaCheckCircle
                       className={`${getColorClasses(faqItems[openIndex].color).text}`} />
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Related Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full text-sm">
                    <FaBuilding />
                    <span>Property related</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full text-sm">
                    <FaShieldAlt />
                    <span>Verified information</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-purple-600 bg-purple-50 px-4 py-2 rounded-full text-sm">
                    <FaSyncAlt />
                    <span>Updated regularly</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaHeadset className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Still have questions?</h3>
                  <p className="text-blue-100">Our support team is here to help you 24/7</p>
                </div>
              </div>
              <button className="w-full bg-white text-blue-600 font-bold py-3.5 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-3">
                <FaWhatsapp className="text-green-500 text-xl" />
                <span>Chat with Support</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Column - FAQ List */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              
              {/* FAQ List Header */}
              <div className="mb-8 bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Common Questions About Properties
                </h3>
                <p className="text-gray-500 text-sm">
                  Click on any question to see detailed answer. We cover everything from 
                  searching properties to final documentation.
                </p>
              </div>

              {/* FAQ Items List */}
              <div className="space-y-4">
                {faqItems.map((item, index) => {
                  const colorClasses = getColorClasses(item.color);
                  const isOpen = openIndex === index;
                  
                  return (
                    <div 
                      key={item.id} 
                      className={`group bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => setOpenIndex(index)}
                    >
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`${colorClasses.bg} p-3 rounded-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className={`text-lg font-semibold ${isOpen ? colorClasses.text : 'text-gray-900'} group-hover:${colorClasses.hover}`}>
                              {item.question}
                            </h4>
                            <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                          </div>
                        </div>
                        <div className={`text-2xl font-light ${isOpen ? colorClasses.text : 'text-gray-400'} group-hover:${colorClasses.text}`}>
                          {isOpen ? '−' : '+'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-500">FAQs Answered</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-gray-500">Satisfaction Rate</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
                  <div className="text-2xl font-bold text-purple-600">15min</div>
                  <div className="text-xs text-gray-500">Response Time</div>
                </div>
              </div>

              {/* View All FAQ */}
              <div className="mt-8 text-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 mx-auto">
                  <span>View all FAQ categories</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq