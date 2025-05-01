# Chat App

This is a full-stack chat application built with a React frontend and an Express backend. It supports real-time messaging, user authentication, and profile management.

## Features

- User authentication (signup, login, logout)
- Real-time messaging with Socket.IO
- Profile management with image upload (Cloudinary integration)
- Theme customization
- Responsive design

## Project Structure

```
chat-app/
├── backend/                # Backend code
│   ├── src/
│   │   ├── controllers/    # API controllers
│   │   ├── lib/            # Utility libraries (e.g., database, socket, cloudinary)
│   │   ├── middleware/     # Middleware (e.g., authentication)
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── seeds/          # Database seeders
│   │   └── index.js        # Entry point for the backend
│   └── package.json        # Backend dependencies and scripts
├── frontend/               # Frontend code
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── constants/      # Constants (e.g., themes)
│   │   ├── lib/            # Utility libraries (e.g., Axios instance)
│   │   ├── pages/          # React pages
│   │   ├── store/          # Zustand stores for state management
│   │   ├── App.jsx         # Main React app component
│   │   └── main.jsx        # React entry point
│   ├── index.html          # HTML template
│   └── package.json        # Frontend dependencies and scripts
├── package.json            # Root scripts for building and starting the app
└── README.md               # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js and npm or pnpm installed
- MongoDB instance running
- Cloudinary account for image uploads

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```
4. Start the backend server:
   ```bash
   pnpm dev
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```

### Running the Full Application

1. From the root directory, build the frontend and backend:
   ```bash
   pnpm run build
   ```
2. Start the backend server (it will serve the frontend in production mode):
   ```bash
   pnpm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a new user
- `POST /api/auth/login` - Log in a user
- `POST /api/auth/logout` - Log out a user
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Messaging
- `GET /api/message/users` - Get users for the sidebar
- `GET /api/message/:id` - Get messages with a specific user
- `POST /api/message/send/:id` - Send a message to a user

## Technologies Used

### Frontend
- React
- Zustand (state management)
- Tailwind CSS (styling)
- Axios (HTTP requests)

### Backend
- Express.js
- MongoDB with Mongoose
- Socket.IO (real-time communication)
- Cloudinary (image uploads)

## Live Demo

You can access the live version of this project at the following link:

[Chat App Live Demo](https://chat-app-m1gn.onrender.com)

## License

This project is licensed under the ISC License.