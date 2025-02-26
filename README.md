# Dwellix

Dwellix is a full-stack **MERN** application that serves as an **Airbnb clone** for hotel and property booking. It provides users with an intuitive interface to browse, book, and manage rental properties.

## Features

- User authentication with **JWT**
- Property listings with **image uploads**
- Search and filter functionality
- Booking system with **real-time availability**
- User dashboard for managing reservations
- Responsive **UI/UX** design using **Tailwind CSS**
- Deployment on **Render**

## Technologies Used

### Frontend
- **Next.js**
- **React.js**
- **Tailwind CSS**
- **TypeScript**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose for ORM)
- **Cloudinary** (for image storage)

### Deployment
- **Render** for backend
- **Vercel** for frontend

## Screenshots

(https://res-console.cloudinary.com/dkk2rer7z/thumbnails/v1/image/upload/v1740573906/c2FtcGxlcy9TY3JlZW5zaG90XzIwMjUtMDItMjZfMTgwNTAwX2JobmE4Zg==/drilldown)

## Installation

### Prerequisites
- Node.js installed
- MongoDB set up locally or on **MongoDB Atlas**

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dwellix.git
   cd dwellix
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add the necessary keys:
     ```plaintext
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
- Visit `http://localhost:3000` to access the app
- Sign up or log in to book properties
- Manage reservations from the dashboard



