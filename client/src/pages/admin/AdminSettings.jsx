import { useState } from 'react';
import { Settings as SettingsIcon, Globe, Shield, Bell, Database } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    platformName: 'VidyaAI',
    supportEmail: 'support@vidyaai.com',
    maxUploadSize: '50',
    maintenanceMode: false,
    allowRegistration: true,
  });

  const toggleSwitch = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">System Settings</h1>
        <p className="mt-1 text-ink-light">Configure platform settings</p>
      </div>

      <Card>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <SettingsIcon className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">General Settings</h2>
        </div>
        <div className="mt-4 space-y-4">
          <Input
            label="Platform Name"
            value={settings.platformName}
            onChange={(e) => setSettings({ ...settings, platformName: e.target.value })}
          />
          <Input
            label="Support Email"
            type="email"
            value={settings.supportEmail}
            onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
          />
          <Input
            label="Max Upload Size (MB)"
            type="number"
            value={settings.maxUploadSize}
            onChange={(e) => setSettings({ ...settings, maxUploadSize: e.target.value })}
          />
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <Shield className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Platform Controls</h2>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Maintenance Mode</p>
              <p className="text-xs text-ink-light">Temporarily disable the platform</p>
            </div>
            <button
              onClick={() => toggleSwitch('maintenanceMode')}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                settings.maintenanceMode ? 'bg-red-500' : 'bg-slate-300 dark:bg-slate-600'
              }`}
              aria-label="Toggle maintenance mode"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  settings.maintenanceMode ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Allow Registration</p>
              <p className="text-xs text-ink-light">Allow new users to register</p>
            </div>
            <button
              onClick={() => toggleSwitch('allowRegistration')}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                settings.allowRegistration ? 'bg-primary-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
              aria-label="Toggle registration"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  settings.allowRegistration ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </Card>

      <Button className="w-full">Save Settings</Button>
    </div>
  );
};

export default AdminSettings;