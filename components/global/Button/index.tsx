import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    <button
      className={`bg-secondary flex items-center hover:border-gray-800 justify-center w-[85px] h-[25px] text-white rounded focus:outline-none ${className}`}
    >
      <p className="text-[9.12px] font-semibold pr-1">{label}</p>
      <img src="/images/Arrow.png" width={10} alt="" />
    </button>
  );
};

export default Button;