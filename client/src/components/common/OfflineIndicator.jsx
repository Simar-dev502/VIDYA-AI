import { Wifi, WifiOff } from 'lucide-react';
import { useEffect, useState } from 'react';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={`flex items-center gap-1.5 text-xs font-medium ${isOnline ? 'text-emerald-600' : 'text-amber-600'}`}>
      {isOnline ? <Wifi className="h-3.5 w-3.5" /> : <WifiOff className="h-3.5 w-3.5" />}
      {isOnline ? 'Online' : 'Offline'}
    </div>
  );
};

export default OfflineIndicator;