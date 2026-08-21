import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Forbidden = () => {
  const { user } = useAuth();

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">403</h1>
        <h2>Access Forbidden</h2>
        <p>
          You don't have permission to access this page. Your current role is{' '}
          <strong>{user?.role || 'unknown'}</strong>.
        </p>
        <div className="error-actions">
          <Link to="/dashboard" className="btn btn-primary">
            Go to Dashboard
          </Link>
          <Link to="/login" className="btn btn-outline">
            Login as different user
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;