import { PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface CardProps extends PropsWithChildren {
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx('p-6 bg-secondary rounded-lg shadow-lg', className)}>
      {children}
    </div>
  );
};

export default Card;
