import { SanityProduct } from '@/lib/SanityProductType/product-type';
import ProductCard from './ProductCard';

interface ProductProps {
  products: SanityProduct[];
}

const Products = ({ products }: ProductProps) => {
  return (
    <div className="flex flex-col p-8 lg:p-32 xlg:p-40 w-full h-full ">
      <div className="">
        {products.length} Product{products.length === 1 ? '' : 's'}
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
