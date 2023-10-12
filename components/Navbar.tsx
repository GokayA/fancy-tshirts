'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from './ui/Button';
import { useShoppingCart } from 'use-shopping-cart';

import ShopingCartSummary from './ShopingCart';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import Image from 'next/image';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useShoppingCart();

  useOnClickOutside(navbarRef, () => {
    setIsOpen(false);
  });

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  const handleCheckout = () => {
    router.push('/cart');
    setIsOpen(false);
  };

  if (pathname.startsWith('/studio')) return null;
  return (
    <div ref={navbarRef} className=" flex justify-between p-10">
      <Link onClick={() => setIsOpen(false)} href="/">
        <Image width={60} height={60} alt="logo" src="/logo.png" />
      </Link>
      <div>
        <div className="flex gap-6">
          {/* <Link href="/login">Link1</Link> */}
          {/* <Link href="/profile">Link2</Link> */}
          <div>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-slate-300 hover:scale-110"
              onClick={() => toggleCart()}
            >
              <AiOutlineShoppingCart />
              <p className="">{cartCount}</p>
            </Button>
            <div className="flex justify-center items-center gap-1">
              {isOpen &&
                (cartCount === 0 ? null : (
                  <div className="absolute flex justify-center flex-col top-20 z-50 min-h-min right-10 bg-white border border-gray-300 p-4 rounded shadow-lg">
                    {/* shopping basket summary */}
                    <ShopingCartSummary />
                    <Button onClick={handleCheckout}>Checkout</Button>
                  </div>
                ))}
            </div>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <Link href="/studio">Studio</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
