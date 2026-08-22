import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../components/common/Loader';
import ProtectedRoute from '../components/ProtectedRoute';
import PublicLayout from '../layouts/PublicLayout';
import StudentLayout from '../layouts/StudentLayout';
import TeacherLayout from '../layouts/TeacherLayout';
import AdminLayout from '../layouts/AdminLayout';

// Public pages
import Home from '../pages/public/Home';
import Features from '../pages/public/Features';
import HowItWorks from '../pages/public/HowItWorks';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Forbidden from '../pages/Forbidden';

// Student pages
import StudentDashboard from '../pages/student/StudentDashboard';
import Courses from '../pages/student/Courses';
import CourseDetails from '../pages/student/CourseDetails';
import Lesson from '../pages/student/Lesson';
import Quizzes from '../pages/student/Quizzes';
import QuizInterface from '../pages/student/QuizInterface';
import QuizResult from '../pages/student/QuizResult';
import Progress from '../pages/student/Progress';
import AITutor from '../pages/student/AITutor';
import Downloads from '../pages/student/Downloads';
import Profile from '../pages/student/Profile';
import Settings from '../pages/student/Settings';
import Explore from '../pages/student/Explore';
import Bookmarks from '../pages/student/Bookmarks';

// Teacher pages
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import TeacherCourses from '../pages/teacher/TeacherCourses';
import TeacherQuizzes from '../pages/teacher/TeacherQuizzes';
import TeacherStudents from '../pages/teacher/TeacherStudents';
import TeacherAnalytics from '../pages/teacher/TeacherAnalytics';

// Admin pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminUsers from '../pages/admin/AdminUsers';
import AdminCourses from '../pages/admin/AdminCourses';
import AdminSubjects from '../pages/admin/AdminSubjects';
import AdminLanguages from '../pages/admin/AdminLanguages';
import AdminReports from '../pages/admin/AdminReports';
import AdminSettings from '../pages/admin/AdminSettings';

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader fullScreen />}>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
        </Route>

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/403" element={<Forbidden />} />

        {/* Student routes */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="lesson/:id" element={<Lesson />} />
          <Route path="explore" element={<Explore />} />
          <Route path="ai-tutor" element={<AITutor />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="quiz/:id" element={<QuizInterface />} />
          <Route path="quiz/:id/result" element={<QuizResult />} />
          <Route path="progress" element={<Progress />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Teacher routes */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute allowedRoles={['teacher', 'admin']}>
              <TeacherLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="courses" element={<TeacherCourses />} />
          <Route path="quizzes" element={<TeacherQuizzes />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="analytics" element={<TeacherAnalytics />} />
        </Route>

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="subjects" element={<AdminSubjects />} />
          <Route path="languages" element={<AdminLanguages />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;