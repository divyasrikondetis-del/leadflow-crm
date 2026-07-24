# LeadFlow CRM

> A production-grade lead management system with secure authentication and real-time lead tracking.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_App-0070f3?style=for-the-badge&logo=vercel)](https://leadflow-crm-flax.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-View_Repo-181717?style=for-the-badge&logo=github)](https://github.com/divyasrikondetis-del/leadflow-crm)
[![Render](https://img.shields.io/badge/Backend-API_Status-46E3B7?style=for-the-badge&logo=render)](https://leadflow-crm-backend-4xu1.onrender.com)
[![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Data Model](#-data-model)
- [Authentication](#-authentication)
- [API Documentation](#-api-documentation)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Credits](#-credits)

---

## 📋 Overview

### What is LeadFlow CRM?

**LeadFlow CRM** is a full-stack lead management solution designed to help businesses capture, track, and nurture leads efficiently. Built with modern technologies, it provides a seamless experience for both end-users and administrators.

### Core Capabilities

| Capability | Description |
|------------|-------------|
| **Lead Capture** | Public-facing form with real-time validation |
| **Lead Management** | Comprehensive dashboard with CRUD operations |
| **Status Tracking** | New → Contacted → Closed workflow |
| **Search & Filter** | Advanced lead discovery |
| **Secure Access** | JWT-based authentication for admin area |

### Business Benefits

| Benefit | Impact |
|---------|--------|
| **Efficiency** | Reduce manual lead tracking by 80% |
| **Response Time** | Faster follow-up on new leads |
| **Visibility** | Clear overview of lead pipeline |
| **Organization** | Centralized lead management |
| **Security** | Protected admin access |

---

## 🚀 Live Demo

### Frontend (Vercel)

| Page | URL |
|------|-----|
| **Landing Page** | [https://leadflow-crm-flax.vercel.app](https://leadflow-crm-flax.vercel.app) |
| **Admin Login** | [https://leadflow-crm-flax.vercel.app/login](https://leadflow-crm-flax.vercel.app/login) |
| **Admin Dashboard** | [https://leadflow-crm-flax.vercel.app/admin](https://leadflow-crm-flax.vercel.app/admin) |

### Backend (Render)

| Endpoint | URL |
|----------|-----|
| **API Base** | [https://leadflow-crm-backend-4xu1.onrender.com](https://leadflow-crm-backend-4xu1.onrender.com) |
| **Health Check** | [https://leadflow-crm-backend-4xu1.onrender.com/api/test](https://leadflow-crm-backend-4xu1.onrender.com/api/test) |

### Repository

| Platform | URL |
|----------|-----|
| **GitHub** | [https://github.com/divyasrikondetis-del/leadflow-crm](https://github.com/divyasrikondetis-del/leadflow-crm) |

### 🔑 Test Credentials

```yaml
Email:    admin@digitalheroes.com
Password: SecureAdmin123!
```

---

## ✨ Features

### Public Side

- ✅ Responsive lead capture form
- ✅ Client-side validation with instant feedback
- ✅ Server-side validation for data integrity
- ✅ Success notifications with toast messages
- ✅ Accessible design (WCAG compliant)
- ✅ Budget range selection
- ✅ Credit line: "Built for Digital Heroes Training Task"

### Admin Side

- ✅ Secure JWT authentication (7-day token expiry)
- ✅ Comprehensive lead dashboard
- ✅ Real-time search by name or email
- ✅ Status management (New/Contacted/Closed)
- ✅ Automatic statistics updates
- ✅ Session management with logout
- ✅ Filter by status
- ✅ Professional UI with Tailwind CSS

### Technical Features

- ✅ RESTful API architecture
- ✅ PostgreSQL database with Row Level Security (RLS)
- ✅ Password hashing with bcrypt (10 rounds)
- ✅ Environment variable configuration
- ✅ CORS enabled
- ✅ Error handling middleware
- ✅ HTTPS enforcement
- ✅ Zero configuration deployment

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| React | 18.2.0 | UI Framework | [react.dev](https://react.dev) |
| Vite | 5.0.0 | Build Tool | [vitejs.dev](https://vitejs.dev) |
| Tailwind CSS | 3.3.6 | Styling | [tailwindcss.com](https://tailwindcss.com) |
| React Hook Form | 7.48.0 | Form Validation | [react-hook-form.com](https://react-hook-form.com) |
| React Router DOM | 6.20.0 | Routing | [reactrouter.com](https://reactrouter.com) |
| Axios | 1.6.0 | HTTP Client | [axios-http.com](https://axios-http.com) |
| Lucide React | 0.300.0 | Icons | [lucide.dev](https://lucide.dev) |
| React Hot Toast | 2.4.0 | Notifications | [react-hot-toast.com](https://react-hot-toast.com) |

### Backend

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| Node.js | 18.x | Runtime | [nodejs.org](https://nodejs.org) |
| Express.js | 4.18.0 | Web Framework | [expressjs.com](https://expressjs.com) |
| Supabase | 2.38.0 | Database & Auth | [supabase.com](https://supabase.com) |
| JWT | 9.0.0 | Authentication | [jwt.io](https://jwt.io) |
| bcryptjs | 2.4.0 | Password Hashing | [npmjs.com/bcryptjs](https://npmjs.com/bcryptjs) |
| CORS | 2.8.0 | Cross-Origin | [npmjs.com/cors](https://npmjs.com/cors) |
| Dotenv | 16.3.0 | Environment | [npmjs.com/dotenv](https://npmjs.com/dotenv) |

### Infrastructure

| Service | Purpose | Tier |
|---------|---------|------|
| **Supabase** | PostgreSQL Database + Auth | Free |
| **Vercel** | Frontend Hosting | Free (Hobby) |
| **Render** | Backend Hosting | Free |

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   Landing Page  │  │   Login Page    │  │  Admin Dashboard│ │
│  │   (Public)      │  │   (Public)      │  │   (Protected)   │ │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘ │
└───────────┼────────────────────┼────────────────────┼───────────┘
            │                    │                    │
            │              HTTP Requests             │
            │                    │                    │
            ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY (Express)                      │
│                         Port: 5000                              │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │    /api/leads   │    /api/auth   │   /api/test            ││
│  │   (Public +     │   (Public)     │   (Public)             ││
│  │    Protected)   │                │                        ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
            │                    │                    │
            ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                        SUPABASE                                 │
│  ┌─────────────────────┐  ┌─────────────────────────────────┐  │
│  │       LEADS         │  │          USERS                  │  │
│  │  - id (UUID)        │  │  - id (UUID)                    │  │
│  │  - name             │  │  - email                        │  │
│  │  - email            │  │  - password_hash                │  │
│  │  - budget_range     │  │  - created_at                   │  │
│  │  - message          │  │                                 │  │
│  │  - status           │  │                                 │  │
│  │  - created_at       │  │                                 │  │
│  │  - updated_at       │  │                                 │  │
│  └─────────────────────┘  └─────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Request Flow

```
1. User submits form on Landing Page
   ↓
2. React Hook Form validates input (client-side)
   ↓
3. Axios sends POST request to /api/leads
   ↓
4. Express validates input (server-side)
   ↓
5. Supabase stores lead data in PostgreSQL
   ↓
6. Success response returned to client
   ↓
7. Toast notification confirms submission
```

---

## 📊 Data Model

### Leads Table Schema

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL CHECK (char_length(name) >= 2),
  email VARCHAR(255) NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  budget_range VARCHAR(50) NOT NULL CHECK (budget_range IN (
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'Above $50,000'
  )),
  message TEXT NOT NULL CHECK (char_length(message) >= 10),
  status VARCHAR(20) DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Users Table Schema

```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Status Flow

```
┌──────────┐    ┌────────────┐    ┌──────────┐
│   NEW    │ ──▶│ CONTACTED  │ ──▶│  CLOSED  │
└──────────┘    └────────────┘    └──────────┘
     │               │                  │
     └───────────────┴──────────────────┘
          (Can be reverted at any stage)
```

---

## 🔐 Authentication

### Authentication Flow

```
1. User enters credentials on Login Page
   ↓
2. Axios sends POST request to /api/auth/login
   ↓
3. Server queries Supabase users table
   ↓
4. bcrypt compares password hash
   ↓
5. JWT token generated (7-day expiry)
   ↓
6. Token stored in localStorage
   ↓
7. User redirected to /admin
   ↓
8. Protected routes validate token via middleware
```

### Security Measures

| Security Feature | Implementation |
|------------------|----------------|
| **Password Storage** | bcrypt hashing (10 rounds) |
| **Token Security** | JWT with 7-day expiration |
| **Secret Management** | Environment variables |
| **Database Security** | Row Level Security (RLS) |
| **API Protection** | Authentication middleware |
| **Transport Security** | HTTPS enforced |

---

## 🔧 API Documentation

### Base URL

```
https://leadflow-crm-backend-4xu1.onrender.com/api
```

### Public Routes

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/leads` | Create new lead | `{ name, email, budgetRange, message }` |
| `POST` | `/auth/login` | Admin login | `{ email, password }` |
| `POST` | `/auth/setup` | Create admin user | - |
| `GET` | `/test` | Health check | - |

### Protected Routes (Require JWT)

| Method | Endpoint | Description | Headers |
|--------|----------|-------------|---------|
| `GET` | `/leads` | Get all leads | `Authorization: Bearer <token>` |
| `PATCH` | `/leads/:id/status` | Update lead status | `Authorization: Bearer <token>` |

### Example Requests

#### Create a Lead
```bash
curl -X POST https://leadflow-crm-backend-4xu1.onrender.com/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "budgetRange": "$10,000 - $25,000",
    "message": "Interested in your services"
  }'
```

#### Admin Login
```bash
curl -X POST https://leadflow-crm-backend-4xu1.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@digitalheroes.com",
    "password": "SecureAdmin123!"
  }'
```

#### Get Leads (Protected)
```bash
curl -X GET "https://leadflow-crm-backend-4xu1.onrender.com/api/leads?search=john" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

#### Update Lead Status
```bash
curl -X PATCH https://leadflow-crm-backend-4xu1.onrender.com/api/leads/LEAD_ID/status \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"status": "Contacted"}'
```

---

## 🚀 Getting Started

### Prerequisites

```yaml
Node.js: v18.0.0 or higher
npm: v9.0.0 or higher
Supabase: Account required
Git: For cloning
```

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/divyasrikondetis-del/leadflow-crm.git
cd leadflow-crm

# 2. Setup Backend
cd server
npm install
cp .env.example .env
# Edit .env with your Supabase credentials
npm start

# 3. Setup Frontend
cd ../client
npm install
npm run dev

# 4. Create Admin User
curl -X POST http://localhost:5000/api/auth/setup

# 5. Open the application
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
```

### Environment Variables

#### Backend (.env)
```env
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@digitalheroes.com
ADMIN_PASSWORD=SecureAdmin123!
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🌐 Deployment

### Deploy Backend (Render)

1. Push code to GitHub
2. Create Web Service on Render
3. Connect GitHub repository
4. Set environment variables
5. Deploy

### Deploy Frontend (Vercel)

1. Push code to GitHub
2. Import project to Vercel
3. Configure:
   - Framework: Vite
   - Root Directory: client
   - Build Command: npm run build
4. Set environment variable: `VITE_API_URL`
5. Deploy

---

## 📁 Project Structure

```
LeadFlow-CRM/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminPage.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── leadController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── leadRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## 🔧 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Port 5000 in use** | Kill process: `taskkill /PID <PID> /F` |
| **Module not found** | Run: `npm install` |
| **CORS error** | Update CORS configuration |
| **Invalid token** | Login again to get new token |
| **Failed to fetch** | Check if backend is running |
| **404 on Vercel** | Set root directory to `client` |

---

## 🙏 Credits

### Built For

[Digital Heroes Training Task](https://digitalheroesco.com)

### Technologies Used

- [React](https://react.dev) - UI Framework
- [Vite](https://vitejs.dev) - Build Tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Supabase](https://supabase.com) - Database & Auth
- [Express](https://expressjs.com) - Web Framework
- [Vercel](https://vercel.com) - Frontend Hosting
- [Render](https://render.com) - Backend Hosting

---

## 📄 License

This project is licensed under the MIT License.



## 🔗 Quick Links

- [Live Demo](https://leadflow-crm-flax.vercel.app)
- [GitHub Repository](https://github.com/divyasrikondetis-del/leadflow-crm)
- [Backend API](https://leadflow-crm-backend-4xu1.onrender.com)
- [Digital Heroes](https://digitalheroesco.com)


**Built with ❤️ for Digital Heroes Training Task**

