'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from './ui/Button';
import { useShoppingCart } from 'use-shopping-cart';

import ShopingCartSummary from './ShopingCart';

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
          {/* <Link href="/login">Link1</Link> */}
          {/* <Link href="/profile">Link2</Link> */}
          <div>
            <Button variant="outline" onClick={() => toggleCart()}>
              <AiOutlineShoppingCart />
              <p className="">{cartCount}</p>
            </Button>
            <div className="flex justify-center items-center gap-1">
              {isOpen &&
                (cartCount === 0 ? null : (
                  // <div className="absolute flex justify-center items-center top-20 z-50 w-40 h-40 right-10 bg-white border border-gray-300 p-4 rounded shadow-lg ">
                  //   <p className="text-xl">Empty</p>
                  // </div>
                  <div className="absolute flex justify-center flex-col top-20 z-50 min-h-min right-10 bg-white border border-gray-300 p-4 rounded shadow-lg">
                    {/* shopping basket summary */}
                    <ShopingCartSummary />
                    <Button className="">
                      <Link href="/cart">Checkout</Link>
                    </Button>
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
