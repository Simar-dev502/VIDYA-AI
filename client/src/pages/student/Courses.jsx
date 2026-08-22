import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, ChevronRight } from 'lucide-react';
import Card from '../../components/common/Card';
import ProgressBar from '../../components/common/ProgressBar';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { courses, subjects, classes } from '../../data/mockData';

const Courses = () => {
  const [search, setSearch] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [classFilter, setClassFilter] = useState('');

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = !subjectFilter || course.subject === subjectFilter;
    const matchesClass = !classFilter || course.class === Number(classFilter);
    return matchesSearch && matchesSubject && matchesClass;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">My Courses</h1>
        <p className="mt-1 text-ink-light">Continue learning and explore new subjects</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-lighter" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search subjects or topics..."
          className="input pl-10"
          aria-label="Search courses"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
          className="input w-auto"
          aria-label="Filter by subject"
        >
          <option value="">All Subjects</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>

        <select
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
          className="input w-auto"
          aria-label="Filter by class"
        >
          <option value="">All Classes</option>
          {classes.map((cls) => (
            <option key={cls.id} value={cls.id}>
              {cls.label}
            </option>
          ))}
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl dark:bg-emerald-900/30">
                {course.subject === 'science' ? '🔬' : course.subject === 'math' ? '📐' : '📖'}
              </div>
              <Badge variant={course.difficulty === 'Hard' ? 'error' : course.difficulty === 'Medium' ? 'warning' : 'success'}>
                {course.difficulty}
              </Badge>
            </div>

            <h3 className="mt-3 text-lg font-semibold">{course.title}</h3>
            <p className="text-sm text-ink-light">Class {course.class}</p>

            <div className="mt-3 flex items-center gap-4 text-xs text-ink-light">
              <span className="flex items-center gap-1">
                <BookOpen className="h-3.5 w-3.5" />
                {course.chapters} Chapters
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {course.lessons} Lessons
              </span>
            </div>

            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-ink-light">Progress</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <ProgressBar value={course.progress} />
            </div>

            <div className="mt-4">
              <Link to={`/student/courses/${course.id}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-ink-light">No courses found. Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default Courses;