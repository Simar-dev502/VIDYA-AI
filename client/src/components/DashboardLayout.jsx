import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = ({ title, children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h2>VIDYA-AI</h2>
        </div>
        <div className="nav-links">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          {user?.role === 'student' && (
            <Link to="/student/dashboard" className="nav-link">
              My Learning
            </Link>
          )}
          {user?.role === 'teacher' && (
            <Link to="/teacher/dashboard" className="nav-link">
              Student Management
            </Link>
          )}
          {user?.role === 'admin' && (
            <Link to="/admin/dashboard" className="nav-link">
              Admin Panel
            </Link>
          )}
        </div>
        <div className="nav-user">
          <span className="user-name">{user?.name}</span>
          <span className={`role-badge role-${user?.role}`}>{user?.role}</span>
          <button onClick={handleLogout} className="btn btn-outline btn-sm">
            Logout
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>{title}</h1>
          <p>
            Welcome back, {user?.name}! You are logged in as a{' '}
            <strong>{user?.role}</strong>.
          </p>
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;