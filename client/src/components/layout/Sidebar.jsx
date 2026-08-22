import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Compass,
  Bot,
  ClipboardList,
  TrendingUp,
  Download,
  Bookmark,
  User,
  Settings,
  LogOut,
  Moon,
  Sun,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Sidebar = ({ role = 'student' }) => {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const studentLinks = [
    { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/student/courses', label: 'My Courses', icon: BookOpen },
    { to: '/student/explore', label: 'Explore', icon: Compass },
    { to: '/student/ai-tutor', label: 'AI Tutor', icon: Bot },
    { to: '/student/quizzes', label: 'Quizzes', icon: ClipboardList },
    { to: '/student/progress', label: 'Progress', icon: TrendingUp },
    { to: '/student/downloads', label: 'Downloads', icon: Download },
    { to: '/student/bookmarks', label: 'Bookmarks', icon: Bookmark },
    { to: '/student/profile', label: 'Profile', icon: User },
    { to: '/student/settings', label: 'Settings', icon: Settings },
  ];

  const teacherLinks = [
    { to: '/teacher/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/teacher/courses', label: 'Courses', icon: BookOpen },
    { to: '/teacher/quizzes', label: 'Quizzes', icon: ClipboardList },
    { to: '/teacher/students', label: 'Students', icon: User },
    { to: '/teacher/analytics', label: 'Analytics', icon: TrendingUp },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/users', label: 'Users', icon: User },
    { to: '/admin/courses', label: 'Courses', icon: BookOpen },
    { to: '/admin/subjects', label: 'Subjects', icon: Compass },
    { to: '/admin/languages', label: 'Languages', icon: Settings },
    { to: '/admin/reports', label: 'Reports', icon: TrendingUp },
    { to: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  const links = role === 'student' ? studentLinks : role === 'teacher' ? teacherLinks : adminLinks;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-white lg:block dark:bg-slate-900 dark:border-slate-700">
      <div className="flex h-full flex-col">
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                    : 'text-ink-light hover:bg-slate-100 hover:text-ink dark:hover:bg-slate-700 dark:text-slate-300'
                }`
              }
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t p-4 dark:border-slate-700">
          <div className="mb-3 flex items-center justify-between">
            <LanguageSwitcher compact />
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-ink-light hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;