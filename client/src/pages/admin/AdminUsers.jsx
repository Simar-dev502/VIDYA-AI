import { useState } from 'react';
import { Search, User, GraduationCap, Trash2, Shield } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { adminStats } from '../../data/mockData';

const AdminUsers = () => {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  const users = [
    ...adminStats.recentUsers,
    { name: 'Amit Patel', role: 'student', date: '3 days ago' },
    { name: 'Mrs. Gupta', role: 'teacher', date: '4 days ago' },
    { name: 'Vikram Singh', role: 'student', date: '5 days ago' },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = !roleFilter || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">User Management</h1>
        <p className="mt-1 text-ink-light">Manage all platform users</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-lighter" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="input pl-10"
            aria-label="Search users"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="input w-auto"
          aria-label="Filter by role"
        >
          <option value="">All Roles</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredUsers.map((user) => (
          <Card key={user.name} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-xs text-ink-light">Joined {user.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={user.role === 'teacher' ? 'secondary' : user.role === 'admin' ? 'error' : 'primary'}>
                {user.role}
              </Badge>
              <Button variant="ghost" size="sm">
                <Shield className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;