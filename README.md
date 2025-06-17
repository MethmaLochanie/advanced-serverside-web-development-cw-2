⚠ Notice

This project is proprietary. No use, reproduction, modification, or distribution of this software or its source code is allowed without explicit written permission from the author, Methma Lochanie Rathnayaka.

If you wish to reference this work or request usage permissions, please contact the author directly.

Unauthorized use will be considered a violation of copyright and may lead to legal action.

# Travel Blog Platform

A full-stack web application for sharing travel experiences, featuring country information integration, user authentication, and social features.

## Architecture

```
.
├── client/                 # React frontend application
│   ├── public/            # Static assets and index.html
│   └── src/
│       ├── api/           # API client and endpoints
│       ├── components/    # Reusable React components
│       ├── pages/         # Page-level components
│       └── context/       # React context providers
├── server/                # Express.js backend server
│   └── src/
│       ├── controllers/   # Request handlers
│       ├── routes/        # API route definitions
│       ├── middleware/    # Custom middleware
│       ├── config/        # Configuration files
│       ├── utils/         # Utility functions
│       └── database/      # Database models and migrations
└── microservice/          # Country information service
    └── src/
        ├── controllers/   # Request handlers
        ├── routes/        # API route definitions
        ├── middleware/    # Custom middleware
        ├── config/        # Configuration files
        └── utils/         # Utility functions
```

## Core Features

- **User Authentication**
  - Secure registration and login
  - JWT-based session management
  - Role-based access control

- **Blog Management**
  - Create, read, update, and delete blog posts
  - Rich text content support
  - Image upload capabilities

- **Country Integration**
  - Real-time country data retrieval via microservice
  - Country-specific blog filtering
  - Geographic information display

- **Social Features**
  - User following system
  - Post reactions (likes/dislikes)
  - Comment system
  - User profiles

## Technical Stack

### Frontend (Client)
- React.js 19.1.0
- Material-UI 7.0.2
- React Router 7.5.0
- React Query 5.74.4
- Axios 1.8.4
- Date-fns 4.1.0

### Backend (Server)
- Node.js
- Express.js 4.18.3
- SQLite3 5.1.7
- JWT Authentication
- Winston Logger
- Express Rate Limiter
- Helmet Security
- Multer (File Upload)
- Sanitize HTML

### Microservice
- Node.js
- Express.js 4.18.2
- RestCountries API Integration
- Rate Limiting
- JWT Authentication

## Development Setup

1. **Prerequisites**
   - Node.js (v14 or higher)
   - npm (v6 or higher)
   - Docker and Docker Compose (for containerized deployment)

2. **Environment Configuration**
   ```bash
   # Server (.env)
   PORT=5001
   JWT_SECRET=${JWT_SECRET}
   JWT_REFRESH_SECRET=${JWT_REFRESH_SECRET}
   JWT_EXPIRES_IN=1h
   JWT_REFRESH_EXPIRES_IN=7d
   DB_PATH=./src/database/database.sqlite

   # Client (.env)
   REACT_APP_API_URL=http://localhost:5001/api
   REACT_APP_MICROSERVICE_URL=http://localhost:5002/api

   # Microservice (.env)
   PORT=5002
   JWT_SECRET=${JWT_SECRET}
   COUNTRY_API_URL=https://restcountries.com/v3.1
   API_RATE_LIMIT=100
   API_RATE_WINDOW=900000
   ```

3. **Installation and Running**

   **Option 1: Docker (Recommended)**
   ```bash
   # Build and start all services
   docker-compose up --build
   ```

   **Option 2: Local Development**
   ```bash
   # Install dependencies
   cd server && npm install
   cd ../client && npm install
   cd ../microservice && npm install

   # Start services (in separate terminals)
   cd server && npm run dev
   cd client && npm start
   cd microservice && npm run dev
   ```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Blog Endpoints
- `GET /api/posts` - List blog posts
- `POST /api/posts` - Create blog post
- `GET /api/posts/:id` - Get post details
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `POST /api/posts/:id/like` - Like post
- `POST /api/posts/:id/comment` - Add comment

### Social Endpoints
- `POST /api/follow/:userId` - Follow user
- `DELETE /api/follow/:userId` - Unfollow user
- `GET /api/followers` - Get followers
- `GET /api/following` - Get following

### Country Endpoints (Microservice)
- `GET /api/countries` - List all countries
- `GET /api/countries/:code` - Get country by code
- `GET /api/countries/name/:name` - Search country by name
- `GET /api/countries/region/:region` - Get countries by region

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Request rate limiting
- Input validation and sanitization
- XSS protection with helmet
- CORS configuration
- SQL injection prevention
- API key management (microservice)

## Development Scripts

### Server
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Client
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from create-react-app

### Microservice
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the proprietary License. 
