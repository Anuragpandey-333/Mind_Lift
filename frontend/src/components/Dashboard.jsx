import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isToggled, setIsToggled] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    const theme = localStorage.getItem('theme')
    const newUserFlag = localStorage.getItem('isNewUser')
    if (userData) {
      setUser(JSON.parse(userData))
    }
    setIsToggled(theme === 'dark')
    setIsNewUser(newUserFlag === 'true')
  }, [])

  useEffect(() => {
    // Clear the flag after component has rendered with the message
    if (isNewUser) {
      const timer = setTimeout(() => {
        localStorage.removeItem('isNewUser')
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isNewUser])

  const toggleTheme = () => {
    const newTheme = !isToggled
    setIsToggled(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsAuthenticated(false)
  }

  const features = [
    {
      title: "Mood Tracker",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Track your daily emotions and mental state",
      color: "#FCD8CD",
      bgColor: "bg-pink-50"
    },
    {
      title: "Mentorship",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      description: "Connect with verified mental health mentors",
      color: "#FEEBF6",
      bgColor: "bg-blue-50"
    },
    {
      title: "Fitness Tracker",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Monitor your physical wellness and activities",
      color: "#EBD6FB",
      bgColor: "bg-green-50"
    },
    {
      title: "Diet Planner",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      description: "Personalized nutrition for better mental health",
      color: "#687FE5",
      bgColor: "bg-orange-50"
    },
    {
      title: "Scheduler",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: "Organize tasks and manage your daily routine",
      color: "#FCD8CD",
      bgColor: "bg-violet-50"
    },
    {
      title: "AI Chatbot",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      description: "24/7 AI support for mental wellness guidance",
      color: "#FEEBF6",
      bgColor: "bg-teal-50"
    }
  ]

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isToggled 
        ? 'bg-gradient-to-br from-[#3A3A3A] via-[#4A4A4A] to-[#2A2A2A]' 
        : 'bg-gradient-to-br from-[#F5F5DC] via-[#D2B48C] to-[#DEB887]'
    }`}>
      {/* Navigation */}
      <nav className={`backdrop-blur-md shadow-sm border-b transition-all duration-500 ${
        isToggled 
          ? 'bg-[#2A2A2A]/90 border-[#8B4513]/30' 
          : 'bg-[#F5F5DC]/80 border-[#8B4513]/20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button 
                onClick={toggleTheme}
                className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-110 ${
                  isToggled 
                    ? 'from-[#8B4513] to-[#CD853F] rotate-180' 
                    : 'from-[#8B4513] to-[#CD853F] rotate-0'
                }`}
              >
                <svg className={`w-7 h-7 text-white transition-all duration-500 ${
                  isToggled ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
              <button 
                onClick={() => navigate('/')}
                className={`text-3xl font-semibold bg-clip-text text-transparent tracking-wider transition-all duration-500 hover:opacity-80 ${
                  isToggled 
                    ? 'bg-gradient-to-r from-[#CD853F] via-[#8B4513] to-[#CD853F]' 
                    : 'bg-gradient-to-r from-[#8B4513] via-[#CD853F] to-[#8B4513]'
                }`}
              >
                MindLift
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                isToggled 
                  ? 'text-[#D2B48C] hover:text-[#CD853F]' 
                  : 'text-[#5A5A5A] hover:text-[#8B4513]'
              }`}>Features</a>
              <a href="#about" className={`font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                isToggled 
                  ? 'text-[#D2B48C] hover:text-[#CD853F]' 
                  : 'text-[#5A5A5A] hover:text-[#8B4513]'
              }`}>About</a>
              <a href="#contact" className={`font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                isToggled 
                  ? 'text-[#D2B48C] hover:text-[#CD853F]' 
                  : 'text-[#5A5A5A] hover:text-[#8B4513]'
              }`}>Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              {user && (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => navigate('/profile')}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                      isToggled ? 'bg-[#8B4513]/20 hover:bg-[#8B4513]/30' : 'bg-[#8B4513]/10 hover:bg-[#8B4513]/20'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white ${
                      isToggled ? 'bg-[#8B4513]' : 'bg-[#8B4513]'
                    }`}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="hidden md:block">
                      <p className={`font-semibold text-sm ${
                        isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
                      }`}>{user.name}</p>
                      <p className={`text-xs ${
                        isToggled ? 'text-[#D2B48C]/70' : 'text-[#5A5A5A]/70'
                      }`}>{user.email}</p>
                    </div>
                  </button>
                  <button
                    onClick={handleLogout}
                    className={`text-white px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                      isToggled 
                        ? 'bg-[#8B4513] hover:bg-[#8B4513]/90' 
                        : 'bg-[#8B4513] hover:bg-[#8B4513]/90'
                    }`}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-2xl font-bold text-white ${
            isToggled ? 'bg-[#8B4513]' : 'bg-[#8B4513]'
          }`}>
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 transition-all duration-500 ${
            isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
          }`}>
            {isNewUser ? 'Welcome' : 'Welcome back'}, {user?.name || 'Friend'}!
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 transition-all duration-500 ${
            isToggled ? 'text-[#D2B48C]/80' : 'text-[#5A5A5A]'
          }`}>
            Ready to continue your wellness journey? Let's make today amazing!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
            isToggled ? 'bg-[#1A2A4F]/60' : 'bg-white/80'
          }`}>
            <div className={`text-3xl font-bold mb-2 ${
              isToggled ? 'text-[#F7A5A5]' : 'text-[#687FE5]'
            }`}>7</div>
            <div className={`text-sm font-medium ${
              isToggled ? 'text-[#FFF2EF]/80' : 'text-gray-600'
            }`}>Days Active</div>
          </div>
          <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
            isToggled ? 'bg-[#1A2A4F]/60' : 'bg-white/80'
          }`}>
            <div className={`text-3xl font-bold mb-2 ${
              isToggled ? 'text-[#F7A5A5]' : 'text-[#687FE5]'
            }`}>12</div>
            <div className={`text-sm font-medium ${
              isToggled ? 'text-[#FFF2EF]/80' : 'text-gray-600'
            }`}>Mood Entries</div>
          </div>
          <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
            isToggled ? 'bg-[#1A2A4F]/60' : 'bg-white/80'
          }`}>
            <div className={`text-3xl font-bold mb-2 ${
              isToggled ? 'text-[#F7A5A5]' : 'text-[#687FE5]'
            }`}>3</div>
            <div className={`text-sm font-medium ${
              isToggled ? 'text-[#FFF2EF]/80' : 'text-gray-600'
            }`}>Goals Achieved</div>
          </div>
        </div>

        {/* Feature Cards */}
        <h3 className={`text-2xl font-bold mb-8 text-center ${
          isToggled ? 'text-[#FFF2EF]' : 'text-gray-900'
        }`}>Your Wellness Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                isToggled 
                  ? 'bg-[#1A2A4F]/60 border-[#F7A5A5]/20' 
                  : 'bg-white/90 border-gray-100'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.color === '#687FE5' ? 'text-white' : 'text-gray-700'}`} style={{backgroundColor: feature.color}}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold tracking-tight mb-3 ${
                isToggled ? 'text-[#FFF2EF]' : 'text-gray-900'
              }`}>{feature.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${
                isToggled ? 'text-[#FFF2EF]/80' : 'text-gray-600'
              }`}>{feature.description}</p>
              <button className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                isToggled 
                  ? 'bg-[#F7A5A5]/20 text-[#F7A5A5] hover:bg-[#F7A5A5]/30' 
                  : 'bg-[#687FE5]/10 text-[#687FE5] hover:bg-[#687FE5]/20'
              }`}>
                Open Tool
              </button>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className={`mt-12 p-6 rounded-2xl shadow-lg ${
          isToggled ? 'bg-[#1A2A4F]/60' : 'bg-white/90'
        }`}>
          <h3 className={`text-xl font-bold mb-6 ${
            isToggled ? 'text-[#FFF2EF]' : 'text-gray-900'
          }`}>Recent Activity</h3>
          <div className="space-y-4">
            <div className={`flex items-center p-4 rounded-lg ${
              isToggled ? 'bg-[#F7A5A5]/10' : 'bg-[#687FE5]/5'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                isToggled ? 'bg-[#F7A5A5]' : 'bg-[#687FE5]'
              }`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className={`font-semibold ${
                  isToggled ? 'text-[#FFF2EF]' : 'text-gray-900'
                }`}>Mood logged: Happy</p>
                <p className={`text-sm ${
                  isToggled ? 'text-[#FFF2EF]/70' : 'text-gray-500'
                }`}>2 hours ago</p>
              </div>
            </div>
            <div className={`flex items-center p-4 rounded-lg ${
              isToggled ? 'bg-[#F7A5A5]/10' : 'bg-[#687FE5]/5'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                isToggled ? 'bg-[#F7A5A5]' : 'bg-[#687FE5]'
              }`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className={`font-semibold ${
                  isToggled ? 'text-[#FFF2EF]' : 'text-gray-900'
                }`}>Completed 30min workout</p>
                <p className={`text-sm ${
                  isToggled ? 'text-[#FFF2EF]/70' : 'text-gray-500'
                }`}>Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard