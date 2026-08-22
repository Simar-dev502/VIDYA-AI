const Card = ({ children, className = '', onClick, ...props }) => {
  return (
    <div
      className={`card ${onClick ? 'cursor-pointer transition-shadow hover:shadow-md' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;