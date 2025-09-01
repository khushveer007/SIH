# SIH Authentication API Documentation

## Overview
The SIH platform provides comprehensive authentication services supporting three user roles: Students, College Agents, and HR Recruiters.

## Base URL
```
http://localhost:5000/api/auth
```

## Authentication Endpoints

### 1. User Registration
**POST** `/api/auth/register`

Register a new user account with role-based profile information.

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "role": "student",
  "phone": "+1234567890",
  "profile": {
    // Role-specific profile data
  }
}
```

#### Role-Specific Profile Examples

**Student Profile:**
```json
{
  "college": "ABC University",
  "course": "Computer Science",
  "year": 3,
  "cgpa": 8.5,
  "skills": ["JavaScript", "React", "Node.js"],
  "resume": "url_to_resume",
  "portfolio": "url_to_portfolio"
}
```

**College Agent Profile:**
```json
{
  "college": "ABC University",
  "designation": "Placement Officer",
  "department": "Computer Science",
  "experience": 5,
  "contactInfo": {
    "phone": "+1234567890",
    "email": "agent@college.edu"
  }
}
```

**HR Recruiter Profile:**
```json
{
  "company": "Tech Corp",
  "designation": "HR Manager",
  "industry": "Technology",
  "companySize": "500-1000",
  "location": "New York, USA",
  "experience": 8
}
```

#### Response (Success)
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "student",
      "phone": "+1234567890",
      "profile": {
        // Profile summary based on role
      },
      "isEmailVerified": false,
      "createdAt": "2025-09-01T21:00:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

#### Response (Error)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Email is required", "Password must be at least 6 characters"]
}
```

### 2. User Login
**POST** `/api/auth/login`

Authenticate user credentials and receive JWT token.

#### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response (Success)
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "student",
      "phone": "+1234567890",
      "profile": {
        // Profile summary
      },
      "isEmailVerified": false,
      "lastLogin": "2025-09-01T21:15:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

#### Response (Error)
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### 3. Get Current User Profile
**GET** `/api/auth/me`

Retrieve current authenticated user's profile information.

#### Headers
```
Authorization: Bearer <jwt_token>
```

#### Response (Success)
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "student",
      "phone": "+1234567890",
      "profile": {
        // Complete profile data
      },
      "isEmailVerified": false,
      "lastLogin": "2025-09-01T21:15:00.000Z",
      "createdAt": "2025-09-01T21:00:00.000Z"
    }
  }
}
```

## Authentication Middleware

### JWT Token Usage
Include the JWT token in the Authorization header for protected routes:
```
Authorization: Bearer <your_jwt_token>
```

### Role-Based Access
The middleware supports role-based authorization:
- `protect()` - Requires valid JWT token
- `authorize('student')` - Requires specific role
- `authorize('student', 'college_agent')` - Requires one of specified roles

## Error Handling

### Common Error Responses
- **400 Bad Request**: Validation errors or duplicate email
- **401 Unauthorized**: Invalid credentials or missing/invalid token
- **404 Not Found**: User not found
- **500 Internal Server Error**: Server/database errors

### Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Detailed error messages"] // Optional
}
```

## Security Features

1. **Password Hashing**: bcryptjs with salt rounds
2. **JWT Tokens**: Secure token-based authentication
3. **Input Validation**: Comprehensive validation for all inputs
4. **Role-Based Access**: Granular permission control
5. **CORS Protection**: Configured for frontend origin
6. **Helmet Security**: Security headers middleware

## Testing

### Health Check
**GET** `/health`
```json
{
  "status": "healthy",
  "uptime": 123.456,
  "timestamp": "2025-09-01T21:00:00.000Z",
  "memory": {
    "rss": 59498496,
    "heapTotal": 20414464,
    "heapUsed": 18480920
  }
}
```

## Next Steps

1. Set up MongoDB database connection
2. Implement email verification
3. Add password reset functionality
4. Create frontend authentication components
5. Add rate limiting and additional security measures