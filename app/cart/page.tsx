import CartSummary from '@/components/CartSummary';
import Checkout from '@/components/Checkout';

const page = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3x pb-20 font-bold tracking-tight sm:text-4xl">
        Shopping cart
      </h1>
      <div className="flex lg:flex-row flex-col w-full h-full gap-2">
        <div className="w-full h-full">
          <CartSummary />
        </div>
        <div className="w-full h-full">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default page;
