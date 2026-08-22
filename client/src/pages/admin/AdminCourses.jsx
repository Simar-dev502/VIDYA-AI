import { useState } from 'react';
import { Search, BookOpen, Users, Trash2, Edit } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { courses } from '../../data/mockData';

const AdminCourses = () => {
  const [search, setSearch] = useState('');
  const [courseList, setCourseList] = useState(courses);

  const filteredCourses = courseList.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setCourseList(courseList.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Course Management</h1>
        <p className="mt-1 text-ink-light">Manage all platform courses</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-lighter" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search courses..."
          className="input pl-10"
          aria-label="Search courses"
        />
      </div>

      <div className="space-y-3">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl dark:bg-emerald-900/30">
                {course.subject === 'science' ? '🔬' : course.subject === 'math' ? '📐' : '📖'}
              </div>
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-ink-light">Class {course.class}</p>
                <div className="mt-1 flex items-center gap-3 text-xs text-ink-light">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.lessons} Lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    28 Students
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={course.difficulty === 'Hard' ? 'error' : course.difficulty === 'Medium' ? 'warning' : 'success'}>
                {course.difficulty}
              </Badge>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleDelete(course.id)}>
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;