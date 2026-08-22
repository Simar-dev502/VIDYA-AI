import { useState } from 'react';
import { Globe, Accessibility, Moon, Bell, Type, Volume2, Minimize2 } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const Settings = () => {
  const { language, languages, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [fontSize, setFontSize] = useState('medium');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const toggleSwitch = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Settings</h1>
        <p className="mt-1 text-ink-light">Customize your learning experience</p>
      </div>

      {/* Language */}
      <Card>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <Globe className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Language</h2>
        </div>
        <div className="mt-4">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="input"
            aria-label="Select language"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.native}
              </option>
            ))}
          </select>
        </div>
      </Card>

      {/* Accessibility */}
      <Card>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <Accessibility className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Accessibility</h2>
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <label className="label">Font Size</label>
            <div className="flex gap-2">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`flex-1 rounded-lg border-2 p-3 text-sm font-medium capitalize transition-colors ${
                    fontSize === size
                      ? 'border-primary-600 bg-primary-50 text-primary-700 dark:bg-primary-900/20'
                      : 'border-slate-200 hover:border-primary-300 dark:border-slate-600'
                  }`}
                >
                  {size === 'small' ? 'A' : size === 'medium' ? 'A' : 'A'}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Minimize2 className="h-4 w-4 text-ink-light" />
              <span className="text-sm font-medium">Reduced Motion</span>
            </div>
            <button
              onClick={() => toggleSwitch(setReducedMotion)}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                reducedMotion ? 'bg-primary-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
              aria-label="Toggle reduced motion"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  reducedMotion ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Volume2 className="h-4 w-4 text-ink-light" />
              <span className="text-sm font-medium">Text-to-Speech</span>
            </div>
            <button
              onClick={() => toggleSwitch(setTextToSpeech)}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                textToSpeech ? 'bg-primary-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
              aria-label="Toggle text to speech"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  textToSpeech ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </Card>

      {/* Theme */}
      <Card>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
            <Moon className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Theme</h2>
        </div>
        <div className="mt-4">
          <Button variant={theme === 'light' ? 'primary' : 'outline'} className="w-full" onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
            <Bell className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Notifications</h2>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium">Learning Reminders</span>
          <button
            onClick={() => toggleSwitch(setNotifications)}
            className={`relative h-6 w-11 rounded-full transition-colors ${
              notifications ? 'bg-primary-600' : 'bg-slate-300 dark:bg-slate-600'
            }`}
            aria-label="Toggle notifications"
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                notifications ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;