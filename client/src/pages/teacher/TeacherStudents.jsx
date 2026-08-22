import { useState } from 'react';
import { Search, Mail, TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import ProgressBar from '../../components/common/ProgressBar';
import { teacherStats } from '../../data/mockData';

const TeacherStudents = () => {
  const [search, setSearch] = useState('');
  const students = teacherStats.studentPerformance;

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Students</h1>
        <p className="mt-1 text-ink-light">Track student performance</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-lighter" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search students..."
          className="input pl-10"
          aria-label="Search students"
        />
      </div>

      <div className="space-y-3">
        {filteredStudents.map((student) => (
          <Card key={student.name} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                {student.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold">{student.name}</h3>
                <p className="flex items-center gap-1 text-xs text-ink-light">
                  {student.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-emerald-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  {student.trend === 'up' ? 'Improving' : 'Needs attention'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ProgressBar value={student.score} className="w-24" />
              <span className="text-sm font-semibold">{student.score}%</span>
              <Badge variant={student.score >= 75 ? 'success' : 'warning'}>
                {student.score >= 75 ? 'Good' : 'Average'}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherStudents;