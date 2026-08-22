import { Link } from 'react-router-dom';
import { Bot, BookOpen, ClipboardList, Download, TrendingUp, ArrowRight, PlayCircle, Sparkles, Clock } from 'lucide-react';
import Card from '../../components/common/Card';
import ProgressBar from '../../components/common/ProgressBar';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { studentProgress, courses, recommendations } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Student';
  const continueCourse = courses[0];
  const recommended = recommendations;

  const quickActions = [
    { icon: Bot, label: 'Ask AI Tutor', to: '/student/ai-tutor', color: 'bg-purple-100 text-purple-600' },
    { icon: BookOpen, label: 'My Courses', to: '/student/courses', color: 'bg-blue-100 text-blue-600' },
    { icon: ClipboardList, label: 'Take Quiz', to: '/student/quizzes', color: 'bg-amber-100 text-amber-600' },
    { icon: Download, label: 'Downloads', to: '/student/downloads', color: 'bg-emerald-100 text-emerald-600' },
    { icon: TrendingUp, label: 'My Progress', to: '/student/progress', color: 'bg-pink-100 text-pink-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">
          Good morning, {firstName} 👋
        </h1>
        <p className="mt-1 text-ink-light">Continue your learning journey.</p>
      </div>

      {/* Learning Progress */}
      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Learning Progress</h2>
            <p className="mt-1 text-sm text-ink-light">
              {studentProgress.lessonsCompleted} / {studentProgress.totalLessons} lessons completed
            </p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-primary-600">{studentProgress.overall}%</span>
            <p className="text-xs text-ink-light">Overall Progress</p>
          </div>
        </div>
        <ProgressBar value={studentProgress.overall} className="mt-4" />
      </Card>

      {/* Continue Learning */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Continue Learning</h2>
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-2xl dark:bg-emerald-900/30">
              🔬
            </div>
            <div>
              <h3 className="font-semibold">{continueCourse.title}</h3>
              <p className="text-sm text-ink-light">Force and Motion</p>
              <div className="mt-2 flex items-center gap-2">
                <ProgressBar value={65} className="w-32" />
                <span className="text-xs font-medium text-ink-light">65%</span>
              </div>
            </div>
          </div>
          <Link to={`/student/courses/${continueCourse.id}`}>
            <Button>
              Continue <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>
      </div>

      {/* Recommended For You */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Recommended For You</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((rec) => (
            <Card key={rec.id} className="flex flex-col">
              <div className="flex items-start justify-between">
                <Badge variant={rec.type === 'quiz' ? 'accent' : 'primary'}>
                  {rec.type === 'quiz' ? 'Quiz' : 'Lesson'}
                </Badge>
                <Sparkles className="h-4 w-4 text-accent-500" />
              </div>
              <h3 className="mt-3 font-semibold">{rec.title}</h3>
              <p className="mt-1 text-xs text-ink-light">{rec.reason}</p>
              <div className="mt-4">
                <Link to={rec.type === 'quiz' ? '/student/quizzes' : '/student/courses'}>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Learning
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Today's Learning */}
      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Today's Learning</h2>
          <Clock className="h-5 w-5 text-ink-lighter" />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-700">
            <div className="text-2xl">📖</div>
            <p className="mt-2 text-sm font-medium">1 Lesson</p>
            <p className="text-xs text-ink-light">10 min</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-700">
            <div className="text-2xl">📝</div>
            <p className="mt-2 text-sm font-medium">1 Quiz</p>
            <p className="text-xs text-ink-light">5 min</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-700">
            <div className="text-2xl">⏰</div>
            <p className="mt-2 text-sm font-medium">15 min</p>
            <p className="text-xs text-ink-light">Recommended</p>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {quickActions.map((action) => (
            <Link key={action.label} to={action.to}>
              <Card className="flex flex-col items-center gap-2 py-6 text-center transition-shadow hover:shadow-md">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">{action.label}</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;