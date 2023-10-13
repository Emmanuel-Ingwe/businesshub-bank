import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({  label, className }) => {
  return (
    <button
      className={`bg-secondary hover:border-gray-800 w-[85px] h-[25px] text-white rounded focus:outline-none ${className}`}
    >
      {label}
      <img src="/images/Arrow.png" alt="" />
    </button>
  );
};

export default Button;