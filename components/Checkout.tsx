'use client';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/Button';
import { Loader2 } from 'lucide-react';

const Checkout = () => {
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
    <div className="flex lg:bg-stone-200 flex-col py-20 gap-20 lg:border-4 max-lg:fixed max-lg:-bottom-10 w-full md:fixed lg:w-[30vw]">
      <div className="">
        <h1 className="text-2xl font-bold hidden lg:block">Order Summary</h1>
      </div>
      <div>
        <div className="flex bg-stone-200 text-xl font-semibold border-b-4 pt-2  items-center">
          <p>Order total: </p>
          <p className="px-20 md:px-2">{formattedTotalPrice}</p>
        </div>
        <Button onClick={onCheckout} className="w-full" disabled={isDisabled}>
          {isLoading && <Loader2 className="animate-spin" />}
          {isLoading ? 'Loading' : 'Checkout'}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
