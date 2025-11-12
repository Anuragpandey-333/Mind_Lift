import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Profile = () => {
  const navigate = useNavigate()
  const [isToggled, setIsToggled] = useState(false)
  const [user, setUser] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    phone: '',
    location: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const userData = JSON.parse(localStorage.getItem('user') || '{}')
    setIsToggled(theme === 'dark')
    setUser(userData)
    setFormData({
      name: userData.name || '',
      email: userData.email || '',
      bio: userData.bio || '',
      phone: userData.phone || '',
      location: userData.location || ''
    })
  }, [])

  const toggleTheme = () => {
    const newTheme = !isToggled
    setIsToggled(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const handleSave = async () => {
    setLoading(true)
    setTimeout(() => {
      const updatedUser = { ...user, ...formData }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setUser(updatedUser)
      setIsEditing(false)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isToggled 
        ? 'bg-gradient-to-br from-[#3A3A3A] via-[#4A4A4A] to-[#2A2A2A]' 
        : 'bg-gradient-to-br from-[#F5F5DC] via-[#D2B48C] to-[#DEB887]'
    }`}>
      <div className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate('/dashboard')}
              className={`flex items-center space-x-2 mb-4 transition-colors ${
                isToggled ? 'text-[#CD853F] hover:text-[#8B4513]' : 'text-[#8B4513] hover:text-[#CD853F]'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Dashboard</span>
            </button>
            <h1 className={`text-3xl font-bold ${
              isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
            }`}>Profile Settings</h1>
          </div>

          <div className={`backdrop-blur-sm p-8 rounded-3xl shadow-2xl border ${
            isToggled 
              ? 'bg-[#2A2A2A]/90 border-[#8B4513]/30' 
              : 'bg-[#F5F5DC]/90 border-[#8B4513]/20'
          }`}>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
                isToggled ? 'bg-[#8B4513]' : 'bg-[#8B4513]'
              }`}>
                {formData.name.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="text-center sm:text-left">
                <h2 className={`text-2xl font-bold ${
                  isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
                }`}>{formData.name || 'User'}</h2>
                <p className={`${
                  isToggled ? 'text-[#D2B48C]/70' : 'text-[#5A5A5A]/70'
                }`}>{formData.email}</p>
              </div>
              <div className="sm:ml-auto">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    isToggled 
                      ? 'bg-[#8B4513] hover:bg-[#8B4513]/90 text-white' 
                      : 'bg-[#8B4513] hover:bg-[#8B4513]/90 text-white'
                  }`}
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`block text-sm font-semibold ${
                  isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
                }`}>Full Name</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                    isToggled 
                      ? 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#2A2A2A] text-[#D2B48C] placeholder-[#D2B48C]/60' 
                      : 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#DEB887]/30 text-[#5A5A5A] placeholder-[#5A5A5A]/70'
                  } ${!isEditing ? 'opacity-60' : ''}`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-semibold ${
                  isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
                }`}>Email Address</label>
                <input
                  type="email"
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                    isToggled 
                      ? 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#2A2A2A] text-[#D2B48C] placeholder-[#D2B48C]/60' 
                      : 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#DEB887]/30 text-[#5A5A5A] placeholder-[#5A5A5A]/70'
                  } ${!isEditing ? 'opacity-60' : ''}`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-semibold ${
                  isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
                }`}>Phone Number</label>
                <input
                  type="tel"
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                    isToggled 
                      ? 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#2A2A2A] text-[#D2B48C] placeholder-[#D2B48C]/60' 
                      : 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#DEB887]/30 text-[#5A5A5A] placeholder-[#5A5A5A]/70'
                  } ${!isEditing ? 'opacity-60' : ''}`}
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-semibold ${
                  isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
                }`}>Location</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                    isToggled 
                      ? 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#2A2A2A] text-[#D2B48C] placeholder-[#D2B48C]/60' 
                      : 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#DEB887]/30 text-[#5A5A5A] placeholder-[#5A5A5A]/70'
                  } ${!isEditing ? 'opacity-60' : ''}`}
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className={`block text-sm font-semibold ${
                  isToggled ? 'text-[#D2B48C]' : 'text-[#5A5A5A]'
                }`}>Bio</label>
                <textarea
                  disabled={!isEditing}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none ${
                    isToggled 
                      ? 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#2A2A2A] text-[#D2B48C] placeholder-[#D2B48C]/60' 
                      : 'border-[#8B4513]/30 focus:ring-[#8B4513] bg-[#DEB887]/30 text-[#5A5A5A] placeholder-[#5A5A5A]/70'
                  } ${!isEditing ? 'opacity-60' : ''}`}
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>
            </div>

            {isEditing && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isToggled 
                      ? 'bg-[#8B4513] hover:bg-[#8B4513]/90 text-white' 
                      : 'bg-[#8B4513] hover:bg-[#8B4513]/90 text-white'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer isToggled={isToggled} />
    </div>
  )
}

export default Profile