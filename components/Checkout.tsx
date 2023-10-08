import { FC } from 'react';

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = ({}) => {
  return (
    <div>
      <div>
        <h1 className="text-lg">Order Summary</h1>
      </div>
      <div className="flex justify-between items-center">
        <p>Subtotal</p>
        <p>3$</p>
      </div>
    </div>
  );
};

export default Checkout;
