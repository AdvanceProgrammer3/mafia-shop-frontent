import Link from "next/link";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const session = false;

  return (
    <header className=" shadow-lg sticky top-0">
      <div className="flex justify-between items-center p-2 lg:max-w-7xl mx-auto lg:p-6">
        <div>
          <Link href="/" className="text-xl space-x-1">
            <span className=" text-blue-400/70">Mafia</span>
            <span className="text-blue-600/40">Shop</span>
          </Link>
        </div>

        {/* Menu Option */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-blue-500">
            Home
          </Link>
          <Link href="about" className="text-blue-500">
            About
          </Link>
          <Link href="/contact" className="text-blue-500">
            Contact
          </Link>
        </div>

        {/* Basket and Signin or Signup */}
        <div className="flex space-x-4">
          <ShoppingCartIcon className="h-8 w-8" />
          {session ? (
            <UserCircleIcon className="h-10 w-10" />
          ) : (
            <Link href="/signup">SignIn</Link>
          )}
        </div>

        {/* Phone */}
      </div>

      <div className="p-2 md:hidden">
        <div className="flex justify-between">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 hover:font-bold font-medium active:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="about"
            className="text-blue-500 hover:text-blue-700 hover:font-bold font-medium active:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-blue-500 hover:text-blue-700 hover:font-bold font-medium active:underline underline-offset-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
