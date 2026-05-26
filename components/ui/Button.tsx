import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'subtle';

interface ButtonProps {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  arrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  subtle: 'btn bg-ink-800 text-bone-100 hover:bg-ink-700'
};

export function Button({
  href,
  variant = 'primary',
  className,
  children,
  external,
  arrow = true,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel
}: ButtonProps) {
  const classes = cn(variants[variant], 'group', className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}
