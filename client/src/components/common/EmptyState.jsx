import { Inbox } from 'lucide-react';

const EmptyState = ({ title = 'Nothing here yet', description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
      <div className="rounded-full bg-slate-100 p-4 dark:bg-slate-700">
        <Inbox className="h-8 w-8 text-ink-lighter" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="max-w-sm text-sm text-ink-light">{description}</p>}
      {action}
    </div>
  );
};

export default EmptyState;