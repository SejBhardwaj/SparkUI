import Link from 'next/link';
import { IconFlower } from '@tabler/icons-react';
interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center group text-2xl font-bold ${className}`} prefetch={false}>
      <IconFlower size={28} className='text-primary' />
      <span className='text-foreground'>Joko</span>
      <span className='text-primary'>UI</span>
    </Link>
  );
}
