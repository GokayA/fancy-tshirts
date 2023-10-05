import Image from 'next/image';
import { FC } from 'react';

interface ProductCardProps {
  products: {
    _id: string;
    _createdAt: string;
    name: string;
    sku: string;
    images: string;
    currency: string;
    price: number;
    description: string;
    slug: string;
  }[];
}

const ProductCard: FC<ProductCardProps> = ({ products }) => {
  return (
    <div className="">
      <div className="flex items-center p-10 gap-2">
        {products.map((product) => (
          <div
            className="flex flex-col justify-center items-center"
            key={product._id}
          >
            <p className="">{product.name}</p>
            <div className="relative w-40 h-40 ">
              <Image
                src={product.images}
                alt={product.name}
                fill
                className="object-contain bg-white"
                sizes="300"
              />
            </div>
            <p>
              {product.price / 100}$ {product.currency}
            </p>
            <button className="bg-red-500">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
