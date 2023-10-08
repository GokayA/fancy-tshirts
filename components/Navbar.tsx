'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from './ui/Button';
import { useShoppingCart } from 'use-shopping-cart';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useShoppingCart();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  if (pathname.startsWith('/studio')) return null;
  return (
    <div className=" flex justify-between p-10">
      <Link href="/">Home</Link>
      <div>
        <div className="flex gap-6">
          <Link href="/login">Link1</Link>
          <Link href="/profile">Link2</Link>
          <Button variant="outline" onClick={() => toggleCart()}>
            <div className="flex justify-center items-center gap-1">
              <AiOutlineShoppingCart />
              <p className="">{cartCount}</p>
              {isOpen && (
                <div className="absolute top-20 z-50 h-72 w-40 right-10 bg-slate-600 border border-gray-300 p-4 rounded shadow-lg"></div>
              )}
            </div>
          </Button>
          {process.env.NODE_ENV === 'development' && (
            <Link href="/studio">Studio</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
