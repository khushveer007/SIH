# Backend

This directory contains the Node.js/Express.js backend server for the SIH project.

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

1. Navigate to this directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/sih
   JWT_SECRET=your_jwt_secret_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
- `src/` - Source code
- `models/` - Database models
- `routes/` - API routes
- `middleware/` - Custom middleware
- `config/` - Configuration files
- `package.json` - Dependencies and scripts

## Available Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Colleges
- `GET /api/colleges` - Get all colleges
- `POST /api/colleges` - Create college (College Agent only)
- `PUT /api/colleges/:id` - Update college
- `DELETE /api/colleges/:id` - Delete college

### Jobs
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Post job (HR only)
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### Students
- `GET /api/students/profile` - Get student profile
- `PUT /api/students/profile` - Update student profile

## Database Models
- User (Student, College Agent, HR)
- College
- Job
- Application
- Notification

## Security Features
- JWT authentication
- Password hashing with bcrypt
- CORS enabled
- Input validation