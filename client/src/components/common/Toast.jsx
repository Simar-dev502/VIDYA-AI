import { CheckCircle2, XCircle, Info, X } from 'lucide-react';

const Toast = ({ type = 'success', message, onClose }) => {
  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg bg-white p-4 shadow-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700 animate-slide-in">
      {icons[type]}
      <p className="text-sm font-medium">{message}</p>
      <button onClick={onClose} className="text-ink-lighter hover:text-ink" aria-label="Close notification">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Toast;