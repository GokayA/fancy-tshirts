'use client';
import { SanityProduct } from '@/lib/SanityProductType/product-type';

import { FC, useState } from 'react';
import { formatCurrencyString } from 'use-shopping-cart';

interface ProductInfoProps {
  product: SanityProduct;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const [size, setSize] = useState();

  return (
    <div className="flex ">
      <div className="flex flex-col jusify-center gap-4">
        <div className="pb-4">
          <h1 className="pb-4 w-full text-4xl">{product.name}</h1>
          <p className="text-2xl font-bold">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
        </div>
        <p>{product.description}</p>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <div key={size}>
              <button className="p-2 cursor-pointer border-[1px] capitalize border-blue-500">
                {size}
              </button>
            </div>
          ))}
        </div>
        {/* <p>{product.colors}</p> */}
        <div className="w-full">
          <button className="w-full h-10 bg-purple-500 text-white cursor-pointer mx-auto">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
