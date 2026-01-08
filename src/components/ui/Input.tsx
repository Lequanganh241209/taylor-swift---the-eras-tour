import { clsx } from 'clsx';
import { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ type = 'text', value, placeholder, onChange, className }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={clsx(
        'w-full px-3 py-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent',
        className
      )}
    />
  );
};

export default Input;
