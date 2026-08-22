import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import ProgressBar from '../../components/common/ProgressBar';
import { quizzes } from '../../data/mockData';
import { quizService } from '../../services/quizService';

const QuizInterface = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes.find((q) => q.id === id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(quiz?.duration * 60 || 0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!quiz) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [quiz]);

  if (!quiz) {
    return (
      <div className="py-12 text-center">
        <p className="text-ink-light">Quiz not found.</p>
        <Link to="/student/quizzes" className="mt-4 inline-block">
          <Button variant="outline">Back to Quizzes</Button>
        </Link>
      </div>
    );
  }

  const question = quiz.questionsList[currentQuestion];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleAnswer = (optionIndex) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    const result = await quizService.submitQuiz(quiz.id, answers);
    navigate(`/student/quiz/${quiz.id}/result`, { state: { result } });
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold md:text-2xl">{quiz.title}</h1>
          <p className="text-sm text-ink-light">
            Question {currentQuestion + 1} of {quiz.questionsList.length}
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-700">
          <Clock className="h-4 w-4 text-ink-light" />
          <span className="font-mono text-sm font-medium">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar value={((currentQuestion + 1) / quiz.questionsList.length) * 100} />

      {/* Question */}
      <Card>
        <h2 className="text-lg font-semibold">{question.question}</h2>
        <div className="mt-6 space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`flex w-full items-center gap-3 rounded-lg border-2 p-4 text-left transition-all ${
                answers[currentQuestion] === index
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-slate-200 hover:border-primary-300 dark:border-slate-600'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                  answers[currentQuestion] === index
                    ? 'border-primary-600 bg-primary-600 text-white'
                    : 'border-slate-300 text-ink-light'
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-sm font-medium">{option}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {currentQuestion < quiz.questionsList.length - 1 ? (
          <Button
            onClick={() => setCurrentQuestion((prev) => Math.min(quiz.questionsList.length - 1, prev + 1))}
            disabled={answers[currentQuestion] === undefined}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} loading={submitting} disabled={submitting}>
            <CheckCircle2 className="h-4 w-4" />
            Submit Quiz
          </Button>
        )}
      </div>

      {/* Question dots */}
      <div className="flex flex-wrap justify-center gap-2">
        {quiz.questionsList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuestion(index)}
            className={`h-8 w-8 rounded-lg text-xs font-medium transition-colors ${
              currentQuestion === index
                ? 'bg-primary-600 text-white'
                : answers[index] !== undefined
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                : 'bg-slate-100 text-ink-light dark:bg-slate-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizInterface;