import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-md text-foreground bg-primary hover:bg-secondary transition-all',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
