import { useState } from 'react';
import { Download, Trash2, HardDrive, Wifi, WifiOff, CheckCircle2 } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import OfflineIndicator from '../../components/common/OfflineIndicator';
import { downloads } from '../../data/mockData';

const Downloads = () => {
  const [items, setItems] = useState(downloads);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleDownload = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, downloaded: true } : item)));
  };

  const downloadedItems = items.filter((item) => item.downloaded);
  const availableItems = items.filter((item) => !item.downloaded);
  const totalSize = downloadedItems.reduce((acc, item) => acc + parseInt(item.size), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Downloads</h1>
          <p className="mt-1 text-ink-light">Access your lessons offline</p>
        </div>
        <OfflineIndicator />
      </div>

      {/* Storage */}
      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <HardDrive className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-semibold">Storage Used</h2>
              <p className="text-sm text-ink-light">{totalSize} MB / 1 GB</p>
            </div>
          </div>
          <div className="w-32">
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${Math.min(100, (totalSize / 1024) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Downloaded Items */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Available Offline</h2>
        <div className="space-y-3">
          {downloadedItems.map((item) => (
            <Card key={item.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.chapter}</h3>
                  <p className="text-sm text-ink-light">{item.course} • {item.size}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Open Offline
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleRemove(item.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Available to Download */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Available to Download</h2>
        <div className="space-y-3">
          {availableItems.map((item) => (
            <Card key={item.id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-ink-light dark:bg-slate-700">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.chapter}</h3>
                  <p className="text-sm text-ink-light">{item.course} • {item.size}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleDownload(item.id)}>
                <Download className="h-4 w-4" />
                Download
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {!isOnline && (
        <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
          You appear to be offline. Downloaded lessons are still available.
        </div>
      )}
    </div>
  );
};

export default Downloads;