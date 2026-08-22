import { Loader2 } from 'lucide-react';

const Loader = ({ text = 'Loading...', fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
        <p className="text-sm text-ink-light">{text}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <Loader2 className="h-5 w-5 animate-spin text-primary-600" />
      <span className="text-sm text-ink-light">{text}</span>
    </div>
  );
};

export default Loader;