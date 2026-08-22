import { Link } from 'react-router-dom';
import { Users, TrendingUp, BookOpen, ClipboardList, ArrowRight, AlertTriangle } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { teacherStats } from '../../data/mockData';

const TeacherDashboard = () => {
  const stats = [
    { icon: Users, label: 'Total Students', value: teacherStats.totalStudents, color: 'bg-blue-100 text-blue-600' },
    { icon: TrendingUp, label: 'Average Performance', value: `${teacherStats.averagePerformance}%`, color: 'bg-emerald-100 text-emerald-600' },
    { icon: BookOpen, label: 'Lessons', value: teacherStats.lessons, color: 'bg-purple-100 text-purple-600' },
    { icon: ClipboardList, label: 'Quizzes', value: teacherStats.quizzes, color: 'bg-amber-100 text-amber-600' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Welcome, Teacher</h1>
        <p className="mt-1 text-ink-light">Manage your classes and track student performance</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-ink-light">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Student Performance */}
      <Card>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Student Performance</h2>
          <Link to="/teacher/students" className="text-sm text-primary-600 hover:underline">
            View All
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {teacherStats.studentPerformance.map((student) => (
            <div key={student.name} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{student.name}</p>
                <p className="text-xs text-ink-light">
                  {student.trend === 'up' ? '↑ Improving' : '↓ Needs attention'}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <ProgressBar value={student.score} className="w-24" />
                <span className="text-sm font-semibold">{student.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Weak Topics */}
      <Card>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <h2 className="text-lg font-semibold">Weak Topics</h2>
        </div>
        <div className="mt-4 space-y-2">
          {teacherStats.weakTopics.map((topic) => (
            <div key={topic.topic} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <span className="text-sm font-medium">{topic.topic}</span>
              <Badge variant="warning">{topic.students} students</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Quiz Results */}
      <Card>
        <h2 className="text-lg font-semibold">Recent Quiz Results</h2>
        <div className="mt-4 space-y-3">
          {teacherStats.recentQuizResults.map((result) => (
            <div key={result.quiz} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{result.quiz}</p>
                <p className="text-xs text-ink-light">{result.students} students</p>
              </div>
              <Badge variant={result.average >= 75 ? 'success' : 'warning'}>
                Avg: {result.average}%
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-3 sm:grid-cols-2">
        <Link to="/teacher/courses">
          <Card className="flex items-center justify-between transition-shadow hover:shadow-md">
            <div>
              <h3 className="font-semibold">Course Management</h3>
              <p className="text-sm text-ink-light">Create and manage courses</p>
            </div>
            <ArrowRight className="h-5 w-5 text-primary-600" />
          </Card>
        </Link>
        <Link to="/teacher/quizzes">
          <Card className="flex items-center justify-between transition-shadow hover:shadow-md">
            <div>
              <h3 className="font-semibold">Quiz Management</h3>
              <p className="text-sm text-ink-light">Create and manage quizzes</p>
            </div>
            <ArrowRight className="h-5 w-5 text-primary-600" />
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;