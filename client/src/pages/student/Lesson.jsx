import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bookmark, Download, Bot, Volume2, CheckCircle2, PlayCircle } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { courses } from '../../data/mockData';

const Lesson = () => {
  const { id } = useParams();
  const [bookmarked, setBookmarked] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Find lesson in mock data
  let lesson = null;
  let course = null;
  let chapter = null;

  for (const c of courses) {
    for (const ch of c.chaptersList) {
      const found = ch.lessons.find((l) => l.id === id);
      if (found) {
        lesson = found;
        course = c;
        chapter = ch;
        break;
      }
    }
    if (lesson) break;
  }

  if (!lesson) {
    return (
      <div className="py-12 text-center">
        <p className="text-ink-light">Lesson not found.</p>
        <Link to="/student/courses" className="mt-4 inline-block">
          <Button variant="outline">Back to Courses</Button>
        </Link>
      </div>
    );
  }

  const keyPoints = [
    'Understand the basic concepts clearly',
    'Practice with examples to reinforce learning',
    'Take notes for better retention',
    'Ask the AI tutor if you have doubts',
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-ink-light">
        <Link to="/student/courses" className="hover:text-primary-600">Courses</Link>
        {' > '}
        <Link to={`/student/courses/${course.id}`} className="hover:text-primary-600">{course.title}</Link>
        {' > '}
        <span className="text-ink">{chapter.title}</span>
      </div>

      {/* Lesson Header */}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">{lesson.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Badge variant="primary">{course.title}</Badge>
          <Badge variant="neutral">{lesson.duration}</Badge>
        </div>
      </div>

      {/* Video Placeholder */}
      <Card className="p-0 overflow-hidden">
        <div className="flex aspect-video items-center justify-center bg-slate-100 dark:bg-slate-700">
          <div className="text-center">
            <PlayCircle className="mx-auto h-16 w-16 text-primary-600" />
            <p className="mt-2 text-sm text-ink-light">Video lesson will play here</p>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={bookmarked ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setBookmarked(!bookmarked)}
        >
          <Bookmark className="h-4 w-4" />
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </Button>
        <Button
          variant={downloaded ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => setDownloaded(!downloaded)}
        >
          <Download className="h-4 w-4" />
          {downloaded ? 'Downloaded' : 'Download'}
        </Button>
        <Button variant="outline" size="sm">
          <Volume2 className="h-4 w-4" />
          Listen
        </Button>
        <Link to="/student/ai-tutor">
          <Button variant="accent" size="sm">
            <Bot className="h-4 w-4" />
            Ask AI about this lesson
          </Button>
        </Link>
      </div>

      {/* Lesson Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <h2 className="text-lg font-semibold">Lesson Notes</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-light">
              <p>
                This lesson covers the fundamental concepts of {lesson.title.toLowerCase()}. 
                Understanding these basics is essential for building a strong foundation in {course.title}.
              </p>
              <p>
                Take your time to go through each section carefully. If you don't understand something,
                you can always ask the AI tutor for help or replay the video.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">Examples</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
                <p className="text-sm font-medium">Example 1</p>
                <p className="mt-1 text-sm text-ink-light">
                  A simple example to illustrate the concept of {lesson.title.toLowerCase()}.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
                <p className="text-sm font-medium">Example 2</p>
                <p className="mt-1 text-sm text-ink-light">
                  Another practical example showing real-world application.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Points */}
        <Card className="h-fit">
          <h2 className="text-lg font-semibold">Key Points</h2>
          <ul className="mt-4 space-y-3">
            {keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-ink-light">{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline">
          <ChevronLeft className="h-4 w-4" />
          Previous Lesson
        </Button>
        <Button>
          Next Lesson
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Lesson;