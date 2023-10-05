import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

interface Props {
  _id: string;
  _createdAt: Date;
  name: string;
  sku: string;
  images: string;
  currency: string;
  price: number;
  description: string;
  slug: string;
}

export default async function Home() {
  const products = await client.fetch<Props[]>(groq`*[_type == "product"] {
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
  console.log(products);
  return (
    <div className="flex justify-center items-center p-40 w-full h-full ">
      <div className="container">
        {products.length} Product {products.length === 1 ? '' : 's'}
      </div>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
