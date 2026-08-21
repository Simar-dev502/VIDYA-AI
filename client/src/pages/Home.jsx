import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-page">
      <nav className="home-nav">
        <div className="nav-brand">
          <h2>VIDYA-AI</h2>
        </div>
        <div className="nav-auth">
          {user ? (
            <Link to="/dashboard" className="btn btn-primary">
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <main className="home-main">
        <section className="hero-section">
          <h1>AI-Powered Learning for Every Student</h1>
          <p>
            VIDYA-AI is a multilingual, low-bandwidth digital learning platform
            designed for rural school students. Learn in your preferred language,
            at your own pace.
          </p>
          <div className="hero-actions">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary btn-lg">
                Continue Learning
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary btn-lg">
                  Get Started Free
                </Link>
                <Link to="/login" className="btn btn-outline btn-lg">
                  Login
                </Link>
              </>
            )}
          </div>
        </section>

        <section className="features-section">
          <h2>Why VIDYA-AI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🌐 Multilingual</h3>
              <p>Learn in Hindi, English, Punjabi, Tamil, and more languages.</p>
            </div>
            <div className="feature-card">
              <h3>📡 Low Bandwidth</h3>
              <p>Optimized for areas with limited internet connectivity.</p>
            </div>
            <div className="feature-card">
              <h3>📱 Offline Capable</h3>
              <p>Continue learning even without an internet connection.</p>
            </div>
            <div className="feature-card">
              <h3>🤖 AI Powered</h3>
              <p>Personalized learning paths powered by artificial intelligence.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;