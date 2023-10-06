import { SanityProduct } from '@/lib/SanityProductType/product-type';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { FC } from 'react';

interface ProductImageProps {
  product: SanityProduct;
}

const ProductImage: FC<ProductImageProps> = ({ product }) => {
  return (
    <div className="flex ">
      <div className="relative w-96 h-96">
        <Image
          src={urlForImage(product.images[0]).url()}
          className="object-contain bg-white"
          fill
          alt={product.name}
        />
      </div>
    </div>
  );
};

export default ProductImage;
