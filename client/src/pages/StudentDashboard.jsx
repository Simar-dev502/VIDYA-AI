import { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { dashboardAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dashboardAPI.student();
        setData(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard');
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout title="Student Dashboard">
      {error && <div className="alert alert-error">{error}</div>}

      <div className="dashboard-grid">
        <div className="card">
          <h3>Profile</h3>
          <div className="profile-info">
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Class:</strong> {user?.class}
            </p>
            <p>
              <strong>Preferred Language:</strong> {user?.preferredLanguage}
            </p>
          </div>
        </div>

        <div className="card">
          <h3>Learning Progress</h3>
          <div className="progress-section">
            <div className="progress-item">
              <span>Mathematics</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '45%' }}></div>
              </div>
              <span>45%</span>
            </div>
            <div className="progress-item">
              <span>Science</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '30%' }}></div>
              </div>
              <span>30%</span>
            </div>
            <div className="progress-item">
              <span>English</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }}></div>
              </div>
              <span>60%</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <button className="btn btn-primary">Start Learning</button>
            <button className="btn btn-outline">Take a Quiz</button>
            <button className="btn btn-outline">View Assignments</button>
          </div>
        </div>
      </div>

      {data && (
        <div className="card">
          <h3>Server Message</h3>
          <p>{data.message}</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default StudentDashboard;