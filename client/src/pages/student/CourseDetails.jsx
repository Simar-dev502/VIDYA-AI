import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Clock, BookOpen, PlayCircle } from 'lucide-react';
import Card from '../../components/common/Card';
import ProgressBar from '../../components/common/ProgressBar';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { courses } from '../../data/mockData';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [expandedChapters, setExpandedChapters] = useState([course?.chaptersList?.[0]?.id]);

  if (!course) {
    return (
      <div className="py-12 text-center">
        <p className="text-ink-light">Course not found.</p>
        <Link to="/student/courses" className="mt-4 inline-block">
          <Button variant="outline">Back to Courses</Button>
        </Link>
      </div>
    );
  }

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const totalLessons = course.chaptersList.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const completedLessons = course.chaptersList.reduce(
    (acc, ch) => acc + ch.lessons.filter((l) => l.completed).length,
    0
  );

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div>
        <Link to="/student/courses" className="text-sm text-primary-600 hover:underline">
          ← Back to Courses
        </Link>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold md:text-3xl">{course.title}</h1>
              <Badge variant="primary">Class {course.class}</Badge>
            </div>
            <p className="mt-2 text-ink-light">{course.description}</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-primary-600">{course.progress}%</span>
            <p className="text-xs text-ink-light">Course Progress</p>
          </div>
        </div>
        <ProgressBar value={course.progress} className="mt-4" />
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="text-center">
          <div className="text-2xl font-bold">{course.chapters}</div>
          <p className="text-xs text-ink-light">Chapters</p>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold">{totalLessons}</div>
          <p className="text-xs text-ink-light">Lessons</p>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold">{completedLessons}</div>
          <p className="text-xs text-ink-light">Completed</p>
        </Card>
      </div>

      {/* Chapters */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Course Content</h2>
        <div className="space-y-3">
          {course.chaptersList.map((chapter, chapterIndex) => {
            const isExpanded = expandedChapters.includes(chapter.id);
            const chapterCompleted = chapter.lessons.filter((l) => l.completed).length;

            return (
              <Card key={chapter.id} className="p-0">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="flex w-full items-center justify-between p-4 text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown className="h-5 w-5 text-ink-lighter" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-ink-lighter" />
                    )}
                    <div>
                      <h3 className="font-semibold">
                        Chapter {chapterIndex + 1}: {chapter.title}
                      </h3>
                      <p className="text-xs text-ink-light">
                        {chapterCompleted}/{chapter.lessons.length} lessons completed
                      </p>
                    </div>
                  </div>
                  <Badge variant={chapterCompleted === chapter.lessons.length ? 'success' : 'neutral'}>
                    {chapterCompleted === chapter.lessons.length ? 'Completed' : `${Math.round((chapterCompleted / chapter.lessons.length) * 100)}%`}
                  </Badge>
                </button>

                {isExpanded && (
                  <div className="border-t px-4 py-2 dark:border-slate-700">
                    {chapter.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/student/lesson/${lesson.id}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                          ) : (
                            <Circle className="h-5 w-5 text-ink-lighter" />
                          )}
                          <div>
                            <p className="text-sm font-medium">{lesson.title}</p>
                            <p className="flex items-center gap-1 text-xs text-ink-light">
                              <Clock className="h-3 w-3" />
                              {lesson.duration}
                            </p>
                          </div>
                        </div>
                        {lesson.title === 'Quiz' ? (
                          <Badge variant="accent">Quiz</Badge>
                        ) : (
                          <PlayCircle className="h-5 w-5 text-primary-600" />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;