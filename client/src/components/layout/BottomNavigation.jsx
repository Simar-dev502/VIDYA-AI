import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Bot, ClipboardList, User } from 'lucide-react';

const BottomNavigation = () => {
  const items = [
    { to: '/student/dashboard', label: 'Home', icon: Home },
    { to: '/student/courses', label: 'Courses', icon: BookOpen },
    { to: '/student/ai-tutor', label: 'AI', icon: Bot },
    { to: '/student/quizzes', label: 'Quiz', icon: ClipboardList },
    { to: '/student/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white pb-[env(safe-area-inset-bottom)] lg:hidden dark:bg-slate-900 dark:border-slate-700">
      <div className="flex items-center justify-around">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-4 py-2.5 text-[10px] font-medium transition-colors ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-ink-lighter hover:text-ink dark:hover:text-slate-300'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;