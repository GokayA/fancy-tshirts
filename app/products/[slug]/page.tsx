import ProductImage from '@/components/ProductImage';
import ProductInfo from '@/components/ProductInfo';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { FC } from 'react';

interface pageProps {
  params: {
    slug: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == "${params.slug}"][0] {
      _id,
      _createdAt,
      "id":_id,
      name,
      price,
      currency,
      categories,
      sku,
      images,
      description,
      sizes,
      colors,
      "slug": slug.current
    }`
  );

  console.log(product.images[0]);

  return (
    <div className="flex px-40 py-20 gap-20">
      <ProductImage product={product} />
      <ProductInfo product={product} />
    </div>
  );
};

export default page;
