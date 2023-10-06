'use client';
import { SanityProduct } from '@/lib/SanityProductType/product-type';
import { shimmer, toBase64 } from '@/lib/image';
import { urlForImage } from '@/sanity/lib/image';
import { ImageUrlBuilderOptionsWithAsset } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { formatCurrencyString } from 'use-shopping-cart';

interface ProductCardProps {
  product: SanityProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.slug}`} className="">
      <div className="flex items-center p-10 gap-2">
        <div
          className="flex flex-col justify-center items-center"
          key={product._id}
        >
          <p className="">{product.name}</p>
          <div className="relative w-40 h-40 ">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(225, 280)
              )}`}
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              fill
              className="object-contain bg-white"
              sizes="300"
            />
          </div>
          <p>
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <button className="bg-red-500">Add to cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
