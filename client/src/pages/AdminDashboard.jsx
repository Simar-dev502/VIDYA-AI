import { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { dashboardAPI } from '../services/api';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dashboardAPI.admin();
        setData(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard');
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout title="Admin Dashboard">
      {error && <div className="alert alert-error">{error}</div>}

      <div className="dashboard-grid">
        <div className="card">
          <h3>System Overview</h3>
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-number">1,245</span>
              <span className="stat-label">Total Students</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">85</span>
              <span className="stat-label">Teachers</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">12</span>
              <span className="stat-label">Schools</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>User Management</h3>
          <p>Manage users, roles, and permissions across the platform.</p>
          <div className="quick-actions">
            <button className="btn btn-primary">Manage Users</button>
            <button className="btn btn-outline">Assign Roles</button>
            <button className="btn btn-outline">System Settings</button>
          </div>
        </div>

        <div className="card">
          <h3>Platform Analytics</h3>
          <ul className="activity-list">
            <li>Active users this week: 342</li>
            <li>New registrations: 56</li>
            <li>Average session time: 45 min</li>
            <li>Content completion rate: 72%</li>
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

export default AdminDashboard;