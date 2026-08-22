import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, BookOpen, Users, Trash2 } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import { courses, classes } from '../../data/mockData';

const TeacherCourses = () => {
  const [courseList, setCourseList] = useState(courses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    class: '',
    description: '',
  });

  const handleAddCourse = () => {
    if (!newCourse.title || !newCourse.class) return;
    setCourseList([
      ...courseList,
      {
        id: `course-${Date.now()}`,
        title: newCourse.title,
        subject: 'science',
        class: Number(newCourse.class),
        chapters: 0,
        lessons: 0,
        completedLessons: 0,
        progress: 0,
        difficulty: 'Medium',
        description: newCourse.description,
        chaptersList: [],
      },
    ]);
    setNewCourse({ title: '', class: '', description: '' });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setCourseList(courseList.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Courses</h1>
          <p className="mt-1 text-ink-light">Manage your courses and lessons</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Course
        </Button>
      </div>

      <div className="space-y-3">
        {courseList.map((course) => (
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
                    <Users className="h-3 w-3" />
                    28 Students
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.lessons} Lessons
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to={`/teacher/courses/${course.id}`}>
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4" />
                  Manage Lessons
                </Button>
              </Link>
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Course">
        <div className="space-y-4">
          <Input
            label="Course Title"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            placeholder="e.g. Science"
          />
          <Select
            label="Class"
            value={newCourse.class}
            onChange={(e) => setNewCourse({ ...newCourse, class: e.target.value })}
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.label}
              </option>
            ))}
          </Select>
          <Input
            label="Description"
            value={newCourse.description}
            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            placeholder="Brief description"
          />
          <Button className="w-full" onClick={handleAddCourse}>
            Create Course
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TeacherCourses;