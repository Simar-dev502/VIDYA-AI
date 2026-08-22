import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Target, ArrowRight, RotateCcw } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';

const QuizResult = () => {
  const location = useLocation();
  const result = location.state?.result || { correct: 0, total: 0, percentage: 0 };
  const incorrect = result.total - result.correct;

  const getMessage = () => {
    if (result.percentage >= 80) return { text: 'Excellent! 🎉', color: 'text-emerald-600' };
    if (result.percentage >= 60) return { text: 'Good job! 👍', color: 'text-blue-600' };
    if (result.percentage >= 40) return { text: 'Keep practicing! 💪', color: 'text-amber-600' };
    return { text: 'Don\'t give up! 📚', color: 'text-red-600' };
  };

  const message = getMessage();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Card className="text-center">
        <h1 className="text-2xl font-bold">Your Score</h1>
        <div className="mt-6">
          <span className="text-6xl font-bold text-primary-600">
            {result.correct} <span className="text-2xl text-ink-lighter">/ {result.total}</span>
          </span>
        </div>
        <div className="mt-4">
          <span className={`text-3xl font-bold ${message.color}`}>{result.percentage}%</span>
        </div>
        <p className={`mt-2 text-lg font-medium ${message.color}`}>{message.text}</p>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Quiz Summary</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-emerald-50 p-4 text-center dark:bg-emerald-900/20">
            <CheckCircle2 className="mx-auto h-6 w-6 text-emerald-500" />
            <p className="mt-2 text-2xl font-bold text-emerald-600">{result.correct}</p>
            <p className="text-xs text-ink-light">Correct</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 text-center dark:bg-red-900/20">
            <XCircle className="mx-auto h-6 w-6 text-red-500" />
            <p className="mt-2 text-2xl font-bold text-red-600">{incorrect}</p>
            <p className="text-xs text-ink-light">Incorrect</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 text-center dark:bg-blue-900/20">
            <Target className="mx-auto h-6 w-6 text-blue-500" />
            <p className="mt-2 text-2xl font-bold text-blue-600">{result.percentage}%</p>
            <p className="text-xs text-ink-light">Accuracy</p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold">Recommended Next Step</h2>
        <p className="mt-2 text-sm text-ink-light">
          Practice Force and Motion Basics to improve your understanding.
        </p>
        <div className="mt-4">
          <ProgressBar value={result.percentage} color="bg-accent-500" />
        </div>
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link to="/student/quizzes" className="flex-1">
          <Button variant="outline" className="w-full">
            <RotateCcw className="h-4 w-4" />
            Try Another Quiz
          </Button>
        </Link>
        <Link to="/student/courses" className="flex-1">
          <Button className="w-full">
            Continue Learning
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuizResult;