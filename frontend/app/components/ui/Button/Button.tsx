import React, { forwardRef } from "react";
// Import Styles From Button.module.css
import styles from "./Button.module.css";
// Import cva
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useInteractiveFill } from "./useInteractiveFill";
import mergeRefs from "@/lib/mergeRefs";

const buttonVariants = cva(
  [
    // Default Styling
    "inline-flex items-center justify-center",
    "font-medium",
    "tracking-wide",
    "whitespace-nowrap",
    "hover:cursor-pointer",
    "relative overflow-hidden",
    "group",
    // Transitions
    "transition-colors",
    "transition-[box-shadow]",
    "transition-shadow",
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
          "border border-border bg-surface text-foreground hover:bg-surface-hover focus:ring-primary/30",
        ghost:
          "text-foreground-secondary hover:bg-surface-hover hover:text-foreground focus:ring-primary/20",
        outline: "shadow-[inset_0_0_0_2px_rgb(var(--primary))] transition-shadow bg-transparent text-primary",
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
  interactiveFill?: boolean;
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
      interactiveFill = false,
      ...props
    },
    ref,
  ) => {
    const {
      fillRef,
      buttonRef,
      contentRef,
      handlePointerEnter,
      handlePointerMove,
      handlePointerLeave,
    } = useInteractiveFill();
    const mergedRefs = mergeRefs(ref, buttonRef);

    
    return (
      <button
        type={type}
        className={cn(
          buttonVariants({ variant, size }),
          className,
          icon && "gap-1.5",
          !interactiveFill && variant === 'outline' ? 'hover:bg-primary transition-colors duration-300 hover:text-white!' : null,
        )}
        {...props}
        ref={mergedRefs}
        onPointerEnter={interactiveFill ? handlePointerEnter : undefined}
        onPointerMove={interactiveFill ? handlePointerMove : undefined}
        onPointerLeave={interactiveFill ? handlePointerLeave : undefined}
      >
        {interactiveFill && variant === 'outline' ?  (
          <span
            ref={fillRef}
            className="absolute pointer-events-none left-0 top-0 size-4 scale-0 rounded-full bg-primary "
          />
        ) : null}
        <span ref={interactiveFill ? contentRef : undefined} className="relative z-10 flex items-center gap-1.5">
          {icon && iconPosition === "left" && icon}

          {children}

          {icon && iconPosition === "right" && icon}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
export { Button, buttonVariants };
