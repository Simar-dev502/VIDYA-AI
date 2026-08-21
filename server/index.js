const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware');
const { protect } = require('./src/middleware/authMiddleware');
const { authorize } = require('./src/middleware/roleMiddleware');

dotenv.config();

connectDB();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});
app.use('/api/auth', limiter);

// Routes
app.use('/api/auth', authRoutes);

// Role-based protected routes
// Student dashboard - accessible by student, teacher, admin
app.get('/api/student/dashboard', protect, authorize('student', 'teacher', 'admin'), (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Student Dashboard',
    user: {
      name: req.user.name,
      role: req.user.role,
    },
  });
});

// Teacher dashboard - accessible by teacher, admin only
app.get('/api/teacher/dashboard', protect, authorize('teacher', 'admin'), (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Teacher Dashboard',
    user: {
      name: req.user.name,
      role: req.user.role,
    },
  });
});

// Admin dashboard - accessible by admin only
app.get('/api/admin/dashboard', protect, authorize('admin'), (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Admin Dashboard',
    user: {
      name: req.user.name,
      role: req.user.role,
    },
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});