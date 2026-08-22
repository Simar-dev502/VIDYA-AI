import { TrendingUp, AlertTriangle, Clock } from 'lucide-react';
import Card from '../../components/common/Card';
import ProgressBar from '../../components/common/ProgressBar';
import Badge from '../../components/common/Badge';
import { studentProgress } from '../../data/mockData';

const Progress = () => {
  const maxMinutes = Math.max(...studentProgress.weeklyActivity.map((d) => d.minutes));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">My Progress</h1>
        <p className="mt-1 text-ink-light">Track your learning journey</p>
      </div>

      {/* Overall Progress */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Overall Progress</h2>
            <p className="mt-1 text-sm text-ink-light">
              {studentProgress.lessonsCompleted} of {studentProgress.totalLessons} lessons completed
            </p>
          </div>
          <span className="text-3xl font-bold text-primary-600">{studentProgress.overall}%</span>
        </div>
        <ProgressBar value={studentProgress.overall} className="mt-4" />
      </Card>

      {/* Subject Performance */}
      <Card>
        <h2 className="text-lg font-semibold">Subject Performance</h2>
        <div className="mt-4 space-y-4">
          {studentProgress.subjects.map((subject) => (
            <div key={subject.name}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium">{subject.name}</span>
                <span className="font-semibold">{subject.score}%</span>
              </div>
              <ProgressBar value={subject.score} color={subject.color} />
            </div>
          ))}
        </div>
      </Card>

      {/* Weak Areas */}
      <Card>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <h2 className="text-lg font-semibold">Weak Areas</h2>
        </div>
        <div className="mt-4 space-y-2">
          {studentProgress.weakAreas.map((area, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <div>
                <p className="text-sm font-medium">{area.topic}</p>
                <p className="text-xs text-ink-light">{area.subject}</p>
              </div>
              <Badge variant="warning">Needs Practice</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Weekly Activity */}
      <Card>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary-600" />
          <h2 className="text-lg font-semibold">Learning Activity</h2>
        </div>
        <div className="mt-4 flex items-end justify-between gap-2">
          {studentProgress.weeklyActivity.map((day) => (
            <div key={day.day} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-xs font-medium text-ink-light">{day.minutes}m</span>
              <div
                className="w-full rounded-t-lg bg-primary-600"
                style={{ height: `${(day.minutes / maxMinutes) * 80}px` }}
              />
              <span className="text-xs font-medium text-ink-light">{day.day}</span>
            </div>
          ))}
        </div>
      </Card>

      <p className="text-center text-xs text-ink-lighter">
        * Demo data shown. Will be connected to real backend data.
      </p>
    </div>
  );
};

export default Progress;