# VidyaAI — Digital Learning Platform for Rural School Students

**"Learning without limits."**

VidyaAI is an AI-powered, multilingual, low-bandwidth and offline-capable digital learning platform designed specifically for school students in rural areas. It provides quality education access to students who face connectivity challenges, limited digital literacy, and language barriers.

---

## 🎯 Problem Statement

Students in rural areas face significant barriers to quality education:

- **Limited Internet Connectivity** — Unstable or no internet access
- **Language Barriers** — Content not available in regional languages
- **Low-End Devices** — Smartphones with limited storage and processing power
- **Digital Literacy** — Users who may be unfamiliar with complex interfaces
- **Limited Resources** — Fewer teachers and educational materials

VidyaAI addresses these challenges with a **rural-first** design philosophy.

---

## ✨ Features

### For Students
- 📚 **Structured Courses** — Organized by class (6-10) and subject
- 🌐 **Multilingual Support** — Learn in Hindi, English, and more
- 🤖 **AI Tutor** — Ask doubts and get simple explanations
- 🎤 **Voice Learning** — Ask questions and listen to answers
- 📝 **Interactive Quizzes** — Test knowledge with instant feedback
- 📊 **Progress Tracking** — Monitor learning with detailed analytics
- 📥 **Offline Downloads** — Access lessons without internet
- 💡 **Personalized Recommendations** — Get suggestions based on performance

### For Teachers
- 📚 **Course Management** — Create and manage courses
- 📝 **Quiz Management** — Create quizzes and view results
- 👥 **Student Performance** — Track individual student progress
- 📊 **Analytics** — Class performance overview

### For Admins
- 👥 **User Management** — Manage all platform users
- 📚 **Course Management** — Manage all courses
- 🌐 **Language Management** — Manage supported languages
- 📊 **Reports** — Platform analytics and reports

---

## 🛠 Tech Stack

### Frontend
- **React.js** — UI framework
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Styling
- **React Router** — Routing
- **Lucide React** — Icons
- **Context API** — Global state management
- **LocalStorage** — Offline-ready behavior

### Backend
- **Node.js** — Runtime
- **Express** — Web framework
- **MongoDB** — Database
- **Mongoose** — ODM
- **JWT** — Authentication
- **bcryptjs** — Password hashing

---

## 📁 Folder Structure

```
VIDYA-AI/
├── client/                    # Frontend (React + Vite)
│   └── src/
│       ├── assets/            # Static assets
│       ├── components/        # Reusable components
│       │   ├── common/       # UI primitives (Button, Input, Card, etc.)
│       │   ├── layout/       # Navbar, Sidebar, BottomNavigation
│       │   ├── student/      # Student-specific components
│       │   ├── teacher/      # Teacher-specific components
│       │   ├── admin/        # Admin-specific components
│       │   ├── ai/           # AI Tutor components
│       │   ├── quiz/         # Quiz components
│       │   └── learning/     # Learning components
│       ├── pages/            # Page components
│       │   ├── public/       # Home, Features, How It Works
│       │   ├── auth/         # Login, Register
│       │   ├── student/      # Student pages
│       │   ├── teacher/      # Teacher pages
│       │   └── admin/        # Admin pages
│       ├── layouts/          # Layout wrappers
│       ├── routes/           # Route definitions
│       ├── context/          # Context providers
│       ├── services/         # API service layer
│       ├── hooks/            # Custom hooks
│       ├── utils/            # Utility functions
│       └── data/             # Mock data
│
└── server/                    # Backend (Node.js + Express)
    └── src/
        ├── config/           # Database config
        ├── controllers/      # Route controllers
        ├── middleware/       # Auth, role, error middleware
        ├── models/           # Mongoose models
        ├── routes/           # API routes
        ├── services/         # Business logic
        └── utils/            # Utility functions
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- npm

### Backend Setup

```bash
cd server
npm install
cp .env.example .env  # Configure your environment variables
npm run dev           # Start server on port 5000
```

### Frontend Setup

```bash
cd client
npm install
npm run dev           # Start dev server on port 5173
```

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
AI_API_KEY=your_ai_key
```

---

## 🔐 Authentication

- **Registration** — `POST /api/auth/register`
- **Login** — `POST /api/auth/login`
- **Profile** — `GET /api/auth/profile`

### Roles
- `student` — Access to student dashboard and learning features
- `teacher` — Access to teacher dashboard and management features
- `admin` — Access to admin dashboard and platform management

---

## 🗺 Development Workflow

### Branch Strategy

```
main
└── develop
    └── feature/authentication
    └── feature/student-dashboard
    └── feature/learning-content-ui
    └── feature/assessment-ui
    └── feature/ai-tutor-ui
    └── feature/multilingual-ui
    └── feature/voice-ui
    └── feature/offline-ui
    └── feature/teacher-dashboard
    └── feature/admin-dashboard
```

### Commit Convention

```
feat(ui): create reusable button component
feat(student): create learning dashboard
feat(quiz): add quiz interface
feat(ai): create tutor chat interface
```

---

## 📋 Jira Integration

| Jira Issue | Feature |
|------------|---------|
| DLP-001 | Registration UI |
| DLP-002 | Login UI |
| DLP-004 | Course structure |
| DLP-007 | Quiz UI |
| DLP-010 | AI Tutor UI |
| DLP-014 | Voice UI |
| DLP-016 | Offline Downloads UI |
| DLP-020 | Recommendation UI |
| DLP-021 | Teacher Analytics UI |
| DLP-022 | Admin UI |

---

## 🔮 Future Scope

- **Real AI Integration** — Connect AI Tutor to actual LLM backend
- **Voice Recognition** — Implement real speech-to-text
- **IndexedDB** — Replace localStorage with IndexedDB for offline storage
- **Google OAuth** — Implement real Google login
- **Video Streaming** — Add low-bandwidth video streaming
- **Gamification** — Add badges, points, and leaderboards
- **Parent Portal** — Allow parents to track child's progress
- **School Management** — Multi-school support

---

## 📄 License

This project is created for educational purposes as a Final Year Project.

---

## 👥 Contributors

- **Simar-dev502** — Project Lead & Developer