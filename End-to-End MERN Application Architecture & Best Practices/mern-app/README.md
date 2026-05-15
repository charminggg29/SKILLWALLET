# MERN Application Lab

A simple yet complete MERN (MongoDB, Express.js, React, Node.js) application demonstrating fundamental MERN stack concepts, CRUD operations, and best practices for application architecture.

## Project Structure

```
mern-app/
├── backend/
│   ├── models/
│   │   └── item.model.js      # Mongoose schema for Item
│   ├── routes/
│   │   └── items.js           # API routes for CRUD operations
│   ├── .env                   # Environment variables
│   ├── server.js              # Express server entry point
│   └── package.json           # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html         # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   └── ItemList.js    # Component to display items
│   │   ├── App.js             # Main React component
│   │   ├── App.css            # Application styles
│   │   ├── index.js           # React root render
│   │   └── index.css          # Global styles
│   ├── .gitignore
│   └── package.json           # Frontend dependencies
└── README.md                  # This file
```

## Prerequisites

- Node.js and npm installed
- MongoDB running locally or MongoDB Atlas URI available
- VS Code or any code editor

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/mern-app-db
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

   Expected output:
   ```
   MongoDB database connection established successfully
   Server is running on port: 5000
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will open in your browser at `http://localhost:3000`

## API Endpoints

- **GET /items** - Retrieve all items
- **POST /items/add** - Add a new item
  - Request body: `{ "name": "string", "description": "string" }`
- **GET /items/:id** - Retrieve an item by ID

## Testing the Application

1. Use Postman or Insomnia to send requests to the backend API
2. Add a new item:
   ```json
   POST http://localhost:5000/items/add
   {
     "name": "Example Item",
     "description": "This is a sample item."
   }
   ```
3. Refresh the frontend to see the new item displayed

## Troubleshooting

- **MongoDB Connection Error**: Ensure MongoDB is running and the URI in `.env` is correct
- **CORS Error**: Verify that `cors` middleware is enabled in `server.js`
- **Network Error**: Make sure both backend and frontend servers are running
- **Cannot read property 'map' of undefined**: Check that items state is initialized as an empty array

## Learning Outcomes

Upon completion, you will understand:
- Building a Node.js/Express.js API with CRUD operations
- Implementing MongoDB/Mongoose schemas and queries
- Creating React components that fetch and display data
- Connecting frontend and backend using HTTP requests
- Best practices for MERN application architecture
