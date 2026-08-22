import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, PlayCircle, Trash2 } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import EmptyState from '../../components/common/EmptyState';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: 'l1', title: 'Introduction to Crop Production', course: 'Science', chapter: 'Crop Production' },
    { id: 'ml1', title: 'Introduction to Rational Numbers', course: 'Mathematics', chapter: 'Rational Numbers' },
    { id: 'el1', title: 'Nouns and Pronouns', course: 'English', chapter: 'Grammar Basics' },
  ]);

  const handleRemove = (id) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  if (bookmarks.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold md:text-3xl">Bookmarks</h1>
        <Card>
          <EmptyState
            title="No bookmarks yet"
            description="Bookmark lessons to access them quickly later."
            action={
              <Link to="/student/courses">
                <Button variant="outline">Explore Courses</Button>
              </Link>
            }
          />
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Bookmarks</h1>
        <p className="mt-1 text-ink-light">Your saved lessons</p>
      </div>

      <div className="space-y-3">
        {bookmarks.map((bookmark) => (
          <Card key={bookmark.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <Bookmark className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{bookmark.title}</h3>
                <p className="text-sm text-ink-light">
                  {bookmark.course} • {bookmark.chapter}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to={`/student/lesson/${bookmark.id}`}>
                <Button variant="outline" size="sm">
                  <PlayCircle className="h-4 w-4" />
                  Open
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={() => handleRemove(bookmark.id)}>
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;