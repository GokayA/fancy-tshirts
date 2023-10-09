import CheckoutSession from '@/components/CheckoutSession';
import { stripe } from '@/lib/stripe';
import { FC } from 'react';

interface pageProps {
  searchParams: {
    session_id?: string;
  };
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const sessionId = searchParams?.session_id ?? '';
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
  const custormerDetails = checkoutSession?.customer_details;

  return (
    <div>
      <CheckoutSession customerDetails={custormerDetails} />
    </div>
  );
};

export default page;
