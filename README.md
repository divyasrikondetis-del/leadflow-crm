# 🚀 LeadFlow CRM

LeadFlow CRM is a full-stack lead management system built with React, Node.js, Express.js, and Supabase. It helps businesses capture, manage, track, and convert leads through a secure admin dashboard.

---

# 🌐 Live Demo

## Frontend (Vercel)

| Page | URL |
|---|---|
| Landing Page | https://leadflow-crm-divya.vercel.app |
| Admin Login | https://leadflow-crm-divya.vercel.app/login |
| Admin Dashboard | https://leadflow-crm-divya.vercel.app/admin |

---

## Backend (Render)

| Service | URL |
|---|---|
| Backend | https://leadflow-crm-1-b9pc.onrender.com |
| API Base | https://leadflow-crm-1-b9pc.onrender.com/api |
| Health Check | https://leadflow-crm-1-b9pc.onrender.com/api/test |

---

## GitHub Repository

https://github.com/divyasrikondetis-del/leadflow-crm

---

# ✨ Features

## Public User Features

- Responsive lead capture form
- Name, email, budget and message validation
- Client-side validation
- Server-side validation
- Lead submission into database
- Success and error notifications
- Mobile responsive design

---

## Admin Features

- Secure JWT authentication
- Protected admin dashboard
- Admin login system
- View all leads
- Search leads
- Filter leads by status
- Update lead status
- Logout functionality
- Lead pipeline management

Lead Status Flow:

New → Contacted → Closed

---

## Technical Features

- REST API architecture
- React + Vite frontend
- Express.js backend
- Supabase PostgreSQL database
- JWT authentication
- bcrypt password hashing
- CORS configuration
- Environment variable support
- Production deployment

---

# 🛠️ Tech Stack

## Frontend

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hook Form
- React Hot Toast

## Backend

- Node.js
- Express.js
- Supabase
- JWT
- bcryptjs
- dotenv
- CORS

## Deployment

- Vercel - Frontend Hosting
- Render - Backend Hosting
- Supabase - Database

---

# 📁 Project Structure

LeadFlow-CRM

│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── AdminPage.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── server
│   ├── controllers
│   │   ├── authController.js
│   │   └── leadController.js
│   │
│   ├── middleware
│   │   └── auth.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── leadRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
├── README.md
└── vercel.json

---

# 🔑 Admin Credentials

Email:

admin@digitalheroes.com


Password:

SecureAdmin123!

---

# 🔌 API Documentation

## Base URL

https://leadflow-crm-1-b9pc.onrender.com/api

---

## Public Routes

### Create Lead

Method:

POST

URL:

https://leadflow-crm-1-b9pc.onrender.com/api/leads


Request Body:

{
"name":"John Doe",
"email":"john@gmail.com",
"budgetRange":"Under $5,000",
"message":"Interested in your services"
}

---

### Admin Login

Method:

POST

URL:

https://leadflow-crm-1-b9pc.onrender.com/api/auth/login


Request Body:

{
"email":"admin@digitalheroes.com",
"password":"SecureAdmin123!"
}

---

### Setup Admin

Method:

POST

URL:

https://leadflow-crm-1-b9pc.onrender.com/api/auth/setup

---

### Health Check

Method:

GET

URL:

https://leadflow-crm-1-b9pc.onrender.com/api/test

---

# ⚙️ Local Setup

## Requirements

- Node.js v18+
- npm
- Supabase Account


## Backend Setup

```bash
cd server
npm install
npm start
Backend:

http://localhost:8000

Frontend Setup
cd client
npm install
npm run dev

Frontend:

http://localhost:5173

🔐 Environment Variables
Backend (.env)
PORT=8000

SUPABASE_URL=your_supabase_url

SUPABASE_ANON_KEY=your_anon_key

SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

JWT_SECRET=leadflow_secret_key_2024

ADMIN_EMAIL=admin@digitalheroes.com

ADMIN_PASSWORD=SecureAdmin123!
Frontend (.env)
VITE_API_URL=https://leadflow-crm-1-b9pc.onrender.com/api
🚀 Deployment
Frontend Deployment (Vercel)

Steps:

Connect GitHub repository
Select Root Directory:

client

Framework:

Vite

Build Command:

npm run build

Environment Variable:

VITE_API_URL=https://leadflow-crm-1-b9pc.onrender.com/api

Backend Deployment (Render)

Root Directory:

server

Build Command:

npm install

Start Command:

npm start

🔒 Security
JWT authentication
bcrypt password hashing
Protected API routes
Supabase database security
Environment variable protection
HTTPS deployment
👩‍💻 Developer

Built by:

Divya Sri

Project:

LeadFlow CRM

Built for:

Digital Heroes Training Task

Digital Heroes:

https://digitalheroesco.com

✅ Project Status

Frontend: Deployed on Vercel ✅

Backend: Deployed on Render ✅

Database: Connected with Supabase ✅

Authentication: Working ✅

Lead Management: Working ✅

Built with ❤️ for Digital Heroes Training Task
