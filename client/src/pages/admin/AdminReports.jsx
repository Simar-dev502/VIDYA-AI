import { TrendingUp, Users, BookOpen, Activity } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import ProgressBar from '../../components/common/ProgressBar';

const AdminReports = () => {
  const reports = [
    { label: 'Total Students', value: 1245, change: '+12%', trend: 'up' },
    { label: 'Active Users This Week', value: 342, change: '+8%', trend: 'up' },
    { label: 'New Registrations', value: 56, change: '+15%', trend: 'up' },
    { label: 'Content Completion Rate', value: '72%', change: '+5%', trend: 'up' },
  ];

  const subjectPerformance = [
    { name: 'Mathematics', score: 82 },
    { name: 'Science', score: 76 },
    { name: 'English', score: 68 },
    { name: 'Social Science', score: 71 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Reports</h1>
        <p className="mt-1 text-ink-light">Platform analytics and reports</p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {reports.map((report) => (
          <Card key={report.label} className="text-center">
            <div className="text-2xl font-bold text-primary-600">{report.value}</div>
            <p className="text-xs text-ink-light">{report.label}</p>
            <Badge variant="success" className="mt-2">
              {report.change}
            </Badge>
          </Card>
        ))}
      </div>

      <Card>
        <h2 className="text-lg font-semibold">Subject Performance</h2>
        <div className="mt-4 space-y-4">
          {subjectPerformance.map((subject) => (
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

      <Card>
        <h2 className="text-lg font-semibold">Platform Activity</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
            <span className="text-sm font-medium">Average Session Time</span>
            <span className="text-sm font-semibold">45 min</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
            <span className="text-sm font-medium">Lessons Completed</span>
            <span className="text-sm font-semibold">2,847</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
            <span className="text-sm font-medium">Quizzes Taken</span>
            <span className="text-sm font-semibold">1,234</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminReports;