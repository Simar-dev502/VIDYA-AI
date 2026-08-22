import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import BottomNavigation from '../components/layout/BottomNavigation';
import OfflineIndicator from '../components/common/OfflineIndicator';

const StudentLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="student" />
      <div className="flex-1 pb-16 lg:pb-0">
        <div className="flex items-center justify-end border-b bg-white px-4 py-2 lg:hidden dark:bg-slate-900 dark:border-slate-700">
          <OfflineIndicator />
        </div>
        <main className="container-app py-6">
          <Outlet />
        </main>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default StudentLayout;