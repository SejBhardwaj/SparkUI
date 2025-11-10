import Link from 'next/link';

interface ComponentCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  href: string;
  description?: string;
}

export default function ComponentCard({ title, count, icon, href, description }: ComponentCardProps) {
  return (
    <Link
      href={href}
      className="glass-card p-6 block group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
      prefetch={false}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl text-primary">{icon}</span>
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {count} components
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </Link>
  );
}
