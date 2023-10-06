import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface pageProps {
  params: {
    slug: string;
  };
}

const page: FC<pageProps> = ({ params }) => {
  console.log(params.slug);
  return <div>page</div>;
};

export default page;
