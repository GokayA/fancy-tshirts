'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Button, buttonVariants } from './ui/Button';
import { useShoppingCart } from 'use-shopping-cart';

import ShopingCartSummary from './ShopingCart';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';

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
          <div>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-slate-300 hover:scale-110"
              onClick={() => toggleCart()}
            >
              <ShoppingBag size={22} arial-label="shopping-bag" />
              <p>{cartCount}</p>
            </Button>
            <div className="flex justify-center items-center gap-1">
              {isOpen &&
                (cartCount === 0 ? null : (
                  <div className="absolute flex justify-center flex-col top-20 z-50 min-h-min right-10 bg-white border border-gray-300 p-4 rounded shadow-lg">
                    {/* shopping basket summary */}
                    <ShopingCartSummary arial-label="cart-summary" />
                    <Button onClick={handleCheckout}>Your Cart</Button>
                  </div>
                ))}
            </div>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <Link className={buttonVariants()} href="/studio">
              Studio
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
