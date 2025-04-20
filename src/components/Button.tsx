import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href }) => {
  const base = 'px-6 py-2 rounded-md font-medium border transition-all duration-300';
  const styles = variant === 'primary'
    ? `${base} bg-blue-600 text-white hover:bg-blue-700`
    : `${base} border-blue-600 text-blue-600 hover:bg-blue-50`;

  return href ? (
    <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <button className={styles}>{children}</button>
  );
};

export default Button;
