import { TrendingUp, Users, BookOpen, ClipboardList } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import ProgressBar from '../../components/common/ProgressBar';
import { teacherStats } from '../../data/mockData';

const TeacherAnalytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Analytics</h1>
        <p className="mt-1 text-ink-light">Class performance overview</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Card className="text-center">
          <div className="text-2xl font-bold text-primary-600">{teacherStats.totalStudents}</div>
          <p className="text-xs text-ink-light">Total Students</p>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-emerald-600">{teacherStats.averagePerformance}%</div>
          <p className="text-xs text-ink-light">Average Performance</p>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-purple-600">{teacherStats.lessons}</div>
          <p className="text-xs text-ink-light">Lessons</p>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-amber-600">{teacherStats.quizzes}</div>
          <p className="text-xs text-ink-light">Quizzes</p>
        </Card>
      </div>

      {/* Subject Performance */}
      <Card>
        <h2 className="text-lg font-semibold">Subject Performance</h2>
        <div className="mt-4 space-y-4">
          {[
            { name: 'Mathematics', score: 82 },
            { name: 'Science', score: 76 },
            { name: 'English', score: 68 },
            { name: 'Physics', score: 45 },
          ].map((subject) => (
            <div key={subject.name}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium">{subject.name}</span>
                <span className="font-semibold">{subject.score}%</span>
              </div>
              <ProgressBar value={subject.score} />
            </div>
          ))}
        </div>
      </Card>

      {/* Weak Topics */}
      <Card>
        <h2 className="text-lg font-semibold">Weak Topics</h2>
        <div className="mt-4 space-y-2">
          {teacherStats.weakTopics.map((topic) => (
            <div key={topic.topic} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <span className="text-sm font-medium">{topic.topic}</span>
              <Badge variant="warning">{topic.students} students struggling</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Quiz Results */}
      <Card>
        <h2 className="text-lg font-semibold">Quiz Results</h2>
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
    </div>
  );
};

export default TeacherAnalytics;