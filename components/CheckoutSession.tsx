'use client';
import { useEffect, FC } from 'react';
import Stripe from 'stripe';
import { Button } from './ui/Button';
import { useRouter } from 'next/navigation';
import { useShoppingCart } from 'use-shopping-cart';
import { CheckCheck } from 'lucide-react';

interface CheckoutSessionProps {
  customerDetails: Stripe.Checkout.Session.CustomerDetails | null;
}

const CheckoutSession: FC<CheckoutSessionProps> = ({ customerDetails }) => {
  const { clearCart } = useShoppingCart();
  const router = useRouter();

  useEffect(() => {
    if (customerDetails) {
      clearCart();
    }
  }, [customerDetails]);

  if (!customerDetails) {
    return (
      <>
        <h1 className="mt-4 text-3xl font-bold">No checkout session found</h1>
      </>
    );
  }
  return (
    <div>
      <div className="flex gap-4 flex-col justify-center items-center p-40">
        <CheckCheck size={80} className="text-green-600" />
        <p className="text-green-600 text-4xl">Order Successful!</p>
        <p className="text-2xl">Thank you, {customerDetails.name}</p>
        <p className="text-xl text-gray-600">
          Check your purchase email{' '}
          <span className="text-blue-600">{customerDetails.email}</span> for
          your invoice
        </p>
        <Button onClick={() => router.push('/')}>Go back to home page</Button>
      </div>
    </div>
  );
};

export default CheckoutSession;
