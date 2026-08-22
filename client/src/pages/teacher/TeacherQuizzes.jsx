import { useState } from 'react';
import { Plus, Edit, Trash2, ClipboardList, Users, Eye } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import { quizzes, classes } from '../../data/mockData';

const TeacherQuizzes = () => {
  const [quizList, setQuizList] = useState(quizzes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    subject: '',
    class: '',
    questions: 10,
    duration: 15,
    difficulty: 'Medium',
  });

  const handleAddQuiz = () => {
    if (!newQuiz.title || !newQuiz.class) return;
    setQuizList([
      ...quizList,
      {
        id: `quiz-${Date.now()}`,
        title: newQuiz.title,
        subject: newQuiz.subject || 'General',
        class: Number(newQuiz.class),
        questions: Number(newQuiz.questions),
        duration: Number(newQuiz.duration),
        difficulty: newQuiz.difficulty,
        questionsList: [],
      },
    ]);
    setNewQuiz({ title: '', subject: '', class: '', questions: 10, duration: 15, difficulty: 'Medium' });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setQuizList(quizList.filter((q) => q.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Quiz Management</h1>
          <p className="mt-1 text-ink-light">Create and manage quizzes</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4" />
          Create Quiz
        </Button>
      </div>

      <div className="space-y-3">
        {quizList.map((quiz) => (
          <Card key={quiz.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl dark:bg-amber-900/30">
                📝
              </div>
              <div>
                <h3 className="font-semibold">{quiz.title}</h3>
                <p className="text-sm text-ink-light">
                  {quiz.subject} • Class {quiz.class}
                </p>
                <div className="mt-1 flex items-center gap-3 text-xs text-ink-light">
                  <span className="flex items-center gap-1">
                    <ClipboardList className="h-3 w-3" />
                    {quiz.questions} Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    35 Students
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4" />
                View Results
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleDelete(quiz.id)}>
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Quiz">
        <div className="space-y-4">
          <Input
            label="Quiz Title"
            value={newQuiz.title}
            onChange={(e) => setNewQuiz({ ...newQuiz, title: e.target.value })}
            placeholder="e.g. Physics Basics"
          />
          <Input
            label="Subject"
            value={newQuiz.subject}
            onChange={(e) => setNewQuiz({ ...newQuiz, subject: e.target.value })}
            placeholder="e.g. Physics"
          />
          <Select
            label="Class"
            value={newQuiz.class}
            onChange={(e) => setNewQuiz({ ...newQuiz, class: e.target.value })}
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.label}
              </option>
            ))}
          </Select>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Questions"
              type="number"
              value={newQuiz.questions}
              onChange={(e) => setNewQuiz({ ...newQuiz, questions: e.target.value })}
            />
            <Input
              label="Duration (min)"
              type="number"
              value={newQuiz.duration}
              onChange={(e) => setNewQuiz({ ...newQuiz, duration: e.target.value })}
            />
          </div>
          <Select
            label="Difficulty"
            value={newQuiz.difficulty}
            onChange={(e) => setNewQuiz({ ...newQuiz, difficulty: e.target.value })}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Select>
          <Button className="w-full" onClick={handleAddQuiz}>
            Create Quiz
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TeacherQuizzes;