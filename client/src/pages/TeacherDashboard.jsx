import { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { dashboardAPI } from '../services/api';

const TeacherDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dashboardAPI.teacher();
        setData(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard');
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout title="Teacher Dashboard">
      {error && <div className="alert alert-error">{error}</div>}

      <div className="dashboard-grid">
        <div className="card">
          <h3>Student Management</h3>
          <p>Manage your students, track their progress, and assign work.</p>
          <div className="quick-actions">
            <button className="btn btn-primary">View Students</button>
            <button className="btn btn-outline">Create Assignment</button>
            <button className="btn btn-outline">Grade Work</button>
          </div>
        </div>

        <div className="card">
          <h3>Class Overview</h3>
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-number">28</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">5</span>
              <span className="stat-label">Classes</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">12</span>
              <span className="stat-label">Assignments</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li>Rahul Kumar submitted Mathematics homework</li>
            <li>Priya Sharma completed Science quiz</li>
            <li>New student enrolled in Class 8</li>
          </ul>
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

export default TeacherDashboard;