import { Link } from 'react-router-dom';
import { ShieldAlert, Home, LogIn } from 'lucide-react';
import Button from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

const Forbidden = () => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-900">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
          <ShieldAlert className="h-10 w-10" />
        </div>
        <h1 className="mt-6 text-4xl font-bold text-ink dark:text-white">403</h1>
        <h2 className="mt-2 text-2xl font-semibold">Access Forbidden</h2>
        <p className="mt-4 text-ink-light">
          You don't have permission to access this page. Your current role is{' '}
          <strong className="text-ink">{user?.role || 'unknown'}</strong>.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/dashboard" className="flex-1">
            <Button className="w-full">
              <Home className="h-4 w-4" />
              Go to Dashboard
            </Button>
          </Link>
          <Link to="/login" className="flex-1">
            <Button variant="outline" className="w-full">
              <LogIn className="h-4 w-4" />
              Login as different user
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;