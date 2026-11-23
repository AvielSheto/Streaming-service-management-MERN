# Streaming Service Management (MERN)

A full-stack admin system for managing a streaming service: movies, members (subscribers), their subscriptions, and the employees who manage them. Each employee gets a **role-based permission set**, so they only see and do what they're allowed to.

![Login](https://user-images.githubusercontent.com/94540100/218337461-133a9b99-db00-4e7c-9718-a8ff04afb572.png)
![Movies](https://user-images.githubusercontent.com/94540100/218337417-57dde676-50c2-4ed6-a5b4-ce17231474bd.png)

## Features

- **Authentication**: sign up, log in and log out with JWT. Passwords are hashed with bcrypt.
- **Role-based permissions**: each user has its own set of permissions (view, create, update and delete for movies and subscriptions, plus user management), and both the UI and the API enforce them.
- **Movies**: full CRUD. The movie catalog is seeded from the public [TVMaze API](https://www.tvmaze.com/api).
- **Members and subscriptions**: manage subscribers and track which movies each member watched and when. Members are seeded from [JSONPlaceholder](https://jsonplaceholder.typicode.com).
- **User management**: admins can create and edit users and their permissions.

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Redux Toolkit, React Router, MUI, React-Bootstrap, Tailwind CSS, Sass, React-Toastify |
| Backend | Node.js, Express, JWT, bcrypt, express-async-handler |
| Database | MongoDB with Mongoose, plus JSON files for user details and permissions |

## Architecture

The server uses a layered architecture:

```
server/
├── router/        # Express routes
├── controllers/   # Request handling
├── BLL/           # Business logic
├── DAL/           # Data access: MongoDB, JSON files, external web services
├── models/        # Mongoose schemas
└── middleware/    # Auth guard and central error handler
```

Data comes from three sources: MongoDB (users, members, movies, subscriptions), local JSON files (user details and permissions) and external REST APIs used for the initial seed.

### API Overview

| Route | Description |
|---|---|
| `/api/users` | Auth (signup and login) and users stored in MongoDB |
| `/users` | User details stored in JSON |
| `/permissions` | User permissions (JSON) |
| `/api/movies` | Movies CRUD |
| `/api/members` | Members CRUD |
| `/subscriptions` | Subscriptions CRUD |

## Getting Started

### Prerequisites
- Node.js 16 or later
- A MongoDB database (local or MongoDB Atlas)

### 1. Clone

```bash
git clone https://github.com/AvielSheto/Streaming-service-management-MERN.git
cd Streaming-service-management-MERN
```

### 2. Server

```bash
cd server
npm install
```

Create a `server/.env` file:

```env
PORT=5000
MONGO_URI=<your MongoDB connection string>
JWT_SECRET=<any long random string>
NODE_ENV=development
```

```bash
npm start        # http://localhost:5000
```

### 3. Client

```bash
cd ../client
npm install
npm start        # http://localhost:3000
```
