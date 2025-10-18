"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "secondary" | "muted";
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", variant = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    };

    const variantClasses = {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      muted: "text-muted-foreground",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full border-2 border-current border-t-transparent",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Spinner.displayName = "Spinner";

interface LoadingOverlayProps {
  isLoading: boolean;
  children?: React.ReactNode;
  message?: string;
  spinnerSize?: "sm" | "md" | "lg" | "xl";
  spinnerVariant?: "default" | "primary" | "secondary" | "muted";
  className?: string;
  backdropClassName?: string;
}

const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  (
    {
      isLoading,
      children,
      message = "Loading...",
      spinnerSize = "lg",
      spinnerVariant = "primary",
      className,
      backdropClassName,
      ...props
    },
    ref
  ) => {
    if (!isLoading) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center",
          "bg-background/80 backdrop-blur-sm",
          backdropClassName
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Loading"
        {...props}
      >
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-4",
            "rounded-lg bg-card p-8 shadow-lg",
            "border border-border",
            className
          )}
        >
          <Spinner size={spinnerSize} variant={spinnerVariant} />
          {message && (
            <p className="text-sm font-medium text-card-foreground">
              {message}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }
);
LoadingOverlay.displayName = "LoadingOverlay";

// Full page loading overlay component
interface FullPageLoaderProps {
  isLoading: boolean;
  message?: string;
  spinnerSize?: "sm" | "md" | "lg" | "xl";
  spinnerVariant?: "default" | "primary" | "secondary" | "muted";
  className?: string;
}

const FullPageLoader = React.forwardRef<HTMLDivElement, FullPageLoaderProps>(
  (
    {
      isLoading,
      message = "Loading...",
      spinnerSize = "xl",
      spinnerVariant = "primary",
      className,
      ...props
    },
    ref
  ) => {
    if (!isLoading) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center",
          "bg-background/95 backdrop-blur-md",
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Loading"
        {...props}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <Spinner size={spinnerSize} variant={spinnerVariant} />
          {message && (
            <p className="text-lg font-medium text-foreground animate-pulse">
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }
);
FullPageLoader.displayName = "FullPageLoader";

export { Spinner, LoadingOverlay, FullPageLoader };
