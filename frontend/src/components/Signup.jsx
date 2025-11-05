import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isToggled, setIsToggled] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsToggled(theme === 'dark')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/auth/signup`, {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      setIsAuthenticated(true)
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-700 ${
      isToggled 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100'
    }`}>
      <div className={`backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md border transition-all duration-500 ${
        isToggled 
          ? 'bg-slate-800/80 border-purple-500/20' 
          : 'bg-white/80 border-white/20'
      }`}>
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-500 ${
            isToggled 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
              : 'bg-gradient-to-r from-emerald-600 to-teal-600'
          }`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold tracking-tight bg-clip-text text-transparent mb-2 transition-all duration-500 ${
            isToggled 
              ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
              : 'bg-gradient-to-r from-emerald-600 to-teal-600'
          }`}>MindLift</h1>
          <p className={`font-medium tracking-wide transition-all duration-500 ${
            isToggled ? 'text-gray-300' : 'text-gray-600'
          }`}>Start your wellness journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className={`block text-sm font-semibold transition-all duration-300 ${
              isToggled ? 'text-gray-300' : 'text-gray-700'
            }`}>Full Name</label>
            <input
              type="text"
              required
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                isToggled 
                  ? 'border-purple-500/30 focus:ring-purple-500 bg-slate-700/50 text-white placeholder-gray-400' 
                  : 'border-gray-200 focus:ring-emerald-500 bg-gray-50/50 text-gray-900 placeholder-gray-500'
              }`}
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm font-semibold transition-all duration-300 ${
              isToggled ? 'text-gray-300' : 'text-gray-700'
            }`}>Email Address</label>
            <input
              type="email"
              required
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                isToggled 
                  ? 'border-purple-500/30 focus:ring-purple-500 bg-slate-700/50 text-white placeholder-gray-400' 
                  : 'border-gray-200 focus:ring-emerald-500 bg-gray-50/50 text-gray-900 placeholder-gray-500'
              }`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm font-semibold transition-all duration-300 ${
              isToggled ? 'text-gray-300' : 'text-gray-700'
            }`}>Password</label>
            <input
              type="password"
              required
              minLength="6"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                isToggled 
                  ? 'border-purple-500/30 focus:ring-purple-500 bg-slate-700/50 text-white placeholder-gray-400' 
                  : 'border-gray-200 focus:ring-emerald-500 bg-gray-50/50 text-gray-900 placeholder-gray-500'
              }`}
              placeholder="Create a password (min. 6 characters)"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm font-semibold transition-all duration-300 ${
              isToggled ? 'text-gray-300' : 'text-gray-700'
            }`}>Confirm Password</label>
            <input
              type="password"
              required
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                isToggled 
                  ? 'border-purple-500/30 focus:ring-purple-500 bg-slate-700/50 text-white placeholder-gray-400' 
                  : 'border-gray-200 focus:ring-emerald-500 bg-gray-50/50 text-gray-900 placeholder-gray-500'
              }`}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 px-4 rounded-xl font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg ${
              isToggled 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className={`font-medium tracking-wide transition-all duration-300 ${
            isToggled ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Already have an account?{' '}
            <Link to="/login" className={`font-semibold tracking-wide transition-colors ${
              isToggled 
                ? 'text-purple-400 hover:text-purple-300' 
                : 'text-emerald-600 hover:text-emerald-700'
            }`}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup