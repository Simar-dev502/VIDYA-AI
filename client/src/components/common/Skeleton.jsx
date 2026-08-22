const Skeleton = ({ className = '', variant = 'text' }) => {
  const variants = {
    text: 'h-4 w-full',
    title: 'h-6 w-3/4',
    card: 'h-40 w-full',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-24',
  };

  return <div className={`skeleton ${variants[variant]} ${className}`} aria-hidden="true" />;
};

export default Skeleton;