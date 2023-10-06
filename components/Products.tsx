import { SanityProduct } from '@/lib/SanityProductType/product-type';
import ProductCard from './ProductCard';

interface ProductProps {
  products: SanityProduct[];
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
