const Badge = ({ children, variant = 'neutral', className = '' }) => {
  const variants = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    neutral: 'badge-neutral',
  };

  return <span className={`${variants[variant]} ${className}`}>{children}</span>;
};

export default Badge;