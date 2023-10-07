'use client';
import { SanityProduct } from '@/lib/SanityProductType/product-type';
import { shimmer, toBase64 } from '@/lib/image';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrencyString } from 'use-shopping-cart';

interface ProductCardProps {
  product: SanityProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.slug}`} className="">
      <div className="flex items-center p-10 gap-2 ">
        <div className="flex flex-col gap-3" key={product._id}>
          <p className="text-3xl">{product.name}</p>
          <div className="relative w-60 h-60 ">
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
          <p className="text-xl">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
