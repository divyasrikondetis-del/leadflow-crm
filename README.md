# 🚀 LeadFlow CRM

LeadFlow CRM is a full-stack lead management system built with React, Node.js, Express, and Supabase. It helps businesses capture, manage, track, and convert leads through a secure admin dashboard.

---

## 🌐 Live Demo

### Frontend (Vercel)
| Page | URL |
|------|-----|
| **Landing Page** | [https://leadflow-crm-divya.vercel.app](https://leadflow-crm-divya.vercel.app) |
| **Admin Login** | [https://leadflow-crm-divya.vercel.app/login](https://leadflow-crm-divya.vercel.app/login) |
| **Admin Dashboard** | [https://leadflow-crm-divya.vercel.app/admin](https://leadflow-crm-divya.vercel.app/admin) |

### Backend (Render)
| Endpoint | URL |
|----------|-----|
| **API Base** | [https://leadflow-crm-1-b9pc.onrender.com](https://leadflow-crm-1-b9pc.onrender.com) |
| **Health Check** | [https://leadflow-crm-1-b9pc.onrender.com/api/test](https://leadflow-crm-1-b9pc.onrender.com/api/test) |

### Repository
| Platform | URL |
|----------|-----|
| **GitHub** | [https://github.com/divyasrikondetis-del/leadflow-crm](https://github.com/divyasrikondetis-del/leadflow-crm) |

---

## ✨ Features

### Public Features
- ✅ Responsive lead capture form
- ✅ Client-side validation with instant feedback
- ✅ Server-side validation for data integrity
- ✅ Success notifications with toast messages
- ✅ Budget range selection
- ✅ Credit line: "Built for Digital Heroes Training Task"

### Admin Features
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
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Framework |
| Vite | 5.0.0 | Build Tool |
| Tailwind CSS | 3.3.6 | Styling |
| React Hook Form | 7.48.0 | Form Validation |
| React Router DOM | 6.20.0 | Routing |
| Axios | 1.6.0 | HTTP Client |
| Lucide React | 0.300.0 | Icons |
| React Hot Toast | 2.4.0 | Notifications |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18.x | Runtime |
| Express.js | 4.18.0 | Web Framework |
| Supabase | 2.38.0 | Database & Auth |
| JWT | 9.0.0 | Authentication |
| bcryptjs | 2.4.0 | Password Hashing |
| CORS | 2.8.0 | Cross-Origin |
| Dotenv | 16.3.0 | Environment |

### Infrastructure
| Service | Purpose | Tier |
|---------|---------|------|
| **Supabase** | PostgreSQL Database + Auth | Free |
| **Vercel** | Frontend Hosting | Free (Hobby) |
| **Render** | Backend Hosting | Free |

---

## 🏗️ Project Structure

```
LeadFlow-CRM/
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage.jsx     # Public lead form
│   │   │   ├── LoginPage.jsx       # Admin login
│   │   │   ├── AdminPage.jsx       # Admin dashboard
│   │   │   └── ProtectedRoute.jsx  # Route protection
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                          # Backend (Node.js + Express)
│   ├── controllers/
│   │   ├── authController.js       # Authentication logic
│   │   └── leadController.js       # Lead CRUD logic
│   ├── middleware/
│   │   └── auth.js                 # JWT middleware
│   ├── routes/
│   │   ├── authRoutes.js           # Auth endpoints
│   │   └── leadRoutes.js           # Lead endpoints
│   ├── server.js                   # Main server file
│   ├── package.json
│   └── .env.example
│
├── .gitignore
├── vercel.json
└── README.md
```

---

## 🔑 Admin Credentials

| Field | Value |
|-------|-------|
| **Email** | `admin@digitalheroes.com` |
| **Password** | `SecureAdmin123!` |

---

## 🔌 API Documentation

### Base URL
```
https://leadflow-crm-1-b9pc.onrender.com/api
```

### Public Routes

#### 1. Create a Lead
```http
POST /leads
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "budgetRange": "Under $5,000",
  "message": "Interested in your services"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@gmail.com",
    "budget_range": "Under $5,000",
    "message": "Interested in your services",
    "status": "New",
    "created_at": "2026-07-24T13:34:22.31532+00:00"
  }
}
```

#### 2. Admin Login
```http
POST /auth/login
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "admin@digitalheroes.com",
  "password": "SecureAdmin123!"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "email": "admin@digitalheroes.com"
  }
}
```

#### 3. Create Admin User (Run Once)
```http
POST /auth/setup
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Admin user created successfully"
}
```

#### 4. Health Check
```http
GET /test
```

**Response (200 OK):**
```json
{
  "message": "✅ Supabase connected successfully!",
  "leads": [{"count": 0}]
}
```

### Protected Routes (Require JWT)

#### 1. Get All Leads
```http
GET /leads?search={query}&status={status}
Authorization: Bearer {token}
```

**Query Parameters:**
| Parameter | Description | Example |
|-----------|-------------|---------|
| search | Search by name or email | `?search=john` |
| status | Filter by status | `?status=New` |

**Response (200 OK):**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@gmail.com",
      "budget_range": "Under $5,000",
      "message": "Interested in your services",
      "status": "New",
      "created_at": "2026-07-24T13:34:22.31532+00:00"
    }
  ]
}
```

#### 2. Update Lead Status
```http
PATCH /leads/{id}/status
Authorization: Bearer {token}
Content-Type: application/json
```

**Request Body:**
```json
{
  "status": "Contacted"
}
```

**Valid Status Values:**
- `New`
- `Contacted`
- `Closed`

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "Contacted",
    "updated_at": "2026-07-24T13:35:00.000+00:00"
  }
}
```

---

## ⚙️ Installation

### Prerequisites
- Node.js (v18+)
- Supabase account

### 1. Clone the Repository
```bash
git clone https://github.com/divyasrikondetis-del/leadflow-crm.git
cd leadflow-crm
```

### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your Supabase credentials
npm start
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

### 4. Create Admin User
```bash
curl -X POST http://localhost:5000/api/auth/setup
```

### 5. Access the Application
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:5000
- **Admin Login:** http://localhost:5173/login

---

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@digitalheroes.com
ADMIN_PASSWORD=SecureAdmin123!
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🗄️ Database Schema

### Leads Table
```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  budget_range VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Users Table
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
```

---

## 🚀 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project to Vercel
3. Configure:
   - Framework: Vite
   - Root Directory: client
   - Build Command: npm run build
4. Add environment variable: `VITE_API_URL`
5. Deploy

### Backend (Render)
1. Push code to GitHub
2. Create Web Service on Render
3. Connect GitHub repository
4. Set environment variables
5. Deploy

---

## 🔒 Security

| Security Feature | Implementation |
|------------------|----------------|
| **Password Storage** | bcrypt hashing (10 rounds) |
| **Token Security** | JWT with 7-day expiration |
| **Secret Management** | Environment variables |
| **Database Security** | Row Level Security (RLS) |
| **API Protection** | Authentication middleware |
| **Transport Security** | HTTPS enforced |

---

## 👩‍💻 Developer

**Built by:** Divya Sri

**Project:** LeadFlow CRM

**Built for:** [Digital Heroes Training Task](https://digitalheroesco.com)

---

## 📜 License

MIT License

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI Framework
- [Vite](https://vitejs.dev) - Build Tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Supabase](https://supabase.com) - Database & Auth
- [Express](https://expressjs.com) - Web Framework
- [Vercel](https://vercel.com) - Frontend Hosting
- [Render](https://render.com) - Backend Hosting

---

## 📞 Contact

- **GitHub:** [divyasrikondetis-del](https://github.com/divyasrikondetis-del)
- **Project Link:** [LeadFlow CRM](https://github.com/divyasrikondetis-del/leadflow-crm)

---

**Built with ❤️ for Digital Heroes Training Task**

*Last Updated: July 2026*
