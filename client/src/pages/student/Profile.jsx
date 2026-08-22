import { User, Mail, BookOpen, Globe, TrendingUp } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { useAuth } from '../../context/AuthContext';
import { studentProgress } from '../../data/mockData';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">My Profile</h1>
        <p className="mt-1 text-ink-light">Your learning information</p>
      </div>

      {/* Profile Card */}
      <Card className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-3xl dark:bg-primary-900/30">
          {user?.name?.charAt(0) || 'S'}
        </div>
        <h2 className="mt-4 text-xl font-bold">{user?.name || 'Student'}</h2>
        <p className="text-sm text-ink-light">{user?.email}</p>
        <div className="mt-3 flex justify-center gap-2">
          <Badge variant="primary">Class {user?.class || 8}</Badge>
          <Badge variant="secondary">{user?.preferredLanguage || 'Hindi'}</Badge>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="text-center">
          <div className="text-2xl font-bold text-primary-600">{studentProgress.overall}%</div>
          <p className="text-xs text-ink-light">Overall Progress</p>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-emerald-600">{studentProgress.lessonsCompleted}</div>
          <p className="text-xs text-ink-light">Lessons Done</p>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-amber-600">12</div>
          <p className="text-xs text-ink-light">Quizzes Taken</p>
        </Card>
      </div>

      {/* Info */}
      <Card>
        <h2 className="text-lg font-semibold">Account Information</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-ink-lighter" />
            <span className="text-sm text-ink-light">Name:</span>
            <span className="text-sm font-medium">{user?.name || 'Student'}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-ink-lighter" />
            <span className="text-sm text-ink-light">Email:</span>
            <span className="text-sm font-medium">{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen className="h-4 w-4 text-ink-lighter" />
            <span className="text-sm text-ink-light">Class:</span>
            <span className="text-sm font-medium">Class {user?.class || 8}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-4 w-4 text-ink-lighter" />
            <span className="text-sm text-ink-light">Language:</span>
            <span className="text-sm font-medium">{user?.preferredLanguage || 'Hindi'}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;