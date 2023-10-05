import ProductCard from './ProductCard';
interface ProductCardProps {}
const Products = ({}: ProductCardProps) => {
  // const products = await client.fetch<Props[]>(groq`*[_type == "product"] {
  //   _id,
  //   _createdAt,
  //   name,
  //   sku,
  //   images,
  //   currency,
  //   price,
  //   description,
  //   "slug":slug.current
  // }`);
  // console.log(products);
  const products = [
    {
      _id: '123',
      _createdAt: '23.02.1990',
      name: 'Blue tshirt',
      sku: 'blue-tshirt',
      images: '/blue.png',
      currency: 'USD',
      price: 19800,
      description: 'blue tshirt description',
      slug: 'blue-tshirt-1',
    },
    {
      _id: '1234',
      _createdAt: '23.02.1990',
      name: 'red tshirt',
      sku: 'red-tshirt',
      images: '/red.png',
      currency: 'USD',
      price: 14800,
      description: 'red tshirt description',
      slug: 'red-tshirt-1',
    },
    {
      _id: '1235',
      _createdAt: '23.02.1990',
      name: 'yellow tshirt',
      sku: 'yellow-tshirt',
      images: '/yellow.png',
      currency: 'USD',
      price: 18800,
      description: 'yellow tshirt description',
      slug: 'yellow-tshirt-1',
    },
    {
      _id: '1236',
      _createdAt: '23.02.1990',
      name: 'white tshirt',
      sku: 'white-tshirt',
      images: '/white.png',
      currency: 'USD',
      price: 10800,
      description: 'white tshirt description',
      slug: 'white-tshirt-1',
    },
  ];
  return (
    <div className="flex flex-col p-40 w-full h-full ">
      <div className="">
        {products.length} Product{products.length === 1 ? '' : 's'}
      </div>
      <ProductCard products={products} />
    </div>
  );
};

export default Products;
