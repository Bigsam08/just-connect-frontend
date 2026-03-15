/**
 * @description This is a reuseable button component for our web page
 */

import clsx from "clsx";

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center gap-4 cursor-pointer rounded-lg transition duration-200";

  const variants = {
    primary: "bg-brand text-brand-white hover:bg-brand-hover",
    outline:
      "border border-gray-400 text-white hover:bg-gray-100 hover:text-orange-500",
    ghost: "text-gray-900 hover:bg-brand-white-hover",
    danger: "bg-red-600 text-brand-white hover:bg-red-700",
    success: "bg-green-600 text-brand-white hover:bg-green-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type="button"
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
