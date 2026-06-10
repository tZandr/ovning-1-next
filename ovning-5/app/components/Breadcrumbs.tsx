import Link from 'next/link';

export default function Breadcrumbs({ segments }: { segments: string[] }) {
  const crumbs = [
    { label: 'Hem', href: '/' },
    { label: 'Events', href: '/events' },
    ...segments.map((seg, i) => ({
      label: seg.replace(/-/g, ' '),
      href: '/events/' + segments.slice(0, i + 1).join('/'),
    })),
  ];

  return (
    <nav>
      {crumbs.map((crumb, i) => (
        <span key={crumb.href}>
          {i > 0 && ' → '}
          {i < crumbs.length - 1
            ? <Link href={crumb.href}>{crumb.label}</Link>
            : <span>{crumb.label}</span>
          }
        </span>
      ))}
    </nav>
  );
}
