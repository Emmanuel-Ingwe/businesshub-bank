import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({  label, className }) => {
  return (
    <button
      className={`bg-gradient-general hover:bg-none w-[172px] h-[53px] text-white rounded focus:outline-none ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;