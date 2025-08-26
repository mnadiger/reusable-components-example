import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
const Button = ({ children, onClick, type = 'button', className }: ButtonProps) => {
    //or 
// const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className }) => {

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
