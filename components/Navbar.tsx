'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from './ui/Button';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/lib/image';
import { urlForImage } from '@/sanity/lib/image';
import { Product } from 'use-shopping-cart/core';
import { toast } from './ui/use-toast';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, cartDetails, removeItem } = useShoppingCart();
  const cartItems = Object.entries(cartDetails!).map(
    ([_, product]: any) => product
  );

  const removeCartItem = (product: Product) => {
    removeItem(product._id);
    toast({
      title: `${product.name} deleted.`,
      description: 'Product deleted',
      variant: 'destructive',
    });
  };

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
          <Button variant="outline" onClick={() => toggleCart()}>
            <div className="flex justify-center items-center gap-1">
              <AiOutlineShoppingCart />
              <p className="">{cartCount}</p>
              {isOpen &&
                (cartItems.length === 0 ? (
                  <div className="absolute "></div>
                ) : (
                  <div className="absolute top-20 z-50 min-h-min right-10 bg-white border border-gray-300 p-4 rounded shadow-lg">
                    {cartItems.map((product, index) => (
                      <li key={product._id} className="flex pb-2">
                        <div className="relative w-20 h-20 ">
                          <Image
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                              shimmer(100, 100)
                            )}`}
                            src={urlForImage(product.images[0]).url()}
                            alt={product.name}
                            fill
                            className="object-contain  "
                            sizes="100"
                          />
                        </div>
                        <div className="flex flex-col  ">
                          <p className="text-xl font-bold capitalize">
                            {product.name}
                          </p>
                          <div className=" capitalize flex gap-20  items-center">
                            <div className="flex gap-1">
                              <p>{product.product_data?.size}</p>
                              <p className="">x {product.quantity}</p>
                            </div>
                            <Button
                              variant="outline"
                              onClick={() => removeCartItem(product)}
                              className="text-red-500"
                            >
                              X
                            </Button>
                          </div>
                          <p>
                            {formatCurrencyString({
                              value: product.price,
                              currency: product.currency,
                            })}
                          </p>
                        </div>
                      </li>
                    ))}
                  </div>
                ))}
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
