import Link from 'next/link';
import { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className=" flex justify-between p-10">
      <Link href="#">Home</Link>
      <div>
        <div className="flex gap-6">
          <Link href="/login">Link1</Link>
          <Link href="/profile">Link2</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
