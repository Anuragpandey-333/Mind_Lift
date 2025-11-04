# MindLift - Student Mental Wellness Platform

A comprehensive platform for student mental wellness and productivity with authentication system.

## Features
- User registration and login
- JWT-based authentication
- Protected dashboard
- Responsive design with Tailwind CSS

## Tech Stack
- **Frontend**: React + Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT tokens, bcrypt password hashing

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud)

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Configure environment variables:**
   - Update `backend/.env` with your MongoDB URI and JWT secret

3. **Start development servers:**
   ```bash
   npm run dev
   ```

This will start:
- Frontend on http://localhost:5173
- Backend on http://localhost:5001

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/signup` | POST | Register new user |
| `/api/auth/login` | POST | User login |
| `/api/auth/me` | GET | Get current user (protected) |

### Project Structure
```
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Dashboard.jsx
│   │   └── App.jsx
├── backend/           # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── package.json       # Root package manager
```