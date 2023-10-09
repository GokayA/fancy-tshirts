'use client';
import { FC, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/Button';
import { Loader2 } from 'lucide-react';

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = ({}) => {
  const { formattedTotalPrice, cartCount, cartDetails, redirectToCheckout } =
    useShoppingCart();
  const [isLoading, setIsLoading] = useState(false);
  const isDisabled = isLoading || cartCount! === 0;

  const onCheckout = async () => {
    setIsLoading(true);
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify(cartDetails),
    });
    const data = await response.json();
    const result = await redirectToCheckout(data.id);
    if (result?.error) {
      console.error(result);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex  flex-col py-20 gap-20 border-4 shadow-inner">
      <div className="">
        <h1 className="text-2xl font-bold">Order Summary</h1>
      </div>
      <div className="flex text-xl font-semibold border-b-4 pt-2 justify-between items-center">
        <p>Order total: </p>
        <p className="">{formattedTotalPrice}</p>
      </div>
      <div>
        <Button onClick={onCheckout} className="w-full" disabled={isDisabled}>
          {isLoading && <Loader2 className="animate-spin" />}
          {isLoading ? 'Loading' : 'Checkout'}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
