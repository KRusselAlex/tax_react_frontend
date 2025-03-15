import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger"; // Customizable variants
  size?: "small" | "medium" | "large"; // Customizable sizes
  disabled?: boolean; // Handle disabled state
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary", // Default variant
  size = "medium", // Default size
  disabled = false, // Default to not disabled
}) => {
  // Base button styles
  const baseStyles = "flex items-center justify-center font-semibold transition-all duration-300 ";

  // Conditional styles based on variant
  let variantStyles = "";
  if (variant === "primary") {
    variantStyles = "bg-buttonColor text-white hover:bg-buttonHover ";
  } else if (variant === "secondary") {
    variantStyles = "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700";
  } else if (variant === "danger") {
    variantStyles = "bg-red-500 text-white hover:bg-red-600 active:bg-red-700";
  }

  // Conditional styles based on size
  let sizeStyles = "";
  if (size === "small") {
    sizeStyles = "px-4 py-2 text-sm";
  } else if (size === "medium") {
    sizeStyles = "px-6 py-3 text-base";
  } else if (size === "large") {
    sizeStyles = "px-8 py-4 text-lg";
  }

  // Disabled state styles
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled} // Disable button if needed
    >
      {children}
    </button>
  );
};

export default Button;
