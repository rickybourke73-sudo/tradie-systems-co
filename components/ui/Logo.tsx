import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" aria-label="Tradie Systems Co — Home" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span aria-hidden="true" className="relative inline-block">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="26" height="26" rx="6" stroke="currentColor" strokeOpacity="0.25" />
          <path
            d="M7 14h6m2-4l4 4-4 4"
            stroke="#F39200"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="13.5" cy="14" r="1.5" fill="#F39200" />
        </svg>
      </span>
      <span className="font-display font-semibold tracking-tight text-bone-50 text-lg">
        Tradie Systems<span className="text-signal-500">.</span>
      </span>
    </Link>
  );
}
