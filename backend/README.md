# MindLift Backend Setup

## MongoDB Setup Options

### Option 1: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `.env` file:
   ```
   DATABASE_URL="mongodb+srv://username:password@cluster0.mongodb.net/mindlift?retryWrites=true&w=majority"
   ```

### Option 2: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Update `.env` file:
   ```
   DATABASE_URL="mongodb://localhost:27017/mindlift"
   ```

## Run the backend
```bash
npm run dev
```