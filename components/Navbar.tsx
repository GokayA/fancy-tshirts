'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const pathname = usePathname();
  if (pathname.startsWith('/studio')) return null;
  return (
    <div className=" flex justify-between p-10">
      <Link href="/">Home</Link>
      <div>
        <div className="flex gap-6">
          <Link href="/login">Link1</Link>
          <Link href="/profile">Link2</Link>
          {process.env.NODE_ENV === 'development' && (
            <Link href="/studio">Studio</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
