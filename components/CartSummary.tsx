'use client';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';
import { Button, buttonVariants } from './ui/Button';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/lib/image';
import { urlForImage } from '@/sanity/lib/image';
import { toast } from './ui/use-toast';
import { Product } from 'use-shopping-cart/core';
import { Input } from './ui/Input';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const CartSummary = () => {
  const { cartDetails, removeItem, setItemQuantity } = useShoppingCart();
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

  return (
    <div className="border pt-10">
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center min-w-[10vw] min-h-[45vh]">
          <div>
            <div className="flex text-lg gap-1 justify-center items-center flex-col ">
              <ShoppingBag size={42} />
              <p className="font-semibold">No products added</p>
              <p className="text-gray-600">Add products to your cart</p>
              <Link className={buttonVariants()} href="/">
                Add products
              </Link>
            </div>
          </div>
        </div>
      ) : (
        cartItems.map((product, index) => (
          <li key={product._id} className="max-h-[40vh] flex pb-2">
            <div className="relative w-96 h-96">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(255, 255)
                )}`}
                src={urlForImage(product.images[0]).url()}
                alt={product.name}
                fill
                className="object-contain p-2"
                sizes="255"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold capitalize">{product.name}</p>
              <div className=" capitalize flex sm:flex-row flex-col gap-20  items-center">
                <div className="flex sm:flex-row flex-col gap-1 items-center">
                  <p className="text-lg">{product.product_data?.size} x</p>
                  <Input
                    id={`quantity-${index}`}
                    name={`quantity-${index}`}
                    type="number"
                    className="w-16"
                    min={1}
                    max={10}
                    value={product.quantity}
                    onChange={(event) =>
                      setItemQuantity(product._id, Number(event.target.value))
                    }
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => removeCartItem(product)}
                  className="text-red-500 z-50"
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
        ))
      )}
    </div>
  );
};

export default CartSummary;
