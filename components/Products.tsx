import ProductCard from './ProductCard';

interface ProductProps {
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
const Products = ({ products }: ProductProps) => {
  return (
    <div className="flex flex-col p-40 w-full h-full ">
      <div className="">
        {products.length} Product{products.length === 1 ? '' : 's'}
      </div>
      <div className="grid grid-cols-4 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
