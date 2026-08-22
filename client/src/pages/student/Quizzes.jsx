import { Link } from 'react-router-dom';
import { Clock, ClipboardList, ChevronRight } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { quizzes } from '../../data/mockData';

const Quizzes = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Quizzes</h1>
        <p className="mt-1 text-ink-light">Test your knowledge and track your progress</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="flex flex-col">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl dark:bg-amber-900/30">
                📝
              </div>
              <Badge variant={quiz.difficulty === 'Hard' ? 'error' : quiz.difficulty === 'Medium' ? 'warning' : 'success'}>
                {quiz.difficulty}
              </Badge>
            </div>

            <h3 className="mt-3 text-lg font-semibold">{quiz.title}</h3>
            <p className="text-sm text-ink-light">{quiz.subject} • Class {quiz.class}</p>

            <div className="mt-3 flex items-center gap-4 text-xs text-ink-light">
              <span className="flex items-center gap-1">
                <ClipboardList className="h-3.5 w-3.5" />
                {quiz.questions} Questions
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {quiz.duration} min
              </span>
            </div>

            <div className="mt-4">
              <Link to={`/student/quiz/${quiz.id}`}>
                <Button className="w-full">
                  Start Quiz <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;