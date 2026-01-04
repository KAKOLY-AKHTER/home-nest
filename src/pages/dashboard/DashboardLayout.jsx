import { useContext, useState } from "react"
import { FaBars, FaBell, FaBuilding, FaChartLine, FaChevronDown, FaCog, FaHome, FaList, FaPlus, FaSignOutAlt, FaStar, FaTimes, FaUser } from "react-icons/fa"
import { Link, Outlet, useNavigate } from "react-router"
import { AuthContext } from "../../context/AuthContext"


const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [profileOpen, setProfileOpen] = useState(false)
  const navigate = useNavigate()
  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    // Logout logic here
    navigate('/login')
  }


  const getUserImage = () => {
    return user?.photoURL || 
           `https://ui-avatars.com/api/?name=${getUserName()}&background=random&color=fff&bold=true`
  }


    const getUserInitial = () => {
    if (user?.displayName) {
      return user.displayName.charAt(0).toUpperCase()
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase()
    }
    return 'U'
  }

  const getUserName = () => {
    return user?.displayName || user?.email?.split('@')[0] || 'User'
  }

  const getUserEmail = () => {
    return user?.email || 'user@example.com'
  }


  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-800 to-blue-900 text-white transition-all duration-300 flex flex-col`}>
        
        {/* Logo Section */}
        <div className="p-6 border-b border-blue-700 flex items-center justify-between">
          {sidebarOpen ? (
            <>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">HN</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold">HomeNest</h1>
                  <p className="text-xs text-blue-200">Dashboard</p>
                </div>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="text-white hover:text-blue-200">
                <FaTimes />
              </button>
            </>
          ) : (
            <button onClick={() => setSidebarOpen(true)} className="w-full flex justify-center">
              <FaBars className="text-xl" />
            </button>
          )}
        </div>

        {/* User Profile */}
         {sidebarOpen && user && (
          <div className="p-4 border-b border-blue-700">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={getUserImage()}
                  alt={getUserName()}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${getUserName()}&background=random&color=fff&bold=true`
                  }}
                />
              </div>
              <div>
                <h3 className="font-semibold">{getUserName()}</h3>
                <p className="text-sm text-blue-200 truncate max-w-[150px]">{getUserEmail()}</p>
                <span className="inline-block mt-1 px-2 py-1 bg-blue-700 text-blue-100 text-xs rounded-full">
                  Premium Member
                </span>
              </div>
            </div>
          </div>
        )}
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link 
            to="/dashboard" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition group"
          >
            <FaHome className="text-lg" />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>

          <Link 
            to="/dashboard/add-properties" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition group"
          >
            <FaPlus className="text-lg" />
            {sidebarOpen && <span>Add Properties</span>}
          </Link>

          <Link 
            to="/dashboard/my-properties" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition group"
          >
            <FaList className="text-lg" />
            {sidebarOpen && <span>My Properties</span>}
          </Link>

          <Link 
            to="/dashboard/my-ratings" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition group"
          >
            <FaStar className="text-lg" />
            {sidebarOpen && <span>My Ratings</span>}
          </Link>

          <Link 
            to="/dashboard/profile" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition group"
          >
            <FaUser className="text-lg" />
            {sidebarOpen && <span>Profile</span>}
          </Link>
        </nav>

        {/* Logout Button */}
        {sidebarOpen && (
          <div className="p-4 border-t border-blue-700">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-3 text-red-300 hover:bg-blue-700 rounded-lg transition"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {!sidebarOpen && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <FaBars className="text-gray-600" />
                </button>
              )}
              <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <FaBell className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

             {/* Profile Dropdown - Only show if user exists */}
                      {user && (
                <div className="relative">
                  <button 
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-3 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
                  >
                    <div className="relative">
                      <img
                        src={getUserImage()}
                        alt={getUserName()}
                        className="w-10 h-10 rounded-full border-2 border-blue-400 object-cover"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${getUserName()}&background=random&color=fff&bold=true`
                        }}
                      />
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="font-semibold text-gray-800">{getUserName()}</p>
                      <p className="text-sm text-gray-500 truncate max-w-[150px]">{getUserEmail()}</p>
                    </div>
                    <FaChevronDown className="text-gray-500" />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b">
                        <div className="flex items-center gap-3">
                          <img
                            src={getUserImage()}
                            alt={getUserName()}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">{getUserName()}</p>
                            <p className="text-sm text-gray-500 truncate">{getUserEmail()}</p>
                          </div>
                        </div>
                      </div>
                      <Link 
                        to="/dashboard/profile" 
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        onClick={() => setProfileOpen(false)}
                      >
                        <FaUser /> Profile
                      </Link>
                      <Link 
                        to="/dashboard" 
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        onClick={() => setProfileOpen(false)}
                      >
                        <FaHome /> Dashboard
                      </Link>
                      <Link 
                        to="/dashboard/settings" 
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        onClick={() => setProfileOpen(false)}
                      >
                        <FaCog /> Settings
                      </Link>
                      <div className="border-t my-1"></div>
                      <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Properties</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">12</h3>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <FaBuilding className="text-xl text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Reviews</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">24</h3>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <FaStar className="text-xl text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg. Rating</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">4.8</h3>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <FaChartLine className="text-xl text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Response Rate</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">98%</h3>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FaBell className="text-xl text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[calc(100vh-12rem)]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout






