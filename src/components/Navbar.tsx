import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white border border-b-gray-200">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <Image alt="some image" width={100} height={100} src="/logo.png" />
        </Link>

        {/* Desktop Version */}
        <div className=" hidden w-full md:block md:w-auto items-center justify-center">
          <ul className="flex items-center justify-center">
            <li >
              <Link className="block py-2 px-3  text-gray-900  rounded md:hover:text-blue-700" href="/">Home</Link>
            </li>
            <li >
              <Link className="block py-2 px-3  text-gray-900  rounded md:hover:text-blue-700" href="/products">Products</Link>
            </li>
            <li  className="py-2 px-3">
              <Button >Logout</Button>
            </li>
            <li  className="py-2 px-3">
              <Button>Login</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
