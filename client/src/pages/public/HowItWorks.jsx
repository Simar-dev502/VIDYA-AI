import { Link } from 'react-router-dom';
import { BookOpen, Bot, ClipboardList, Sparkles, ArrowRight, UserPlus } from 'lucide-react';
import Button from '../../components/common/Button';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Account',
      desc: 'Register with your name, class, and preferred language. It takes less than a minute.',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      icon: BookOpen,
      title: 'Choose Your Class & Courses',
      desc: 'Select your class (6-10) and start learning subjects like Science, Math, and English.',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    },
    {
      icon: Bot,
      title: 'Learn with AI Tutor',
      desc: 'Ask doubts anytime. The AI tutor explains concepts in simple language with examples.',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
      icon: ClipboardList,
      title: 'Take Quizzes',
      desc: 'Test your understanding with interactive quizzes. Get instant feedback on your answers.',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    },
    {
      icon: Sparkles,
      title: 'Get Personalized Recommendations',
      desc: 'Based on your performance, get suggestions to improve in weak areas and excel in strong ones.',
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
    },
  ];

  return (
    <div className="py-12">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold">How It Works</h1>
          <p className="mt-4 text-lg text-ink-light">
            Start learning in 5 simple steps
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-0.5 bg-slate-200 dark:bg-slate-700" />
              )}

              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.color}`}>
                <step.icon className="h-6 w-6" />
              </div>

              <div className="card flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-primary-600">Step {index + 1}</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/register">
            <Button size="lg">
              Get Started Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;