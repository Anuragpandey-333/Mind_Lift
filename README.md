# MindLift – A Student Mental Wellness and Productivity Platform

A comprehensive platform for student mental wellness and productivity with authentication system, mentorship, mood tracking, and AI-powered support.

## Problem Statement

College students today face extreme academic pressure, leading to stress, anxiety, and burnout. Many lack access to proper mentorship, time management support, and healthy lifestyle guidance. MindLift aims to uplift student mental health by providing a holistic platform that combines mentorship sessions, fitness and diet planning, mood tracking, and peer connection to help students achieve emotional balance and academic productivity.

## System Architecture

**Architecture Flow:** Frontend → Backend (API) → Database

**Tech Stack:**
- **Frontend:** React.js with React Router for page navigation
- **Backend:** Node.js + Express
- **Database:** MongoDB (non-relational)
- **Authentication:** JWT-based login/signup
- **AI Integration:** OpenAI API for mental wellness chatbot and personalized recommendations

**Hosting:**
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

## Key Features

| Category | Features |
|----------|----------|
| **Authentication & Authorization** | User registration, login, logout, role-based access (student/mentor/admin) |
| **Mentorship & Guidance** | Book mentorship sessions, connect with verified mentors, chat or video call support |
| **Mood Tracker** | Daily mood logging with emoji scale and notes; weekly mood report visualization |
| **Fitness Tracker** | Track workouts, steps, and water intake; receive fitness suggestions |
| **Diet Plan** | Personalized meal recommendations to reduce stress and improve focus |
| **Scheduler** | To-do list, reminders, and daily planner for academic and personal tasks |
| **Peer Connection** | Connect with fellow students for support and community discussions |
| **AI Chatbot** | Smart chatbot powered by OpenAI for stress management, motivation, and journaling |

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React.js, React Router, Axios, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Token), bcrypt for password hashing |
| **AI** | OpenAI API for chatbot and recommendations |
| **Hosting** | Vercel, Render, MongoDB Atlas |

## API Overview

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/auth/signup` | POST | Register a new user | Public |
| `/api/auth/login` | POST | Authenticate user and return JWT | Public |
| `/api/auth/me` | GET | Get current user (protected) | Authenticated |
| `/api/mood` | POST | Log daily mood and note | Authenticated |
| `/api/mood` | GET | Fetch mood history of user | Authenticated |
| `/api/mentors` | GET | Retrieve list of available mentors | Authenticated |
| `/api/schedule` | POST | Create or update user schedule | Authenticated |
| `/api/diet` | GET | Get personalized diet plan | Authenticated |
| `/api/chat/ai` | POST | AI chatbot for mental wellness support | Authenticated |

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

## Project Structure
```
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── App.jsx
├── backend/           # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── package.json       # Root package manager
```

## Features Overview

- **User Authentication**: Secure JWT-based registration and login
- **Responsive Design**: Modern UI with Tailwind CSS and theme switching
- **Protected Routes**: Dashboard access for authenticated users only
- **Mental Wellness Focus**: Comprehensive tools for student mental health
- **Scalable Architecture**: Modular component structure for easy expansion

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for student mental wellness and productivity.