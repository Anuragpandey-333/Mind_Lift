import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const theme = localStorage.getItem('theme');
    setIsAuthenticated(!!token);
    setIsToggled(theme === 'dark');
    
    // Replace current history entry to prevent back navigation
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isToggled;
    setIsToggled(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };
  return (
    <div
      className="min-h-screen transition-all duration-700 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: isToggled 
          ? 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920)' 
          : 'url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920)'
      }}
    >
      {/* Overlay gradient for readability */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isToggled 
          ? 'bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-slate-900/90' 
          : 'bg-gradient-to-br from-emerald-50/90 via-teal-50/80 to-cyan-100/90'
      }`}></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`backdrop-blur-md shadow-sm border-b transition-all duration-500 ${
          isToggled 
            ? 'bg-slate-800/80 border-purple-500/30' 
            : 'bg-white/70 border-emerald-100/50'
        }`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={toggleTheme}
                  className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-110 ${
                    isToggled 
                      ? 'from-purple-400 to-pink-500 rotate-180' 
                      : 'from-emerald-400 to-teal-500 rotate-0'
                  }`}
                >
                  <svg className={`w-7 h-7 text-white transition-all duration-500 ${
                    isToggled ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </button>
                <h1 className={`text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent tracking-wider transition-all duration-500 ${
                  isToggled 
                    ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400' 
                    : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600'
                }`}>MindLift</h1>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className={`font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                  isToggled 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}>Features</a>
                <a href="#about" className={`font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                  isToggled 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}>About</a>
                <a href="#contact" className={`font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                  isToggled 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}>Contact</a>
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isToggled 
                    ? 'text-gray-300 hover:bg-purple-900/30' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div className="hidden md:flex items-center space-x-4">
                {isAuthenticated ? (
                  <button
                    onClick={() => navigate('/dashboard')}
                    className={`text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                      isToggled 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                    }`}
                  >
                    Dashboard
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => navigate('/login')}
                      className={`font-semibold text-sm tracking-wide transition-all duration-300 px-4 py-2 rounded-full ${
                        isToggled 
                          ? 'text-gray-300 hover:text-purple-400 hover:bg-purple-900/30' 
                          : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => navigate('/signup')}
                      className={`text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                        isToggled 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                          : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                      }`}
                    >
                      🚀 Start Learning
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden border-t transition-all duration-300 ${
              isToggled 
                ? 'bg-slate-800/90 border-purple-500/30' 
                : 'bg-white/90 border-gray-200'
            }`}>
              <div className="px-6 py-4 space-y-4">
                <a href="#features" className={`block font-medium transition-colors ${
                  isToggled 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}>Features</a>
                <a href="#about" className={`block font-medium transition-colors ${
                  isToggled 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}>About</a>
                <a href="#contact" className={`block font-medium transition-colors ${
                  isToggled 
                    ? 'text-gray-300 hover:text-purple-400' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}>Contact</a>
                
                <div className="pt-4 space-y-3">
                  {isAuthenticated ? (
                    <button
                      onClick={() => navigate('/dashboard')}
                      className={`w-full text-white py-3 rounded-full font-medium shadow-md transition-all duration-300 ${
                        isToggled 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                      }`}
                    >
                      Dashboard
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => navigate('/login')}
                        className={`w-full font-medium py-3 rounded-full transition-all duration-300 ${
                          isToggled 
                            ? 'text-gray-300 hover:bg-purple-900/30' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => navigate('/signup')}
                        className={`w-full text-white py-3 rounded-full font-medium shadow-md transition-all duration-300 ${
                          isToggled 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                            : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                        }`}
                      >
                        Start Learning
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section (Centered Vertically) */}
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="max-w-4xl">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-500 ${
              isToggled ? 'text-white' : 'text-gray-900'
            }`}>
              Elevate Your
              <span className={`block bg-clip-text text-transparent transition-all duration-500 ${
                isToggled 
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600'
              }`}>
                Mental Wellness
              </span>
            </h1>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed transition-all duration-500 px-4 ${
              isToggled ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A comprehensive platform designed for students to manage stress, track mood, 
              connect with mentors, and build healthy habits for academic and personal success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button
                onClick={() => navigate('/signup')}
                className={`text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg text-base sm:text-lg hover:scale-105 transform ${
                  isToggled 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                }`}
              >
                Start Your Journey
              </button>
              <button
                onClick={() => navigate('/login')}
                className={`border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-200 text-base sm:text-lg hover:scale-105 transform ${
                  isToggled 
                    ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white' 
                    : 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                }`}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid (Below the fold) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`backdrop-blur-sm p-8 rounded-2xl shadow-xl border hover:-translate-y-2 transition-all duration-300 ${
              isToggled 
                ? 'bg-slate-800/80 border-purple-500/20' 
                : 'bg-white/80 border-white/20'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                isToggled ? 'text-white' : 'text-gray-900'
              }`}>Mood Tracking</h3>
              <p className={`transition-all duration-300 ${
                isToggled ? 'text-gray-300' : 'text-gray-600'
              }`}>Monitor your emotional well-being with daily mood logs and insights.</p>
            </div>

            <div className={`backdrop-blur-sm p-8 rounded-2xl shadow-xl border hover:-translate-y-2 transition-all duration-300 ${
              isToggled 
                ? 'bg-slate-800/80 border-purple-500/20' 
                : 'bg-white/80 border-white/20'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                isToggled ? 'text-white' : 'text-gray-900'
              }`}>Expert Mentorship</h3>
              <p className={`transition-all duration-300 ${
                isToggled ? 'text-gray-300' : 'text-gray-600'
              }`}>Connect with verified mental health professionals and peer mentors.</p>
            </div>

            <div className={`backdrop-blur-sm p-8 rounded-2xl shadow-xl border hover:-translate-y-2 transition-all duration-300 ${
              isToggled 
                ? 'bg-slate-800/80 border-purple-500/20' 
                : 'bg-white/80 border-white/20'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                isToggled ? 'text-white' : 'text-gray-900'
              }`}>Wellness Tools</h3>
              <p className={`transition-all duration-300 ${
                isToggled ? 'text-gray-300' : 'text-gray-600'
              }`}>Comprehensive fitness tracking, diet planning, and productivity tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;