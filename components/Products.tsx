import { SanityProduct } from '@/lib/SanityProductType/product-type';
import ProductCard from './ProductCard';

interface ProductProps {
  products: SanityProduct[];
}

const Products = ({ products }: ProductProps) => {
  return (
    <div className="flex flex-col p-8 lg:p-12  w-full h-full ">
      <div className="pl-20 border-b-2 pb-2">
        <p className="text-lg text-gray-500">
          {products.length} Product{products.length === 1 ? '' : 's'}
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
