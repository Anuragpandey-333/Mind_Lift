const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth')

const app = express()

// Middleware
app.use(cors({
  origin : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
}))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API')
})
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})