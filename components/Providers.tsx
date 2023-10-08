'use client';
import { FC } from 'react';
import { CartProvider } from 'use-shopping-cart';
import { Toaster } from './ui/toaster';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CartProvider
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
      currency="USD"
      shouldPersist
      cartMode="checkout-session"
    >
      <Toaster />
      {children}
    </CartProvider>
  );
};

export default Providers;
