import Products from '@/components/Products';
import { SanityProduct } from '@/lib/SanityProductType/product-type';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export default async function Home() {
  const products = await client.fetch<
    SanityProduct[]
  >(groq`*[_type == "product"] {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug":slug.current
  }`);

  return (
    <div>
      <Products products={products} />
    </div>
  );
}
