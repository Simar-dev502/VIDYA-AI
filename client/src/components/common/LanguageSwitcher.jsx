import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = ({ compact = false }) => {
  const { language, languages, changeLanguage } = useLanguage();

  if (compact) {
    return (
      <button
        onClick={() => changeLanguage(language === 'en' ? 'hi' : 'en')}
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-ink-light hover:bg-slate-100 hover:text-ink dark:hover:bg-slate-700"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        {language === 'en' ? 'हिंदी' : 'English'}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-ink-light" />
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.native}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;