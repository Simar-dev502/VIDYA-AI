import { Link } from 'react-router-dom';
import { BookOpen, Wifi, Languages, Bot, Mic, Sparkles, ArrowRight, Smartphone, CloudOff, Globe, Users } from 'lucide-react';
import Button from '../../components/common/Button';

const Home = () => {
  const features = [
    { icon: CloudOff, title: 'Learn Offline', desc: 'Download lessons and keep learning even without internet.' },
    { icon: Languages, title: 'Learn in Your Language', desc: 'Content available in Hindi, English, and more regional languages.' },
    { icon: Bot, title: 'Ask AI Tutor', desc: 'Get instant answers to your doubts in simple language.' },
    { icon: Mic, title: 'Learn with Voice', desc: 'Ask questions and listen to explanations using voice.' },
    { icon: Sparkles, title: 'Personalized Learning', desc: 'Get recommendations based on your progress and performance.' },
  ];

  const steps = [
    { num: '1', title: 'Choose Class', desc: 'Select your class from 6 to 10' },
    { num: '2', title: 'Learn', desc: 'Study lessons in your language' },
    { num: '3', title: 'Ask Doubts', desc: 'Get help from AI tutor anytime' },
    { num: '4', title: 'Take Quiz', desc: 'Test what you have learned' },
    { num: '5', title: 'Get Recommendations', desc: 'Improve with personalized suggestions' },
  ];

  const ruralFeatures = [
    { icon: Wifi, title: 'Low Bandwidth', desc: 'Optimized for slow internet connections' },
    { icon: CloudOff, title: 'Offline Learning', desc: 'Access content without internet' },
    { icon: Smartphone, title: 'Mobile Friendly', desc: 'Works on low-end Android devices' },
    { icon: Users, title: 'Simple Interface', desc: 'Easy to use for everyone' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24 dark:from-slate-900 dark:to-slate-900">
        <div className="container-app">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl dark:text-white">
              Quality Learning, <span className="text-primary-600">Wherever You Are.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-light">
              An AI-powered digital learning platform designed for rural school students.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/register">
                <Button size="lg">Start Learning</Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="lg">Explore Courses</Button>
              </Link>
            </div>
          </div>

          {/* Hero Quote */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 text-3xl dark:bg-primary-900/30">
                  💡
                </div>
                <div>
                  <h3 className="font-semibold">"Shiksha hi shakti hai"</h3>
                  <p className="text-sm text-ink-light">Education is the most powerful weapon</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-700">
                  <div className="text-2xl">📚</div>
                  <p className="mt-1 text-xs font-medium">Learn</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-700">
                  <div className="text-2xl">🌍</div>
                  <p className="mt-1 text-xs font-medium">Grow</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-700">
                  <div className="text-2xl">🚀</div>
                  <p className="mt-1 text-xs font-medium">Succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why VidyaAI Section */}
      <section className="py-16">
        <div className="container-app">
          <h2 className="text-center text-3xl font-bold">Why VidyaAI?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
        <div className="container-app">
          <h2 className="text-center text-3xl font-bold">How It Works</h2>
          <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center gap-4">
                <div className="card w-40 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-bold">
                    {step.num}
                  </div>
                  <h3 className="mt-3 font-semibold">{step.title}</h3>
                  <p className="mt-1 text-xs text-ink-light">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-ink-lighter md:block" />
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
              <h2 className="text-3xl font-bold">Built for real-world connectivity challenges</h2>
              <p className="mt-4 text-ink-light">
                VidyaAI is designed for students in rural areas where internet can be slow or unavailable.
                We optimize everything for low bandwidth and offline use.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {ruralFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400">
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
            <div className="card">
              <h3 className="text-lg font-semibold">Connectivity Status</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                  <span className="text-sm font-medium">Online Mode</span>
                  <span className="badge-success">🟢 Available</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                  <span className="text-sm font-medium">Offline Mode</span>
                  <span className="badge-success">🟢 Available</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                  <span className="text-sm font-medium">Low Bandwidth</span>
                  <span className="badge-success">🟢 Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tutor Preview */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 dark:from-slate-900 dark:to-slate-900">
        <div className="container-app">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Your Personal AI Tutor</h2>
              <p className="mt-4 text-ink-light">
                Ask any doubt and get a simple explanation in your language.
              </p>
              <div className="mt-6">
                <Link to="/register">
                  <Button>Ask your doubt → Get a simple explanation</Button>
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary-600 px-4 py-3 text-sm text-white">
                    Photosynthesis kya hota hai?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 text-sm dark:bg-slate-700">
                    Photosynthesis ek process hai jisme plants sunlight ki help se apna food banate hain.
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-lighter">
                  <Bot className="h-4 w-4" />
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
          <h2 className="text-3xl font-bold">Learn in the language you understand best</h2>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="card px-8 py-4">
              <span className="text-2xl font-bold">English</span>
            </div>
            <span className="text-2xl text-ink-lighter">|</span>
            <div className="card px-8 py-4">
              <span className="text-2xl font-bold">हिंदी</span>
            </div>
          </div>
          <p className="mt-4 text-ink-light">More languages coming soon</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="container-app text-center">
          <h2 className="text-3xl font-bold text-white">Start your learning journey today.</h2>
          <p className="mt-2 text-primary-100">Join thousands of students learning with VidyaAI</p>
          <div className="mt-6">
            <Link to="/register">
              <Button variant="accent" size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;