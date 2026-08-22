import { Users, GraduationCap, BookOpen, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { adminStats } from '../../data/mockData';

const AdminDashboard = () => {
  const stats = [
    { icon: Users, label: 'Total Students', value: adminStats.totalStudents, color: 'bg-blue-100 text-blue-600' },
    { icon: GraduationCap, label: 'Total Teachers', value: adminStats.totalTeachers, color: 'bg-emerald-100 text-emerald-600' },
    { icon: BookOpen, label: 'Courses', value: adminStats.courses, color: 'bg-purple-100 text-purple-600' },
    { icon: Activity, label: 'Active Users', value: adminStats.activeUsers, color: 'bg-amber-100 text-amber-600' },
  ];

  const managementLinks = [
    { to: '/admin/users', label: 'Users', desc: 'Manage all users' },
    { to: '/admin/courses', label: 'Courses', desc: 'Manage courses' },
    { to: '/admin/subjects', label: 'Subjects', desc: 'Manage subjects' },
    { to: '/admin/languages', label: 'Languages', desc: 'Manage languages' },
    { to: '/admin/reports', label: 'Reports', desc: 'View reports' },
    { to: '/admin/settings', label: 'Settings', desc: 'System settings' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Admin Dashboard</h1>
        <p className="mt-1 text-ink-light">Platform overview and management</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 text-2xl font-bold">{stat.value.toLocaleString()}</div>
            <p className="text-xs text-ink-light">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Management */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Management</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {managementLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <Card className="flex items-center justify-between transition-shadow hover:shadow-md">
                <div>
                  <h3 className="font-semibold">{link.label}</h3>
                  <p className="text-sm text-ink-light">{link.desc}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary-600" />
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Users */}
      <Card>
        <h2 className="text-lg font-semibold">Recent Users</h2>
        <div className="mt-4 space-y-3">
          {adminStats.recentUsers.map((user) => (
            <div key={user.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-ink-light">{user.date}</p>
                </div>
              </div>
              <Badge variant={user.role === 'teacher' ? 'secondary' : 'primary'}>
                {user.role}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;