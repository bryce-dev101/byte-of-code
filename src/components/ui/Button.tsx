import React, { forwardRef } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "ghost" | "outline";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      onClick,
      href,
      variant = "solid",
      disabled = false,
      className = "",
      ariaLabel,
    },
    ref
  ) => {
    const base =
      "inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold transition duration-200 group active:scale-95 focus:outline-none";
    const styles = {
      solid: "bg-yellow-400 text-black hover:brightness-110",
      ghost: "bg-transparent text-inherit hover:text-[#FF6188]",
      outline:
        "border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
    };
    const finalClassName = `${base} ${styles[variant] ?? styles.solid} ${
      disabled ? "opacity-50 pointer-events-none" : ""
    } ${className}`;

    return href ? (
      <a
        href={href}
        className={finalClassName}
        download
        ref={ref as React.Ref<HTMLAnchorElement>}
        aria-label={ariaLabel ?? undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <button
        onClick={onClick}
        className={finalClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        aria-label={ariaLabel ?? undefined}
      >
        {children}
      </button>
    );
  }
);
