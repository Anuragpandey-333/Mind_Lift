# Deployment Guide

## Backend Deployment (Vercel)

1. **Push your backend code to GitHub**

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Set the root directory to `backend`
   - Add environment variables:
     - `DATABASE_URL`: Your MongoDB connection string
     - `JWT_SECRET`: Your JWT secret key
     - `NODE_ENV`: `production`

3. **Your backend will be deployed with the serverless configuration**

## Frontend Deployment (Vercel/Netlify)

1. **Update environment variable:**
   - Set `VITE_API_URL` to your deployed backend URL
   - Example: `VITE_API_URL=https://your-backend.vercel.app`

2. **Deploy to Vercel:**
   - Import your repository
   - Set the root directory to `frontend`
   - Add environment variable: `VITE_API_URL=https://your-backend.vercel.app`

## Key Changes Made

1. **Backend serverless compatibility:**
   - Added `vercel.json` configuration
   - Modified `server.js` to export app for serverless
   - Updated Prisma client for serverless environments
   - Added build scripts

2. **Frontend API URL configuration:**
   - Updated API calls to use environment variables
   - Added `.env` files for configuration

3. **Database optimization:**
   - Prisma client singleton pattern for serverless

## Environment Variables

### Backend (.env)
```
DATABASE_URL=mongodb+srv://...
JWT_SECRET=your_secret_key
NODE_ENV=production
```

### Frontend (.env)
```
VITE_API_URL=https://your-backend.vercel.app
```