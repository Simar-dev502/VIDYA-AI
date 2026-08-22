import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, BookOpen, Moon, Sun } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Courses', to: '/courses' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Features', to: '/features' },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow dark:bg-slate-900/95 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container-app flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-ink dark:text-white">
            Vidya<span className="text-primary-600">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-ink-light transition-colors hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher compact />
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-ink-light hover:bg-slate-100 hover:text-ink dark:hover:bg-slate-700"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium text-ink-light hover:text-primary-600">
                Dashboard
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-ink-light hover:bg-slate-100 md:hidden dark:hover:bg-slate-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white px-4 py-4 md:hidden dark:bg-slate-900 dark:border-slate-700">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-light hover:bg-slate-100 hover:text-ink dark:hover:bg-slate-700"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 border-t pt-3 dark:border-slate-700">
              <LanguageSwitcher compact />
              <button
                onClick={toggleTheme}
                className="rounded-lg p-2 text-ink-light hover:bg-slate-100 dark:hover:bg-slate-700"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </button>
            </div>
            <div className="flex gap-2 border-t pt-3 dark:border-slate-700">
              {user ? (
                <>
                  <Link to="/dashboard" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                  <Button variant="outline" onClick={handleLogout} className="flex-1">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/register" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;