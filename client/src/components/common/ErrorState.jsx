import { AlertTriangle } from 'lucide-react';
import Button from './Button';

const ErrorState = ({ title = 'Something went wrong', description = 'Please try again.', onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
      <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/30">
        <AlertTriangle className="h-8 w-8 text-red-500" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="max-w-sm text-sm text-ink-light">{description}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;