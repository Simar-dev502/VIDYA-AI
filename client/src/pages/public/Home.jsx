import { Link } from 'react-router-dom';
import { BookOpen, Wifi, Languages, Bot, Mic, Sparkles, ArrowRight, Smartphone, CloudOff, Globe, Users, GraduationCap, HeartHandshake, Star, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button';

const Home = () => {
  const features = [
    { icon: CloudOff, title: 'Learn Offline', desc: 'Download lessons and keep learning even without internet.', color: 'from-blue-500 to-indigo-600' },
    { icon: Languages, title: 'Learn in Your Language', desc: 'Content available in Hindi, English, and more regional languages.', color: 'from-emerald-500 to-teal-600' },
    { icon: Bot, title: 'Ask AI Tutor', desc: 'Get instant answers to your doubts in simple language.', color: 'from-purple-500 to-violet-600' },
    { icon: Mic, title: 'Learn with Voice', desc: 'Ask questions and listen to explanations using voice.', color: 'from-amber-500 to-orange-600' },
    { icon: Sparkles, title: 'Personalized Learning', desc: 'Get recommendations based on your progress and performance.', color: 'from-pink-500 to-rose-600' },
  ];

  const steps = [
    { num: '1', title: 'Choose Class', desc: 'Select your class from 6 to 12', icon: '🎓' },
    { num: '2', title: 'Learn', desc: 'Study lessons in your language', icon: '📚' },
    { num: '3', title: 'Ask Doubts', desc: 'Get help from AI tutor anytime', icon: '🤖' },
    { num: '4', title: 'Take Quiz', desc: 'Test what you have learned', icon: '📝' },
    { num: '5', title: 'Get Recommendations', desc: 'Improve with personalized suggestions', icon: '💡' },
  ];

  const ruralFeatures = [
    { icon: Wifi, title: 'Low Bandwidth', desc: 'Optimized for slow internet connections' },
    { icon: CloudOff, title: 'Offline Learning', desc: 'Access content without internet' },
    { icon: Smartphone, title: 'Mobile Friendly', desc: 'Works on low-end Android devices' },
    { icon: Users, title: 'Simple Interface', desc: 'Easy to use for everyone' },
  ];

  const stats = [
    { value: '6-12', label: 'Classes Covered' },
    { value: '4+', label: 'Languages' },
    { value: '100%', label: 'Offline Ready' },
    { value: '24/7', label: 'AI Tutor' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-primary-600 to-violet-700 py-16 md:py-24 dark:from-slate-900 dark:to-slate-900">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-accent-400/10 blur-2xl" />

        <div className="container-app relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI-Powered • Multilingual • Offline-Capable
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Quality Learning, <span className="text-accent-400">Wherever You Are.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              An AI-powered digital learning platform designed for rural school students.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/register">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 p-4 text-center backdrop-blur">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-xs text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Hero Quote */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative rounded-2xl bg-white/10 p-8 backdrop-blur border border-white/20">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent-400/20 text-3xl">
                  💡
                </div>
                <div>
                  <h3 className="font-semibold text-white">"Shiksha hi shakti hai"</h3>
                  <p className="text-sm text-primary-100">Education is the most powerful weapon</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-white/10 p-3 text-center">
                  <div className="text-2xl">📚</div>
                  <p className="mt-1 text-xs font-medium text-white">Learn</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 text-center">
                  <div className="text-2xl">🌍</div>
                  <p className="mt-1 text-xs font-medium text-white">Grow</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 text-center">
                  <div className="text-2xl">🚀</div>
                  <p className="mt-1 text-xs font-medium text-white">Succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why VidyaAI Section */}
      <section className="py-16">
        <div className="container-app">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Why <span className="text-primary-600">VidyaAI</span>?</h2>
            <p className="mt-2 text-ink-light">Everything you need for quality education</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center transition-shadow hover:shadow-lg">
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-slate-50 to-indigo-50 py-16 dark:from-slate-800/50 dark:to-slate-900">
        <div className="container-app">
          <h2 className="text-center text-3xl font-bold">How It Works</h2>
          <p className="mt-2 text-center text-lg text-ink-light">Start learning in 5 simple steps</p>
          <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center gap-4">
                <div className="card w-44 text-center transition-shadow hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-violet-600 text-white font-bold shadow-md">
                    {step.num}
                  </div>
                  <div className="mt-3 text-2xl">{step.icon}</div>
                  <h3 className="mt-1 font-semibold">{step.title}</h3>
                  <p className="mt-1 text-xs text-ink-light">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-primary-400 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rural-First Section */}
      <section className="py-16">
        <div className="container-app">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Built for <span className="text-secondary-600">real-world</span> connectivity challenges</h2>
              <p className="mt-4 text-ink-light">
                VidyaAI is designed for students in rural areas where internet can be slow or unavailable.
                We optimize everything for low bandwidth and offline use.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {ruralFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-700">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary-400 to-emerald-600 text-white">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-ink-light">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold">Connectivity Status</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-3 dark:bg-emerald-900/20">
                  <span className="text-sm font-medium">Online Mode</span>
                  <span className="badge-success">🟢 Available</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-3 dark:bg-emerald-900/20">
                  <span className="text-sm font-medium">Offline Mode</span>
                  <span className="badge-success">🟢 Available</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                  <span className="text-sm font-medium">Low Bandwidth</span>
                  <span className="badge-warning">🟡 Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tutor Preview */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 dark:from-slate-900 dark:to-slate-900">
        <div className="container-app">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">
                <Bot className="h-3 w-3" />
                AI Tutor
              </div>
              <h2 className="text-3xl font-bold">Your Personal <span className="text-purple-600">AI Tutor</span></h2>
              <p className="mt-4 text-ink-light">
                Ask any doubt and get a simple explanation in your language. Available 24/7.
              </p>
              <div className="mt-6">
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700">
                    Ask your doubt → Get a simple explanation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="card transition-shadow hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-primary-500 to-indigo-600 px-4 py-3 text-sm text-white shadow-md">
                    Photosynthesis kya hota hai?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 text-sm dark:bg-slate-700">
                    Photosynthesis ek process hai jisme plants sunlight ki help se apna food banate hain.
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-lighter">
                  <Bot className="h-4 w-4 text-purple-500" />
                  AI Tutor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Section */}
      <section className="py-16">
        <div className="container-app text-center">
          <h2 className="text-3xl font-bold">Learn in the language you <span className="text-accent-500">understand best</span></h2>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="card px-8 py-4 transition-shadow hover:shadow-lg">
              <span className="text-2xl font-bold">English</span>
            </div>
            <span className="text-2xl text-ink-lighter">|</span>
            <div className="card px-8 py-4 transition-shadow hover:shadow-lg">
              <span className="text-2xl font-bold">हिंदी</span>
            </div>
          </div>
          <p className="mt-4 text-ink-light">More languages coming soon</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-indigo-600 to-violet-700 py-16">
        <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />
        <div className="container-app relative text-center">
          <h2 className="text-3xl font-bold text-white">Start your learning journey today.</h2>
          <p className="mt-2 text-primary-100">Join thousands of students learning with VidyaAI</p>
          <div className="mt-6">
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;