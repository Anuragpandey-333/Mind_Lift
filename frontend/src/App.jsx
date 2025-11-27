import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/signup" 
            element={!isAuthenticated ? <Signup setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/profile" 
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/features" 
            element={isAuthenticated ? <Features /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/about" 
            element={isAuthenticated ? <About /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/contact" 
            element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
