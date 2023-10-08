'use client';
import { SanityProduct } from '@/lib/SanityProductType/product-type';

import { FC, useState } from 'react';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/Button';
import { useToast } from './ui/use-toast';

interface ProductInfoProps {
  product: SanityProduct;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addItem, cartDetails, incrementItem } = useShoppingCart();
  const { toast } = useToast();
  const isExist = !!cartDetails?.[product._id];

  const addToCart = () => {
    const item = {
      ...product,
      product_data: {
        size: selectedSize,
      },
    };
    isExist ? incrementItem(item._id) : addItem(item);
    toast({
      title: `${item.name} (${selectedSize})`,
      description: `Product added to cart`,
      variant: 'default',
    });
  };

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
        <div className="flex gap-1">
          <p className="capitalize">Size:</p>
          <p className="capitalize  font-bold">{selectedSize}</p>
        </div>
        <p>{product.description}</p>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <div key={size}>
              <Button
                variant={selectedSize === size ? 'default' : 'outline'}
                onClick={() => setSelectedSize(size)}
                className="p-2 cursor-pointer border-[1px] capitalize border-blue-500"
              >
                {size}
              </Button>
            </div>
          ))}
        </div>
        {/* <p>{product.colors}</p> */}
        <div className="w-full">
          <Button
            onClick={() => addToCart()}
            className="w-full h-10 bg-purple-500 text-white cursor-pointer mx-auto"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
