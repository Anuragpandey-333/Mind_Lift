import { useState, useEffect } from 'react'

const Dashboard = ({ setIsAuthenticated }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsAuthenticated(false)
  }

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9V10z" />
        </svg>
      ),
      title: "Mood Tracker",
      description: "Track your daily emotions and mental state",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Mentorship",
      description: "Connect with verified mental health mentors",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fitness Tracker",
      description: "Monitor your physical wellness and activities",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Diet Planner",
      description: "Personalized nutrition for better mental health",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Scheduler",
      description: "Organize tasks and manage your daily routine",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "AI Chatbot",
      description: "24/7 AI support for mental wellness guidance",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">MindLift</h1>
            </div>
            <div className="flex items-center space-x-4">
              {user && (
                <span className="text-gray-700 font-medium">Welcome, {user.name}!</span>
              )}
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Your
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Wellness Dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive platform for mental wellness, productivity, and personal growth. 
            Take control of your well-being with our integrated tools and AI-powered insights.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className="mt-6">
                <span className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Get Started
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Your Wellness Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">0</div>
              <div className="text-gray-600">Days Active</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">0</div>
              <div className="text-gray-600">Mood Entries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">0</div>
              <div className="text-gray-600">Goals Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard