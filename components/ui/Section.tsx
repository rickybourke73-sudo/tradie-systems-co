import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'default' | 'lg';
  bleed?: boolean;
  /** Use `<section>` (default) or another semantic landmark. */
  as?: 'section' | 'div';
}

export function Section({
  id,
  className,
  children,
  size = 'default',
  bleed = false,
  as: Tag = 'section'
}: SectionProps) {
  const sizes: Record<NonNullable<SectionProps['size']>, string> = {
    sm: 'py-14 md:py-20',
    md: 'py-16 md:py-24',
    default: 'py-section',
    lg: 'py-20 md:py-28 lg:py-32'
  };

  return (
    <Tag id={id} className={cn('relative', sizes[size], className)}>
      {bleed ? children : <div className="container">{children}</div>}
    </Tag>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  /** Optional id applied to the heading element so the parent <section> can use `aria-labelledby`. */
  headingId?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  as = 'h2',
  headingId,
  className
}: SectionHeaderProps) {
  const Heading = as;
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <Heading
        id={headingId}
        className={cn(
          as === 'h1' ? 'text-display-lg' : 'text-display-md',
          'mb-5 text-balance text-bone-50'
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="text-pretty text-lg leading-relaxed text-bone-300 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
