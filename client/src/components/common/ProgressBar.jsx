const ProgressBar = ({ value = 0, color = 'bg-primary-600', className = '', showLabel = false }) => {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full ${className}`}>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-right text-xs font-medium text-ink-light">
          {clamped}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;