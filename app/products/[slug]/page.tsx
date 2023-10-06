import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
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
    <div>
      <div>
        <Image src={product.images[0]} alt={product.name} />
      </div>
      <div>sag</div>
    </div>
  );
};

export default page;
