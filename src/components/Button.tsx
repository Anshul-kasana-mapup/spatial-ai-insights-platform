
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", size = "md", icon, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          {
            "bg-mapup-accent hover:bg-mapup-accent/90 text-black": variant === "primary",
            "bg-mapup-blue hover:bg-mapup-blue/90 text-white": variant === "secondary",
            "border border-mapup-blue text-mapup-blue hover:bg-mapup-blue/10": variant === "outline",
            "px-3 py-1.5 text-sm": size === "sm",
            "px-4 py-2": size === "md",
            "px-6 py-2.5 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
