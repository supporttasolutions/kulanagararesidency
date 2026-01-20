import Link from "next/link";
import { forwardRef } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      href,
      variant = "secondary",
      className,
      children,
      target,
      rel,
      onClick,
    },
    ref,
  ) {
    const base =
      "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm tracking-wide transition will-change-transform select-none";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-accent text-black hover:brightness-105 active:scale-[0.99] shadow-[0_18px_55px_color-mix(in_oklab,var(--color-accent)_20%,transparent)]",
      secondary:
        "bg-surface text-foreground border border-border hover:border-color-border/70 hover:bg-[color-mix(in_oklab,var(--color-surface)_92%,black)] active:scale-[0.99]",
      ghost:
        "text-foreground/90 hover:text-foreground hover:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)] active:scale-[0.99]",
    };

    if (href) {
      return (
        <Link
          ref={ref}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={cx(base, variants[variant], className)}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        onClick={onClick}
        className={cx(base, variants[variant], className)}
      >
        {children}
      </a>
    );
  },
);

