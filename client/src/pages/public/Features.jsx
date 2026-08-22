import { CloudOff, Languages, Bot, Mic, Sparkles, Wifi, Smartphone, Users, BookOpen, ClipboardList, TrendingUp, Download } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CloudOff,
      title: 'Offline Learning',
      desc: 'Download lessons, quizzes, and resources to access them without internet. Perfect for areas with unreliable connectivity.',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      icon: Languages,
      title: 'Multilingual Support',
      desc: 'Learn in Hindi, English, and more regional languages. Switch languages anytime to understand concepts better.',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    },
    {
      icon: Bot,
      title: 'AI Tutor',
      desc: 'Get instant answers to your doubts. The AI tutor explains concepts in simple language with examples.',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
      icon: Mic,
      title: 'Voice Learning',
      desc: 'Ask questions using your voice and listen to explanations. Perfect for students who prefer audio learning.',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    },
    {
      icon: Sparkles,
      title: 'Personalized Learning',
      desc: 'Get course recommendations based on your performance. Focus on weak areas with targeted practice.',
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
    },
    {
      icon: Wifi,
      title: 'Low Bandwidth Optimized',
      desc: 'All content is optimized for slow internet connections. Images and videos are compressed for fast loading.',
      color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      desc: 'Designed for low-end Android devices. Works smoothly on small screens with minimal data usage.',
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
    },
    {
      icon: Users,
      title: 'Simple Interface',
      desc: 'Easy to use for students and teachers with limited digital literacy. Clear labels and obvious actions.',
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
    },
    {
      icon: BookOpen,
      title: 'Structured Courses',
      desc: 'Courses organized by class and subject. Clear learning paths with chapters and lessons.',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    },
    {
      icon: ClipboardList,
      title: 'Interactive Quizzes',
      desc: 'Test your knowledge with quizzes. Get instant feedback and track your improvement.',
      color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      desc: 'Monitor your learning progress with detailed analytics. See your strengths and weak areas.',
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      icon: Download,
      title: 'Download for Later',
      desc: 'Save lessons and resources for offline access. Learn anytime, anywhere.',
      color: 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
    },
  ];

  return (
    <div className="py-12">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold">Features</h1>
          <p className="mt-4 text-lg text-ink-light">
            Everything you need for quality learning, designed for rural students.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-ink-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;