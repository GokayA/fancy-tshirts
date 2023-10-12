'use client';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/Button';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/lib/image';
import { urlForImage } from '@/sanity/lib/image';
import { toast } from './ui/use-toast';
import { Product } from 'use-shopping-cart/core';
import { Input } from './ui/Input';

const ShopingCart = () => {
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
            <p className="text-xl font-bold capitalize">{product.name}</p>
            <div className=" capitalize flex gap-20  items-center">
              <div className="flex gap-1 items-center">
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
  );
};

export default ShopingCart;
