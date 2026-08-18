import React, { forwardRef } from "react";
// Import Styles From Button.module.css
import styles from "./Button.module.css";
// Import cva
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    // Default Styling
    "inline-flex items-center justify-center",
    "font-medium",
    "tracking-wide",
    "whitespace-nowrap",
    "hover:cursor-pointer",
    // Transitions
    "transition-colors",
    "transition-[box-shadow]",
    "duration-200",
    // Focus
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary/50",
    // Active
    "focus:ring-3",
    "focus: ring-primary/50",
    // Disabled
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    // Icons
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg]:size-4",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border border-border bg-surface text-foreground hover:bg-surface-hover",
        ghost:
          "text-foreground-secondary hover:bg-surface-hover hover:text-foreground",
      },
      size: {
        sm: ["h-9 rounded-md px-3 text-sm", "[&_svg]:size-3.5"],
        md: ["h-10 rounded-lg px-4 text-sm", "[&_svg]:size-4"],
        lg: ["h-12 rounded-xl px-5 text-base", "[&_svg]:size-5"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

// Button Props
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  iconPosition?: "left" | "right";
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      icon,
      iconPosition = "right",
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size }), className, icon && 'gap-1.5')}
        {...props}
        ref={ref}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </button>
    );
  },
);

Button.displayName = "Button";
export { Button, buttonVariants };
