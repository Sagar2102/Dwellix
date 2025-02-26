# Dwellix

Dwellix is a full-stack application that serves for hotel and property booking. It provides users with an intuitive interface to browse, book, and manage rental properties.

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
- **Render** 

## Screenshots
- **Login Page** 
![Login Page](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740574001/samples/Screenshot_2025-02-26_180828_l5ucqz.png)

<br>

- **Home Page** 
![Home Page](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740573906/samples/Screenshot_2025-02-26_180500_bhna8f.png)

<br>

- **Create Listing** 
![Create Listing](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740573939/samples/Screenshot_2025-02-26_180634_zm6i2a.png)

<br>

- **Listing Detail** 
![Listing Detail](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740573958/samples/Screenshot_2025-02-26_180710_gsobrb.png)
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740573958/samples/Screenshot_2025-02-26_180728_hk7iym.png)
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740573958/samples/Screenshot_2025-02-26_180744_bpo3rh.png)

<br>

- **My-Trips Page** 
![My-Trips Page](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740573939/samples/Screenshot_2025-02-26_180611_xkoxdt.png)

<br>

- **My-Properties Page** 
![My-Properties Page](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740573939/samples/Screenshot_2025-02-26_180611_xkoxdt.png)

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



